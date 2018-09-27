const users = localStorage.getItem( 'users' ) || 
[ {
        role: 'admin',
        uid: '1',
        name: 'Sergio',
        surname: 'Zaragoza',
        dni: '33765483F',
        username: 'admin',
        password: 'admin',
    },

    {
        role: 'patient',
        uid: '2',
        name: 'Maria',
        surname: 'Lan',
        dni: '29965483F',
        username: 'patient',
        password: 'patient',
    },
    {
        role: 'doctor',
        uid: '3',
        name: 'Laura',
        surname: 'Laern',
        dni: '29315483F',
        username: 'doctor',
        password: 'doctor',
    },
    {
        role: 'technical',
        uid: '4',
        name: 'Paula',
        surname: 'Garcia',
        dni: '29965433V',
        username: 'tecnico',
        password: 'tecnico',
    },
    {
        role: 'patient',
        uid: '5',
        name: 'Juan Diego',
        surname: 'Lan',
        dni: '29965483F',
        username: 'patient',
        password: 'patient',
    },
 ];

 const histories = JSON.parse( localStorage.getItem( 'historiesHis' ) )|| [
    {
        uid: '5',
        name: 'Juan Diego',
        doctorid: '3',
        history: ['Arriba las manos']
    },
    {
        uid: '5',
        name: 'Juan Diego',
        doctorid: '3',
        history: ['Explosion 16', 'Alusion a las explosiones']
    },
    {
        uid: '2',
        name: 'Maria',
        doctorid: '3',
        history: ['Se va a morir.']
    }
];



const api = {
    login(username, password) {
        return users.find(user => user.username === username && user.password === password)
    },
    createUser(user){
       users.push(user);
       localStorage.setItem('users', JSON.stringify(users));
    },
    //Obtener los pacients con el filter 
    getPatients(){
        return users.filter(user => user.role === "patient" );
    },
    //Obtener todas las historias, simplemente seleccionandolas
    getHistories(){
        return histories;
    },
    //Obtener segun el id a los pacientes y a las Historias
    getPatient(uid){
        return users.find(user => user.uid === uid )
    },    
    getHistory(patientId){
        return histories.filter(history => history.uid === patientId ); 
        //Queremos las historias especificas que tengan el Id del paciente, el valor que le damos
    }
}


export default api;