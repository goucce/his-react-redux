import React from "react";
import api from "../services/api";
import { connect } from "react-redux";

class historyDetail extends React.Component{
    constructor(props){
        super(props);
        props.loadHistory(this.props.match.params.uid.toString());
        //doctor = api.getDoctor(this.props.historyN.doctorid);
        //hacer un this,state 
        //pongo en el stado una propiedad que sea historia
    }
    
    goBack = () => {this.props.history.goBack();}


    render() {
        const doctor = api.getDoctor(this.props.historyN.doctorid); //cambiarle el nombre al history para que no sea el mismo y no se contradigan
        
        console.log(doctor);

        const patient = api.getPatient(this.props.historyN.uid);

        const toSeeHis = api.toSeeHistory(this.props.auth.role);

        return (this.props.historyN.history ? (
            (this.props.match.params.uid.toString() === this.props.auth.uid || toSeeHis) ? (
                // acceder al url directamente y ya le metes el uid
            <div>
                Historial del paciente {patient.name}
                <div>Dr.{doctor.name}<br/>
                    <p>Historial: </p>

                    {this.props.historyN.history.map(item => <div key={item}>{item}</div>)}<br/>

                </div>
                <button onClick={this.goBack}>Back</button>
            </div>
        ) : (<div>No eres admin ni doctor <button onClick={this.goBack}>Back</button></div>)) : (<div>No se encuentra el historial<button onClick={this.goBack}>Back</button></div>));
    }
}

const HistoryDetail = connect(
    state => ({
        auth: state.auth,
        historyN: state.historyN
    }),
    dispatch => ({
        loadHistory: (uid) => {
            let historyN = api.getHistory(uid);
            dispatch({
                type:'LOAD_HISTORY',
                 payload: historyN})
        }
    })
)(historyDetail);

export default HistoryDetail