import React, { Component } from 'react'


export default class Temporizador extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Temporizador',
            horas : 0,
            minutos: 0,
            segundos: 0,
            parar: true,
            nameStop: "Start"
        }        
    }

    decrementarMinuto(state) {
      this.setState(() => { 
        return {
          minutos: state.minutos - 1 
        }
      })
    }

    decrementarHora(state) {
      this.setState(() => { 
        return {
          horas: state.horas - 1 
        }
      })
    }

    valorNagativo() {
        alert('NÃO PODE ESCOLHER VALORES NEGATIVOS!')
        this.setState({
            parar: true
        })
    }

    alertaTempo() {
        alert('CONTADOR ESGOTADO')
        this.setState({
            parar: true
        })
    }

    iniciar() {
        if (this.state.parar === false){
            this.setState(function (state, props) {

                if(this.state.horas < 0 || this.state.minutos < 0 || this.state.segundos < 0) {
                    return (
                        this.valorNagativo()
                    )
                }

                if(this.state.horas == 0 && this.state.minutos == 0 && this.state.segundos == 0) {
                    return (
                        this.alertaTempo()
                    )
                }

                if(state.segundos == 0) {
                    this.setState({ 
                        segundos: 59,
                    })
                    this.decrementarMinuto(state);

                    if(state.minutos == 0) {
                        this.setState({ 
                            minutos: 59,
                        })
                        this.decrementarHora(state)
                    } 
                }                     
                
                return({ 
                    segundos: state.segundos - 1
                })
                
            })
        }
    }

    
    alterarH = (event) => {
        this.setState({
            horas: event.target.value
        })
    }
    
    alterarM = (event) => {
        this.setState({
            minutos: event.target.value
        })
    }
    
    alterarS = (event) => {
        this.setState({
            segundos: event.target.value
        })
    }

    componentDidMount() {
      this.timer = setInterval(() => this.iniciar(), 1000)
    }

    resetCronometro = (param) => {
        this.state.houras = 0
        this.state.minutos = 0
        this.state.segundos = 0
        this.setState({
            nameStop: "Iniciar"
        })
        
    }

    handleSubmit = (param) => {
        this.setState({
            parar: !this.state.parar
        })

        if (this.state.parar) {
            this.setState({ 
                nameStop: "Parar"
            })
        }
        else {
            this.setState({ 
                nameStop: "Iniciar"
            })
        } 
        
        param.preventDefault()
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <form  onSubmit={this.handleSubmit}>
                <p><i>Escolha o tempo para contagem regressiva:</i></p>
                <input type="number" name="horas" placeholder="Hours" max="24" min="1" onChange={this.alterarH} />
                <input type="number" name="minutos" placeholder="Minutes" max="60" min="1" onChange={this.alterarM} />
                <input type="number" name="segundos" placeholder="Seconds" max="60" min="1" onChange={this.alterarS}/>
                <button type="submit">{this.state.nameStop}</button>
                <button type="submit"onClick={() => this.resetCronometro()}>Reset</button>
                </form>
                <h2>{this.state.horas} horas - {this.state.minutos} minutos - {this.state.segundos} segundos</h2>
            </div>
        )   
    }
}

