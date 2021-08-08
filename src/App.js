import { Route, BrowserRouter as Router, Switch, BrowserRouter} from 'react-router-dom';
import './App.css';
import Form from './Form';
import React, { Component } from 'react'
import Form_Log from './Form-Log';
import FormFragenKatalog_Main from './FormFragenKatalog-Main'

export default class App extends Component {
  render() {
    return (
      <div className="Main-App">

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/login" component={Form_Log} />
          <Route exact path="/main" component={FormFragenKatalog_Main} />

        </Switch>


      </BrowserRouter>
      </div>

    )
  }
}
