import React, { Component } from 'react'
import {
    Button,
    Grid,
    TextField
} from '@material-ui/core'
import '../assets/scss/Signup.scss'
import Alert from '@material-ui/lab/Alert';

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
            alert: false
        };
    }

    handleSignUp = () => {
        console.log(this.state);
    };

    render() {
        return (
            <div className="signup">
                {alert ? <Alert severity={this.state.alertColor} variant="filled" >{this.state.alertMsg}</Alert> : null}
                <form>
                    <h2>Sign up</h2>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="name"
                                name="name"
                                label="Your name"
                                fullWidth
                                autoComplete="name"
                                onChange={(e) => this.setState({
                                    name: e.target.value
                                })}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                id="username"
                                label="Username"
                                fullWidth
                                onChange={(e) => this.setState({
                                    username: e.target.value
                                })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                name="password"
                                label="password"
                                type="password"
                                onChange={(e) => this.setState({
                                    password: e.target.value
                                })}
                                fullWidth
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
                                Signup
                        </Button>
                        </Grid>

                        <Grid item xs={12} sm={2}>
                            <Button
                                variant="text"
                                color="primary"
                                fullWidth
                            >
                                Signin
                        </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        )
    }
}
