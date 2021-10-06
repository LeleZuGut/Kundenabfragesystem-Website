import React from "react";
import { Route, BrowserRouter as Router, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { Component } from 'react';
import Navbar from "../Pages/FormFragenKatalog-Main";


const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (

    <Route {...rest} render={props => (
        isAuthenticated
            ?
            (<div>
                <Route exact component={Navbar}></Route>
                <Component {...props} />

            </div>)
            :
            (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
    )} />


);

export default PrivateRoute;