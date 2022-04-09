import React, { Component } from 'react'
import './CadastroUsuario.css'

export default class CadastroUsusario extends Component {
  render() {
    return (
      <div>
        <div className="cadastroUsusario">
            <p>Cadastro de usuario</p>
        </div>
        <div className="BlocoLogin1">  
          <div className="BlocoLogin">

            <div><label className="lbCodUser">Codigo Usuario<input className="cpCodUser" type="number" id="codUser" /></label></div>

            <div><label className="lbLoginUser">Nome<input className="cpLoginUser" type="text" id="loginUser" /></label></div>

            <div><label className="lbSenha">Senha<input className="cpSenha" type="text" id="senha" /></label></div>

            <div><label className="lbReptSenha">Repetir Senha<input className="cpReptSenha" type="text" id="reptSenha" /></label></div>

            <div className='teste1'><a href="" className="btn btn1">SALVAR</a></div>
            <div className='teste1'><a href="" className="btn btn2">EXCLUIR</a></div>
            
          </div>
        </div>
      </div>
    )
  }
}