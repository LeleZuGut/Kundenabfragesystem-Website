import  React  from  "react";
import { Route, BrowserRouter as Router, Switch, BrowserRouter,Redirect} from 'react-router-dom';
import { Component } from 'react';


const PrivateRoute = ({component: Component, isAuthenticated, ...rest})=>(

    <Route {...rest} render={props =>(
        isAuthenticated
        ?
        (<Component {...props}/>)
        :
        (<Redirect to = {{pathname:'/login', state: {from: props.location}}}/>)
    )}/>


);

export default PrivateRoute;