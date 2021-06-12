import React, { Component } from 'react'
import {
    Button,
    CircularProgress,
    Grid,
    Snackbar,
    TextField
} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import userService from '../services/UserService'
import '../assets/scss/Signup.scss'
import { Link } from 'react-router-dom';


export default class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            username: "",
            password: "",
            alertMsg: "",
            alertColor: "",
            showPassword: false,
            alert: false,
            isLoading: false,
            errors: {
                name: "",
                username: "",
                password: "",
                validation: ""
            }
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'name':
                errors.name = value.length < 6
                    ? 'Name must be 5 characters long!'
                    : '';
                break;
            case 'username':
                errors.username = value.length < 6
                    ? 'Username must be 6 characters long!'
                    : '';
                break;
            case 'password':
                errors.password = value.length < 6
                    ? 'Password must be 6 characters long!'
                    : '';
                break;
            default:
                break;
        }
        this.setState({ errors, [name]: value })
    }

    handleSignUp = () => {
        this.setState({ isLoading: true })
        let requestBody = {
            name: this.state.name,
            username: this.state.username,
            password: this.state.password
        }
        if (requestBody.name.length > 5 &&
            requestBody.username.length > 5 &&
            requestBody.password.length > 5)
            new userService().signup(requestBody)
                .then(res => {
                    this.setState({
                        isLoading: false,
                        alertMsg: res.data.message,
                        alertColor: "success",
                        alert: true
                    })
                    setTimeout(() => {
                        this.props.history.replace('/signin', null)
                    }, 2000);
                }, (err) => {
                    this.setState({
                        isLoading: false,
                        alertMsg: err.response.data.message,
                        alertColor: "error",
                        alert: true
                    })
                })
        else {
            this.setState({
                alertMsg: "Name, Username, Password must be 6 char long!",
                alertColor: "error",
                isLoading: false,
                alert: true
            });
        }
    };

    render() {
        return (
            <div className="signup">
                <form>
                    <h2>Sign up</h2>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                name="name"
                                label="Your name"
                                fullWidth
                                autoComplete="name"
                                onChange={this.handleChange}
                                helperText={this.state.errors.name}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                name="username"
                                label="Username"
                                fullWidth
                                onChange={this.handleChange}
                                helperText={this.state.errors.username}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                name="password"
                                label="Password"
                                type="password"
                                onChange={this.handleChange}
                                fullWidth
                                helperText={this.state.errors.password}
                            />
                        </Grid>

                        <Grid item xs={12} />
                        <Grid item xs={12} sm={4} />

                        <Grid item xs={12} sm={2}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={this.handleSignUp}
                            >
                                {this.state.isLoading ?
                                    <CircularProgress size={24} color="inherit" /> :
                                    "Signup"
                                }
                            </Button>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Link to="/signin" className="signup__signin">
                                Login here.
                        </Link>
                        </Grid>
                    </Grid>
                </form>

                <Snackbar
                    open={this.state.alert}
                    onClose={() => this.setState({ alert: false })}
                    autoHideDuration={1500}
                >
                    <Alert
                        elevation={2}
                        severity={this.state.alertColor}
                    >
                        {this.state.alertMsg}
                    </Alert>
                </Snackbar>
            </div>
        )
    }
}
