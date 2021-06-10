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
} from '@material-ui/core'
import {
    AccountBox,
    Visibility,
    VisibilityOff
} from '@material-ui/icons';
import LockIcon from '@material-ui/icons/Lock'
import Alert from '@material-ui/lab/Alert'
import '../assets/scss/Signin.scss'
import { Link } from 'react-router-dom'

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

    handleSignin = () => {
        console.log(this.state);
    };

    render() {
        return (
            <div className='login'>
                <Avatar src='https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhzJTIwc3RvcmVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />

                <h1><span>Online-Shopping</span>Store</h1>

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
                                create a account here.
                        </Link>
                        </Grid>
                    </Grid>
                </form>

                {alert ?
                    <Alert
                        severity={this.state.alertColor}
                        variant="filled" >
                        {this.state.alertMsg}
                    </Alert> :
                    null
                }
            </div>
        )
    }
}
