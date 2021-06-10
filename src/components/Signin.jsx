import React, { Component } from 'react'
import {
    Avatar,
    Button,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Snackbar,
} from '@material-ui/core'
import {
    AccountBox,
    Visibility,
    VisibilityOff
} from '@material-ui/icons';
import LockIcon from '@material-ui/icons/Lock'
import Alert from '@material-ui/lab/Alert'
import { Link } from 'react-router-dom'
import userService from '../services/UserService'
import '../assets/scss/Signin.scss'

export default class Signin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            alertMsg: "",
            alertColor: "",
            showPassword: false,
            alert: false
        };
    }

    handleClickShowPassword = () => {
        this.setState({
            showPassword: !this.state.showPassword
        });
    };

    handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ alert: false });
    };

    handleSignin = () => {
        let requestBody = {
            username: this.state.username,
            password: this.state.password
        }
        new userService().signin(requestBody)
            .then(res => {
                sessionStorage.setItem("token", String(res.data.user.token));
                this.setState({
                    alertMsg: res.data.message,
                    alertColor: "success",
                    alert: true
                })
                setTimeout(() => {
                    this.props.history.replace('/dashboard', null)
                }, 2000);
            },
                err => {
                    this.setState({
                        alertMsg: err.response.data.message,
                        alertColor: "error",
                        alert: true
                    })
                })
    };

    render() {
        return (
            <div className="login">
                <Avatar src='https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhzJTIwc3RvcmVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                    alt="..." />

                <h1><span>Online-Shopping</span> Store</h1>

                <form>
                    <Grid container justify='space-evenly' spacing={2}>
                        <Grid xs={12} sm={5}>
                            <FormControl variant="outlined" fullWidth style={{ margin: "1%" }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Account</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    value={this.state.username}
                                    onChange={(e) => this.setState({ username: e.target.value })}
                                    startAdornment={<InputAdornment position="start"><AccountBox /></InputAdornment>}
                                    labelWidth={50}
                                />
                            </FormControl>
                        </Grid>

                        <Grid xs={12} sm={6}>
                            <FormControl variant="outlined" fullWidth style={{ margin: "1%" }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    value={this.state.password}
                                    onChange={(e) => this.setState({ password: e.target.value })}
                                    startAdornment={<InputAdornment position="start"><LockIcon /></InputAdornment>}
                                    endAdornment={<InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                            onMouseDown={this.handleMouseDownPassword}
                                        >
                                            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>}
                                    labelWidth={50}
                                />
                            </FormControl>
                        </Grid>

                        <Grid xs={12} sm={5}>
                            <Button
                                variant="contained"
                                color="inherit"
                                fullWidth
                                style={{ margin: "1%" }}
                                onClick={this.handleSignin}
                            >
                                Signin
                        </Button>
                        </Grid>

                        <Grid xs={12} sm={6}>
                            <Link to="/signup" className="login__signup">
                                create an account here.
                        </Link>
                        </Grid>
                    </Grid>
                </form>

                <Snackbar open={this.state.alert} onClose={this.handleCloseSnackBar} autoHideDuration={1500}>
                    <Alert elevation={2} severity={this.state.alertColor} onClose={this.handleCloseSnackBar}>
                        {this.state.alertMsg}
                    </Alert>
                </Snackbar>
            </div>
        )
    }
}
