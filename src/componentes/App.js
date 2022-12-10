import './App.css'
import Teclado from './teclado/Teclado'
import Pantalla from './pantalla/Pantalla'
import Random from  '../logic/matematica'
import { Component } from 'react'
import operaciones from '../logic/operaciones'



class App extends Component {
  state={
    total:null,
    siguiente:null,
    operador:null
  }

  handleClick  = nombreDeBoton => this.setState(operaciones(this.state, nombreDeBoton))

  render (){
    return(
    <div className="contenedor">
      <h1>Calculadora</h1>
      <Pantalla value={this.state.siguiente || this.state.total || "0"} />
      {/* <Pantalla value={this.state.siguiente || this.state.total || "0"} /> */}
      <Teclado clickHandler={this.handleClick}/>
     <Random />
    </div>
  )
}
}

export default App;

