import React from 'react'


class Relogio extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nameRelogio:"Horário de Brasília",
            relogio:"",
            antarctica:"",
            anguilla:"",
            algeria:"",
            canada:"",
            georgia:""
        }
    }

relogio()
{
    
    const moment = require('moment-timezone')
    let localTime = moment( ).tz("Brazil/Brasilia").format('HH:mm:ss').toString()
    let antarctica = moment( ).tz("Antarctica/McMurdo").format('HH:mm:ss').toString()
    let anguilla = moment( ).tz("America/Anguilla").format('HH:mm:ss').toString() 
    let algeria = moment( ).tz("Africa/Algiers").format('HH:mm:ss').toString()
    let canada = moment( ).tz("America/Toronto").format('HH:mm:ss').toString() 
    let georgia =  moment( ).tz("Asia/Tbilisi").format('HH:mm:ss').toString()
    this.setState({
        relogio: localTime,
        antarctica: antarctica,
        anguilla: anguilla,
        algeria: algeria,
        canada: canada,
        georgia: georgia
    })
}

componentDidMount() {
    this.timer = setInterval( () => this.relogio(), 1000)
}

    render() {
        return(
            <div>
                <hr /> <hr /> <hr />
                <h1>{this.state.nameRelogio} - ({this.state.relogio})</h1>
                <hr /> <hr /> <hr /> <hr />
                <h2>Horário de Antarctica - ({this.state.antarctica})</h2>
                <hr /> <hr /> <hr />
                <h2>Horário de Anguilla - ({this.state.anguilla})</h2>
                <hr /> <hr /> <hr />
                <h2>Horário de Algeria - ({this.state.algeria})</h2>
                <hr /> <hr /> <hr />
                <h2>Horário de Canada - ({this.state.canada})</h2>
                <hr /> <hr /> <hr />
                <h2>Horário de Georgia - ({this.state.georgia})</h2>
                <hr /> <hr /> <hr />
            </div>       
        )
    }
}
export default Relogio;