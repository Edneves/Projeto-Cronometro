import React from 'react';
import LabelRelogio from './components/LabelRelogio'
import Contador from './components/Contador'
import BtnBotao from './components/BtnBotao'
import Temporizador from './components/Temporizador'
import Relogio from './components/Relogio'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      milissegundos: 0,
      segundos: 0,
      minutos: 0,
      stop: false,
      nameStop: "Pausar",
      name: "Cronômetro", 
      parcial: ""
    };
  }
   zerarCronometro() {
      this.state.segundos = -1
      this.state.minutos = 0
      this.state.parcial = ""
   }
  
  parcial(){
    let p = this.state.minutos+ ":"+ this.state.segundos + "\n\n"
    this.state.parcial = this.state.parcial + p
  }
  
  pararTempo(){
    this.setState({ 
        stop: !this.state.stop 
      })
    if (this.state.stop)
      this.state.nameStop = "Pausar"
    else
      this.state.nameStop = "Iniciar"
  }

  incrementar () {
    if (this.state.stop === false){
      this.setState(
         function (state, props) {
          if (state.segundos >= 5){
            this.zerar();
            this.incrementarMinuto(state);
          }  
          return({ segundos: state.segundos +1})
         })
    }
  }
  
  incrementarMinuto (state) {
    this.setState(() => { 
      return {minutos: state.minutos +1}
    })
  };
  
  zerar () {
    this.setState({ 
      segundos: 0
    })
  }

  componentDidMount(){
    this.timer = setInterval(
      () => this.incrementar(), 1000)
  }
  

  render(){

    return (
      <div>
        <LabelRelogio name={this.state.name} />
        <Contador minutos={this.state.minutos} segundos={this.state.segundos} />
        <BtnBotao onClick={() => this.zerarCronometro()} label={"Zerar"} />
        <BtnBotao onClick={() => this.pararTempo()} label={this.state.nameStop} />
        <BtnBotao onClick={() => this.parcial()} label={"Parcial"} />
        <hr />
        <LabelRelogio name={this.state.parcial} />
        <hr />
        <Temporizador />
        <hr />
        <Relogio />
      </div>
    );
  }
}

export default App;