import { Route, BrowserRouter as Router, Switch, BrowserRouter} from 'react-router-dom';
import './App.css';
import Form from './Form';
import FormLogin from './FormLogin';
import React, { Component } from 'react'
import FormSuccess from './FormSuccess';
import Form_Log from './Form-Log';

export default class App extends Component {
  render() {
    return (
      <div className="Main-App">

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/login" component={Form_Log} />
        </Switch>


      </BrowserRouter>
      </div>

    )
  }
}
