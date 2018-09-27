import React from "react";
import api from "../services/api";
import { connect } from "react-redux";

class historyDetail extends React.Component{
    constructor(props){
        super(props);
        props.loadHistory();
    }
    
    render() {
        return (
            <div>
                {console.log("id:"+this.props.match.params.uid)}
                <h1>Historial del paciente</h1>
                <div>
                    {/* Mapeamos y recorremos todas las historias de usuario */}
                    {this.props.userHistories.map(item => 
                        <div key={item.uid}> {/* Como "llave" tenemos el ide del usuairo y por lo tanto sacamos lo que tenga  */}
                            {item.uid}
                            {item.doctorid}
                            {item.histories}
                            )}                            
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const HistoryDetail = connect(
    state => ({
        auth: state.auth,
        histories: state.histories
    }),
    dispatch => ({
        loadHistory: () => {
            let history = api.getHistory();
            dispatch({
                type:'LOAD_HISTORY',
                 histories: history})
        }
    })
)(historyDetail);

export default HistoryDetail