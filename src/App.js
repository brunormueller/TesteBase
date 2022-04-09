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


export default App;
