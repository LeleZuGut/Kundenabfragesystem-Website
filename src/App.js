import { Route, BrowserRouter as Router, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';
import Form from './Form';
import React, { Component, useState, useContext, useEffect } from 'react';
import Form_Log from './Form-Log';
import Navbar from './Pages/FormFragenKatalog-Main';
import FormFragenkatalog from './Pages/FormFragenkatalog';
import LoginContext from './Contexts/LoginContext';
import AuthenticatedContext from './Contexts/AuthenticatedContext';
import Cookies from 'js-cookie'
import PrivateRoute from './Route/PrivateRoute';


const App = () => {

  const [realuser, setrealuser] = useState();
  const [isAuthenticated, setisAuthenticated] = useState();

  useEffect(() => {
    Cookies.get("user") ? setisAuthenticated(true) : setisAuthenticated(false);
  }, [isAuthenticated]);







  return (
    <div className="Main-App">

      <BrowserRouter>
        <Switch>
          <AuthenticatedContext.Provider value={{ isAuthenticated, setisAuthenticated }}>
            <LoginContext.Provider value={{ realuser, setrealuser }}>





              {isAuthenticated? 
              <Switch>
                < Route
                exact path="/main"
              component={Navbar}
              />
              <Route exact path="/fragen/Wandern" component={FormFragenkatalog} />
              <Route exact path="/fragen/Ski" component={FormFragenkatalog} />
              <Route exact path="/fragen/Klettern" component={FormFragenkatalog} />
              <Route  render={()=> <Redirect to={{pathname:"/main"}}/>}></Route>

              </Switch>
              :
              <Switch>
              <Route exact path="/" component={Form} />
              <Route exact path="/login" component={Form_Log} />
              <Route  render={()=> <Redirect to={{pathname:"/login"}}/>}></Route>

              </Switch>





              

              }


            </LoginContext.Provider>
          </AuthenticatedContext.Provider>







        </Switch>


      </BrowserRouter>
    </div >

  );
};

export default App;

