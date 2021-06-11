import {
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@material-ui/core';
import React from 'react'
import cartService from '../services/CartService'

function Cart() {

    const userId = sessionStorage.getItem("token");

    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [cartId, setCartId] = React.useState();

    const handleClickOpen = () => {
        new cartService().getCartByUser(userId)
            .then(res => {
                if (res.data.cart === null) {
                    setData([]);
                    setCartId("cart is empty");
                }
                else {
                    setData(res.data.cart.items);
                    setCartId(res.data.cart._id);
                }
                setOpen(true);
            });
    };

    return (
        <div>
            <Button variant="outlined" color="primary"
                onClick={handleClickOpen}
            >
                Cart
           </Button>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{cartId}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Item Id</TableCell>
                                        <TableCell align="right">Name</TableCell>
                                        <TableCell align="right">Price</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {Array.from(data).map((item) => (
                                        <TableRow key={item._id}>
                                            <TableCell component="th" scope="row">
                                                {item._id}
                                            </TableCell>
                                            <TableCell align="right">{item.name}</TableCell>
                                            <TableCell align="right">₹ {item.price}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    )
};

export default Cart
