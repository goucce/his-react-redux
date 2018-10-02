import React from "react";
import api from "../services/api";
import { connect } from "react-redux";

class historyDetail extends React.Component{
    constructor(props){

        super(props);
        
        console.log({props})
        this.state={
         
       // patient: api.getPatient(this.props.historyN.uid),       

      // historyN: api.toSeeHistory(this.props.auth.role) ? api.getHistory(this.props.match.params.uid) : false,
            
        //no coge bien el historyN, dice que es indefinido.
           
       //doctor: api.getDoctor(this.props.historyN.doctorid),

        
        }
        console.log( "historyN" + this.historyN)
        console.log( "to See   " + JSON.stringify(api.getHistory(this.props.match.params.uid)))
    }
    
    goBack = () => {this.props.history.goBack();}

    


    render() {
        const{doctorBueno, patient2, toSeeHis }=this.state; //no en todos los renderizados se realice la busqueda en el api, que unicame cambie una vez y esta se envie al estado.
        
        let  historyN = api.toSeeHistory(this.props.auth.role) ? api.getHistory(this.props.match.params.uid) : false;
            console.log("historyN es ? "+ historyN[0]);
        let doctor =  api.getDoctor(historyN[0].doctorid);
        console.log("doctor es ? "+JSON.stringify(doctor));
        let patient = api.getPatient(historyN[0].uid);
      

        return ( historyN ?  (
            
                // acceder al url directamente y ya le metes el uid
            <div>
                Historial del paciente {patient.name}
                <div>Dr.{doctor.name}<br/>
                    <p>Historial: </p>

                    {historyN[0].history.map(item => <div key={item}>{item}</div>)}<br/>

                </div>
                <button onClick={this.goBack}>Back</button>
            </div>
        )  : (this.props.match.uid.toString() === this.props.auth.uid) ? 

        (<div>No eres admin ni doctor <button onClick={this.goBack}>Back</button></div>) 
        : (<div>No se encuentra el historial<button onClick={this.goBack}>Back</button></div>));
    }
}

const HistoryDetail = connect(
    state => ({ //recuperar datos desde redux
        auth: state.auth,
  //      historyN: state.historyN
    }),
    //dispatch => ({ //cambiar los datos de redux

    //})
)(historyDetail);

export default HistoryDetail