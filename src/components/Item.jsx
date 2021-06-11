import React from 'react'
import { Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import CartService from '../services/CartService'
import '../assets/scss/Item.scss'

function Item({ itemId, name, imageUrl, price }) {

    const [alert, setAlert] = React.useState(false);

    const handleClick = () => {
        const userId = sessionStorage.getItem("token");
        new CartService().addItemToCart(userId, itemId)
            .then(res => {
                setAlert(true);
            });
    };

    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlert(false);
    };

    return (
        <>
            <div className="item" onClick={handleClick}>
                <img src={imageUrl} alt="item_" />
                <h2>{name}</h2>
                <h2>₹ {price}</h2>
            </div>

            <Snackbar open={alert} onClose={handleCloseSnackBar} autoHideDuration={2000}>
                <Alert elevation={2} severity="success">
                    {"Item Added to Cart"}
                </Alert>
            </Snackbar>
        </>
    )
}

export default Item