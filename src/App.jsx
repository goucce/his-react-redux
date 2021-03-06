import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./dashboard";

//Importar los componentes desde para redireccionarlos con las rutas.
import PatientsList from "./dashboards/patientsList";
import Histories from "./dashboards/histories.js";
import HistoryDetail from "./dashboards/historyDetail";

import CreateUser from "./dashboards/createUser";
import PatientDetail from "./dashboards/patientDetail";

import Login from "./login.jsx";
import NotFound from "./notFound";

import { Provider } from "react-redux";
import store from './store';

//Tenemos el componente principal donde mediante redux vamos a a redirigir a las diferentes rutas de los otros componentes
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
                <Route path="/patientDetail/:uid" component={PatientDetail} exact /> {/* done */} 
                <Route path="/historyDetail/:uid" component={HistoryDetail} exact />

                <Redirect path="/entrar" to="/login" /> {/* Redirgir cuando se entre en la aplicacion directamente al login. */}
                <Route component={NotFound} />
              </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
