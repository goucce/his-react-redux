import React from "react"; 
//Importaciones de los servicios del api
import api from "./services/api";
import "./login.css";
//importacion de las redirecciones y de redux para las rutas
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";


//Inicializar siempre con una clase y sy nombre que extiende a ser un React.Component
class login extends React.Component {

  //Se inicialice todos los datos del padre a el hijo, el componente login
  constructor(props) {

    super(props); //Super sirve para heredar la funcionalidad del padre,de los props, del compoentne que elijas 
    //Si no le indicamos nada, hereda las propiedaddes de react. Al indicarle props heredará los componentes del padre
    
    this.state = {   
      
      //es crear el estado de este componente
      //detalla los datos o el estado de los datos del componente
      //tiene que ser lo mas claro porsible ya que es lo que se alamacenará en memoria para poder mostrarlo por pantalla.  
      username: "", //inicializar el usuario
      password: "", //inicializar el pasword
      error: null
    };
  }


  login(ev) {   //Tras hacer el submit tanto los valores como contraseña como usuario los recibe esta función.
    ev.preventDefault(); //Evento que evita refrescar la pagina

    const { username, password } = this.state; // guardamos lo que hemos escribido al logearnos en la constantes username y password

    let user = api.login(username, password); //creamos una variable user que va a contener todo el objeto que coincida con el username y el password dados.
    //Entrará en el api.js y dentro de la constante api, tenemos la funcion login, la cual la ejecutará, con los valores dados.

    //ahora al tener al suso dicho usuario con todas sus propiedades, vamos a corroborar que se a logeado.
    if (user) {
      // valid user
      this.props.loginStore(user);
      // this.props.history.push("/");
    } else {
      // no valid user
      this.setState({ error: "invalid username or password" });
    }
  }

  handleChange(ev) { //receibo el evento 
    this.setState({ //cambiamos el estado del component
      //diciento que el evento .nombre será igual al valor del evento
      [ev.target.name]: ev.target.value,
      error: null
    });
  }

  render() {

    if (this.props.auth) { //si recibe todos los datos y comprueba que el usuario está logeado."/"
      return <Redirect to="/" />;
    }


    return (
      //Devolverá HTML + JS
      <section className="login">

        {this.state.error ? 
        (
          <div className="error">
           {this.state.error}   {/* ¿ El estado error no es null, como se ve en el this.state ?  */}
           </div>
        ) 
        : null}  {/* Si el error no es igual a null, mostrará el error */}
        

        {/* INICIALIZACION DEL FORMULARIO DE LOGIN  */}

        <form onSubmit={this.login.bind(this)} > {/*Todos los datos enviados al hacer Submit en el login se enviarán a la funcion "login"    */}
                                                  {/* El bind lo que hace es declararlo en la funcion del constructor necesario., en este caso en el compoennte login */}
          
          {/*Primer input donde el tener que intriducir el usuario tendrá que ser de tipo texto */}
          <input 
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username} //el valor intriducido se guarda en el username
            onChange={this.handleChange.bind(this)}  //la funcion "cambio" ejecuta la funcion handleChange que hay que bindear para que el contructor sepa que es una funcion 
          />
          <input //igual con password
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange.bind(this)}
          />
          <button type="submit">Entrar</button> {/*Submit en el boton entrar, cuadno se ejecute el clickeo directamente desde el inicio del formulario se ejecutará el login */}
        </form>
      </section>
    );
  }
}

const Login = connect( //Creacion de una constatne que se conecte con el guard del estado y comprobar que esta loggeado
  state => ({
      auth: state.auth
  }),
  dispatch => ({ //enviamos el usuario que recibimos y compprobaos que este en la base de datos ficticia.
    loginStore: user =>

      dispatch({ //envio
        type: "USER_LOGGED_IN", //se encuetnra en el reducer.
        payload: user //carga util el usuario
      })
  })
)(login);
export default Login;
