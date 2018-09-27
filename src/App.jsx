import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./dashboard";

import PatientsList from "./dashboards/patientsList";
import Histories from "./dashboards/histories.js";
import CreateUser from "./dashboards/createUser";
import PatientDetail from "./dashboards/patientDetail";

import Login from "./login.jsx";
import NotFound from "./notFound";

import { Provider } from "react-redux";
import store from './store';
class App extends Component {
  render() {
    return  (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
              <Switch>
                <Route path="/" component={Dashboard} exact />
                <Route path="/login" component={Login} exact />                
                <Route path="/patientsList" component={PatientsList} exact /> {/* done */}                
                <Route path="/histories" component={Histories} exact />
                <Route path="/createUser" component={CreateUser} exact />
                <Route path="/patientDetail/:uid" component={PatientDetail} exact />

                <Redirect path="/entrar" to="/login" />
                <Route component={NotFound} />
              </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
