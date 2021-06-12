import React from 'react'
import { CircularProgress, Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import CartService from '../services/CartService'
import '../assets/scss/Item.scss'

function Item({ itemId, name, imageUrl, price }) {

    const userId = sessionStorage.getItem("token");

    const [alert, setAlert] = React.useState(false);
    const [alertMsg, setAlertMsg] = React.useState();
    const [isLoading, setIsLoading] = React.useState(false);

    const handleClick = () => {
        setIsLoading(true);
        new CartService().addItemToCart(userId, itemId)
            .then(res => {
                console.log(res);
                setAlertMsg(res.data.message);
                setIsLoading(false);
                setAlert(true);
            });
    };

    return (
        <>
            <div className="item" onClick={handleClick}>
                <img src={imageUrl} alt="item_" />
                <h2>{name}</h2>
                <h2>₹ {price}</h2>
                {isLoading ?
                    <CircularProgress size={39} /> :
                    <h4>{itemId}</h4>
                }
            </div>

            <Snackbar open={alert}
                onClose={() => setAlert(false)}
                autoHideDuration={2000}
            >
                <Alert elevation={2}
                    severity="success" variant="filled">
                    {alertMsg}
                </Alert>
            </Snackbar>
        </>
    )
}

export default Item