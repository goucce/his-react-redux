import React from "react";
import api from "../services/api";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class histories extends React.Component {

    constructor(props) { //Contructor para obtener los pacientes que se guardan en el api
        super(props);
        props.loadHistories();
    }   

    render(){
        
        return( //devuleve el html de la funcion que haga
        <div>
            
            <h1>Histories</h1> 
            {this.props.histories.map(item => <Link key={item.uid} to="/historyDetail/:uid">
            <div key={item.uid}> Historial Clinico de:  {item.name}</div></Link>)}

          </div>

        );
    }


}

const Histories = connect(
    state => ({
        auth: state.auth,
        histories: state.histories //Relacionado con el mapeo que se va a hacer
    }),
    dispatch => ({        
        loadHistories: () => {
            let histories = api.getHistories(); //Funcion que obtiene los pacientes del api
            dispatch({ //el tipo de paciente que obtenemos es de tipo LOAD patients
                type:'LOAD_HISTORIES',
                 histories: histories
            })
        }
    })
)(histories);
export default Histories; 