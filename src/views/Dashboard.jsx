import { Button, Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import React, { useEffect } from 'react'
import '../assets/scss/Dashboard.scss'
import Cart from '../components/Cart'
import Item from '../components/Item'
import Order from '../components/Order'
import CartService from '../services/CartService'
import ItemService from '../services/ItemService'
import OrderService from '../services/OrderService'

function Dashboard() {

    const userId = sessionStorage.getItem("token");

    const [items, setItems] = React.useState([]);
    const [alert, setAlert] = React.useState(false);
    const [showOrders, setShowOrders] = React.useState(false);

    useEffect(() => {
        new ItemService().getAllItems()
            .then(res => setItems(res.data.items));
    }, [])

    const handleCheckout = async () => {
        await new CartService().getCartByUser(userId)
            .then(res => {
                if (res.data.cart) return res.data.cart._id;
            })
            .then(cartId =>
                new CartService()
                    .convertCartToOrder(cartId, userId)
                    .then(res => {
                        new OrderService().createOrder(userId, cartId)
                            .then(res => {
                                setAlert(true);
                                setShowOrders(true)
                                // window.location.reload();
                            });
                    }))
    };

    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlert(false);
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
                    <Order showOrder={showOrders} />
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

            <Snackbar open={alert} onClose={handleCloseSnackBar} autoHideDuration={2000}>
                <Alert elevation={2} severity="success">
                    {"Order Placed Successfully"}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Dashboard
