const initialState = {
    auth: null,
    histories: [],
    patients: [],
    patient: {},
    historyN: {},
    doctor: {}
} //inicializamos toods los estados que se van a tratar en el reducer



function reducer( state = initialState, action ) { //indicamos como se van a realizar las acciones

    switch ( action.type ) {

    case 'USER_LOGGED_IN': // NO LO ENTIENDO BIEN ESTOS ESTADOS.
        {
            let _state = { 
                ...state,
                auth: action.payload
            };

            return _state
        }
    case 'USER_LOGGED_OUT':
        {
            let _state = {
                ...state,
                auth: null
            };

            return _state
        }
        //Realiza deferentes acciones para la llamada y la utilizacion de pacientes.
        case 'LOAD_PATIENTS':
        {
            let _state = {
                ...state,
                patients: action.patients //accion que devuleve unicamente aquellos que sean pacientes
            };
            return _state
        }
    case 'LOAD_HISTORIES': //Cargar las historias:
    {
        let _state = {
            ...state,
            histories: action.histories
        };
        return _state

    }
    case 'LOAD_HISTORY': //Cargar las historias:
    {
        let _state = {
            ...state,
            historyN: action.payload //action.payload
        };
        return _state

    }
    case 'LOAD_PATIENT':
    {
        let _state = {
            ...state,
            patient: action.payload
        };
        return _state
    }

    
    default:
        return state;
    }

}

export default reducer;