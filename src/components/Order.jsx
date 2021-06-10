import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';
import React, { useEffect } from 'react'

function Order() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {


    }, [])

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
                        Ordersssssssssss
            </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    )
};

export default Order
