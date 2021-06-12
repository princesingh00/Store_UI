import {
    Button,
    CircularProgress,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow
} from '@material-ui/core';
import React from 'react'
import OrderService from '../services/OrderService'

function Order({ showOrder }) {

    const userId = sessionStorage.getItem("token");

    const [open, setOpen] = React.useState(showOrder);
    const [orderItems, setOrderItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    const handleClickOpen = () => {
        setIsLoading(true);
        new OrderService().getOrdersByUser(userId)
            .then(res => {
                setOrderItems(res.data.order);
                setIsLoading(false);
                setOpen(true);
            })
    };

    return (
        <div>
            <Button color="primary" variant="contained" onClick={handleClickOpen}>
                {isLoading ? <CircularProgress color="inherit" size={24} /> : "Orders"}
            </Button>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">User Order Ids</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
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
