import { Button, Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import '../assets/scss/Dashboard.scss'
import Cart from '../components/Cart'
import Item from '../components/Item'
import Order from '../components/Order'
import CartService from '../services/CartService'
import ItemService from '../services/ItemService'
import OrderService from '../services/OrderService'

function Dashboard() {

    const userId = sessionStorage.getItem("token");

    const history = useHistory();

    const [items, setItems] = React.useState([]);
    const [alert, setAlert] = React.useState(false);
    const [alertOption, setAlertOption] = React.useState({
        msg: '',
        severity: ''
    });
    const [placedOrder, setPlacedOrder] = React.useState([]);

    useEffect(() => {
        new ItemService().getAllItems()
            .then(res => setItems(res.data.items));
    }, [])

    const handleCheckout = async () => {
        await new CartService().getCartByUser(userId)
            .then(res => {
                if (res.data.cart) return res.data.cart._id;
                else {
                    setAlertOption({
                        msg: "Cart is empty",
                        severity: "error"
                    });
                    setAlert(true);
                }
            })
            .then(cartId =>
                new CartService()
                    .convertCartToOrder(cartId, userId)
                    .then(res => {
                        setPlacedOrder(res.data.cart.items)
                        new OrderService().createOrder(userId, cartId)
                            .then(res => {
                                setAlertOption({
                                    msg: res.data.message,
                                    severity: "success"
                                });
                                setAlert(true);
                                setTimeout(function () {
                                    window.location.reload(1);
                                }, 2900);
                            });
                    }))
    };

    const handleLogout = () => {
        sessionStorage.clear();
        history.push('/signin');
    };

    return (
        <div className='dashboard'>
            <div className="dashboard__header">
                <h1>Welcome to Online Shopping Store.</h1>

                <div className="dashboard__header__buttons">
                    <Button variant="contained" color="secondary"
                        onClick={handleCheckout}>
                        Checkout
                    </Button>
                    <Cart />
                    <Order />
                    <Button variant="contained" color="inherit"
                        onClick={handleLogout}>
                        Logout
                    </Button>
                </div>
            </div>

            <div className="dashboard__items">
                {items.map(item => {
                    return < Item
                        itemId={item._id}
                        imageUrl={item.imageUrl}
                        name={item.name}
                        price={item.price}
                    />
                }
                )}
            </div>

            <Snackbar
                open={alert}
                onClose={() => setAlert(false)}
                autoHideDuration={2800}
            >
                <Alert elevation={2}
                    severity={alertOption.severity}
                    variant="filled">
                    {Array.from(placedOrder)
                        .map(id => { return <h5>{id}</h5> })}
                    {alertOption.msg}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Dashboard
