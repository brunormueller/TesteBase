import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CadastroUsusario from "./cadastro-usuario/CadastroUsuario"
class App extends Component{
  render() {
    return (
      <div className="App">
        <CadastroUsusario/>
      </div>
    );
  }
}

/*import LoginUser from "./login-user/LoginUser"
class App extends Component{
  render() {
    return (
      <div className="App">
        <LoginUser/>
      </div>
    );
  }
}*/

export default App;
