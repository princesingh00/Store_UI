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
import OrderService from '../services/OrderService'

function Order({ showOrder }) {

    const userId = sessionStorage.getItem("token");

    const [open, setOpen] = React.useState(showOrder);
    const [orderItems, setOrderItems] = React.useState([]);

    const handleClickOpen = () => {
        new OrderService().getOrdersByUser(userId)
            .then(res => {
                setOrderItems(res.data.order);
                setOpen(true);
            })
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button color="primary" variant="contained" onClick={handleClickOpen}>
                Orders
           </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"User Orders"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Order Ids</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {Array.from(orderItems).map((order) => (
                                        <TableRow key={order._id}>
                                            <TableCell component="th" scope="row">
                                                {order._id}
                                            </TableCell>
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

export default Order
