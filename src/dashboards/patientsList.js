import React from "react";
import api from "../services/api";
import { connect } from "react-redux";



class patientsList extends React.Component {

    constructor(props) { //Contructor para obtener los pacientes del padre
        super(props);
        props.loadPatients();
    }   

    render(){
        
        return( //devuleve el html de la funcion que haga
            <div>
            <h1>PatientsLists</h1>
                {this.props.patients.map(item => <div key={item.name}>{item.name}</div>)}
        </div>

        );
    }


}

const PatientsList = connect(
    state => ({
        auth: state.auth,
        patients: state.patients
    }),
    dispatch => ({
        loadPatients: () => {
            let patients = api.getPatients();
            dispatch({
                type:'LOAD_PATIENTS',
                 patients: patients
            })
        }
    })
)(patientsList);


export default PatientsList; 
