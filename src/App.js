import { Route, BrowserRouter as Router, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Form from './Form';
import React, { Component, useState, useContext } from 'react';
import Form_Log from './Form-Log';
import Navbar from './Pages/FormFragenKatalog-Main';
import FormFragenkatalog from './Pages/FormFragenkatalog';
import LoginContext from './Contexts/LoginContext';
import AuthenticatedContext from './Contexts/AuthenticatedContext';
import PrivateRoute from './Route/PrivateRoute';
import {CookiesProvider} from 'react-cookie';

const App = () => {

  const [realuser, setrealuser] = useState();
  const [isAuthenticated, setisAuthenticated] = useState();



  return (
    <div className="Main-App">

      <BrowserRouter>
        <Switch>
        <AuthenticatedContext.Provider value={{ isAuthenticated, setisAuthenticated }}>
          <LoginContext.Provider value={{ realuser, setrealuser }}>
            <Route exact path="/" component={Form} />
            <Route exact path="/login" component={Form_Log} />

            <PrivateRoute
            exact path="/main"
            component={Navbar}
            isAuthenticated = {isAuthenticated}
            />
            <Route exact path="/fragen/Wandern" component={FormFragenkatalog} />
            <Route exact path="/fragen/Ski" component={FormFragenkatalog} />
            <Route exact path="/fragen/Klettern" component={FormFragenkatalog} />


          </LoginContext.Provider>
        </AuthenticatedContext.Provider>







      </Switch>


    </BrowserRouter>
      </div >

    );
  };

export default App;

