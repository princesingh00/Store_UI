import React, { } from 'react';
import { Route, Redirect } from "react-router-dom";


function GuardedRoute({ component: Component }) {

    const loggedIn = sessionStorage.getItem("token");

    return (<Route render={(props) => (
        loggedIn ? <Component /> : <Redirect to='/signin' />
    )} />)
}

export default GuardedRoute;