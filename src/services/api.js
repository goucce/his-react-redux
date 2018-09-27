const users = localStorage.getItem( 'users' ) || 
[ {
        role: 'admin',
        uid:1,
        name: 'Sergio',
        surname: 'Zaragoza',
        dni: '33765483F',
        username: 'admin',
        password: 'admin',
    },

    {
        role: 'patient',
        uid: 2,
        name: 'Maria',
        surname: 'Lan',
        dni: '29965483F',
        username: 'patient',
        password: 'patient',
    },
    {
        role: 'doctor',
        uid: 3,
        name: 'Laura',
        surname: 'Laern',
        dni: '29315483F',
        username: 'doctor',
        password: 'doctor',
    },
    {
        role: 'technical',
        uid: 4,
        name: 'Paula',
        surname: 'Garcia',
        dni: '29965433V',
        username: 'tecnico',
        password: 'tecnico',
    },
    {
        role: 'patient',
        uid: 2,
        name: 'Juan Diego',
        surname: 'Lan',
        dni: '29965483F',
        username: 'patient',
        password: 'patient',
    },
 ];



const api = {
    login(username, password) {
        return users.find(user => user.username === username && user.password === password)
    },
    createUser(user){
       users.push(user);
       localStorage.setItem('usersHISRedux', JSON.stringify(users));
    },
    getPatients(){
        return users.filter(user => user.role === "patient" );
    },
    getPatient(uid){
        return users.find(user => user.uid === uid )
    },
    // getHistories(){
    //     return histories;
    // },
    // getHistory(patientId){
    //     return histories.filter(history => history.uid === patientId );
    // }
}


export default api;