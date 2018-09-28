import React from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import "./dashboard.css";

class dashboard extends React.Component {
  
  logout = () => {
    this.props.logoutStore();
  };

  render() {
    if (!this.props.auth) {
      return <Redirect to="/login" />;
    } else {
      const { role, name, uid } = this.props.auth;

      const links = [
        {
          to: "/patientsList",
          text: "Patients list",
          roles: ["admin", "doctor"]
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
          to: "/patientDetail/"+ uid ,
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
        <section className="dashboard">
          <h1> Dashboard</h1>

          <h3>
            Tu role es: {role}{" "}
            {this.props.auth && <button onClick={this.logout}>Logout</button>}
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
    logoutStore: () =>
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
