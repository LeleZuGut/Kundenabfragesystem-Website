import { Route, BrowserRouter as Router, Switch, BrowserRouter} from 'react-router-dom';
import './App.css';
import Form from './Form';
import React, { Component } from 'react';
import Form_Log from './Form-Log';
import Navbar from './FormFragenKatalog-Main'; 
import Klettern from './FormFragenkatalog';
export default class App extends Component {
  render() {
    return (
      <div className="Main-App">

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/login" component={Form_Log} />
          <Route exact path="/main" component={Navbar} />
          <Route exact path="/fragen/Wandern" component={Klettern} />
          



        </Switch>


      </BrowserRouter>
      </div>

    )
  }
}
