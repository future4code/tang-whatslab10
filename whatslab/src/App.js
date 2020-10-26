import React from 'react';
import './App.css';

class App extends React.Component{
  state = {
    chat: [],
    valorInputUsuario: "",
    valorInputTexto: ""
  }

  addconversa = () => {
    const novaConversa = {
      usuario: this.state.valorInputUsuario,
      texto: this.state.valorInputTexto
    }
    
    const novaconversas = [...this.state.chat, novaConversa]
    this.setState({chat: novaconversas})
    this.state.valorInputUsuario = ""
    this.state.valorInputTexto = "" 
  }

  onChangeInputUsuario = (event) => {
    this.setState({valorInputUsuario: event.target.value})
  }

  onChangeInputTexto = (event) => {
    this.setState({valorInputTexto: event.target.value})
  }

  render(){

    const conversasdoChat = this.state.chat.map((conversa) => {
    return( <p>{conversa.usuario}: {conversa.texto}</p>)
    })

    return(
      <div className="main">
        <h1>WhatsLab</h1>
        <div className="chat">
          {conversasdoChat}
        </div>

        <div className="bottom">
          <input 
          value={this.state.valorInputUsuario} 
          onChange={this.onChangeInputUsuario}
          placeholder={"Usuário"}
          />
          <input
          value={this.state.valorInputTexto}
          onChange={this.onChangeInputTexto}
          placeholder={"Digite uma mensagem"}
          />
          <button onClick={this.addconversa}>enviar</button>
        </div>
      </div>
    )
  }
}

export default App;
