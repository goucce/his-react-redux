import React from "react";
import api from '../services/api';

class createUser extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
          role: 'admin',
          name: '',
          surname: '',
          dni: '',
          username: '',
          password: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    handleInputChange(ev) {
        console.log(ev.target.value)
        this.setState({
            [ev.target.name]: ev.target.value});
    }

    handleSubmit(ev) {
        ev.preventDefault();
        api.createUser(this.state);
        this.cancelCourse();
    }

    cancelCourse = () => { 
        document.getElementById("newuser").reset();
      }

    goBack = () => {this.props.history.goBack();}

    render() {
        return (
            <div >
                <form id="newuser" onSubmit={this.handleSubmit.bind(this)}>

                    <label>Rol: </label>  

                    <div>
                     <select
                     name="role"                
                     value={this.state.role} 
                    onChange={this.handleInputChange}
                    >
                        
                       <option value='admin'>admin</option>
                        <option>patient</option>
                        <option>technical</option>
                        <option>doctor</option>

                    </select>
                    </div>
                    <br/>

                    <label>ID: </label>
                    <input 
                    type="text" 
                    name="uid" 
                    placeholder="introduzca id" 
                    value={this.state.newid} 
                    onChange={this.handleInputChange}>
                    </input><br/>

                    <label>Nombre: </label>
                    <input 
                    type="text"
                     name="name"
                    placeholder="introduzca nombre" 
                    value={this.state.newname} 
                    onChange={this.handleInputChange}>
                    </input><br/>

                    <label>Nombre de usuario: </label>
                    <input type="text" 
                    name="username" 
                    placeholder="introduzca nombre de usuario" 
                    value={this.state.newusername} 
                    onChange={this.handleInputChange}>
                    </input><br/>

                    <label>Contraseña: </label>
                    <input 
                    type="text" 
                    name="password" 
                    placeholder="introduzca contraseña" 
                    value={this.state.newpass} 
                    onChange={this.handleInputChange}>
                    </input><br/>

                    <button type="submit">Submit</button>
                </form>   

                <button id="goback" onClick={this.goBack}>Back</button>
            </div>
        )
    }
}

export default createUser;