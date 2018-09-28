import React from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import "./dashboard.css";

class dashboard extends React.Component {
  
  logout = () => {  // accedemos al props de logoutStore para que deje de estar registrado 
    this.props.logoutStore(); //funcion que envia al reducer que  de deslogeará
  };

  //lo que renderiza es en primere lugar
  render() {
    if (!this.props.auth) { //que si no está logeado no nos dejepasar a dentro del dashboard
      return <Redirect to="/login" />;

      //como si que estamos autentificados, nos henvia a un dashboard distinto segun el rol que tengamos
    } else {
      const { role, name, uid } = this.props.auth; //en propos.auth tenemos toda la informacion de los objetos, por lo tanto queremos las constantes role, name y uid.

      //la constante links envia segun que lugar a un sito y a otro componente
      const links = [
        {
          to: "/patientsList", //a donde nos lleva el link
          text: "Patients list", //el texto del link
          roles: ["admin", "doctor"] //los roles que pueden acceder a el
        },
        {
          to: "/histories",
          text: "Histories list",
          roles: ["admin", "doctor"]
        },
        {
          to: "/createUser",
          text: "Create User",
          roles: ["admin", "technical"]
        },
        {
          to: "/patientDetail/"+ uid , //Cuando se accede aqui se añadirá el uid obtenido desde el this.props.auth.
          text: "Patients detail",
          roles: ["admin", "patient"]
        },
        {
          to: "/historyDetail/" + uid,
          text: "History detail",
          roles: ["admin", "patient"]
        }
      ];

      return (
        // Devolvemos el HTML en efecto práctico.
        <section className="dashboard">
          <h1> Dashboard</h1>

          <h3>
            Tu role es: {role}{" "} 
            {/* Rol que recoge el auth y del usuario logeado */}
            {this.props.auth && <button onClick={this.logout}>Logout</button>} 
            {/* Click en el boten accede a la funcion logout del principio que te manda a la pagina inicial  */}
          </h3>
          <h5>
            {this.props.auth ? name + " is logged in." : "no user is logged in"}
          </h5>

         {
           links.map(
             item => (
              item.roles.includes(role) 
              && 
              <Link key ={ item.text} to={item.to}>{item.text}</Link>
             )
           )
         }
        </section>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutStore: () => //enviamos al caso de logg out de dentro del reducer
      dispatch({
        type: "USER_LOGGED_OUT"
      })
  };
};

const Dashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(dashboard);
export default Dashboard;
