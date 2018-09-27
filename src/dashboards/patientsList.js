import React from "react";
import api from "../services/api";
import { connect } from "react-redux";



class patientsList extends React.Component {

    constructor(props) { //Contructor para obtener los pacientes que se guardan en el api
        super(props);
        props.loadPatients();
    }   

    render(){
        
        return( //devuleve el html de la funcion que haga
            <div>
            <h1>PatientsLists</h1>

                {this.props.patients.map(item => <div key={item.name}> {item.name}</div>)}
                {/* Recorremos patients y con .map seleccionamos aquellos que tengan como llave el nombre del "paciente"*/}
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
            let patients = api.getPatients(); //Funcion que obtiene los pacientes del api
            dispatch({ //el tipo de paciente que obtenemos es de tipo LOAD patients
                type:'LOAD_PATIENTS',
                 patients: patients
            })
        }
    })
)(patientsList);


export default PatientsList; 
