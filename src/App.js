import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';		
import '@fontsource/roboto/400.css';	
import '@fontsource/roboto/500.css';	
import '@fontsource/roboto/700.css';

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
