import React from "react";
import api from "../services/api";
import { connect } from "react-redux";

class patientDetail extends React.Component {
    constructor(props) {
        super(props);
        props.loadPatient(this.props.match.params.uid.toString());
        }
    
    render() {
        return (
            <div>
                {console.log("id:"+this.props.match.params.uid)}
                <h1>Datos del paciente</h1>
                <div>
                   Nombre: {this.props.patient.name}<br/>
                   ID: {this.props.patient.uid}
                </div>
            </div>
        );
    }
}

const PatientDetail = connect(
    state => ({
        auth: state.auth,
        patient: state.patient
    }),
    dispatch => ({
        loadPatient: (uid) => {
            let patient = api.getPatient(uid);
            dispatch({
                type:'LOAD_PATIENT',
                payload: patient
            })
        }
    })
)(patientDetail);

export default PatientDetail