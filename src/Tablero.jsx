import React, { Component } from 'react'
import Equipo from './components/Equipo';
import Arg from "./img/arg.svg";
import Usa from "./img/usa.svg";

class Tablero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      local: 0,
      visitante: 0
    }
  }

  /* Cree sus funciones aquí abajo */
  /***LOCAL***/
  aumentaLocal1 = () => {

    this.setState({
      local: this.state.local + 1
    })
  }

  aumentaLocal2 = () => {

    this.setState({
      local: this.state.local + 2
    })
  }

  aumentaLocal3 = () => {

    this.setState({
      local: this.state.local + 3
    })
  }

  restaLocal1 = () =>{

    this.setState({
      local: this.state.local -1
    })
  }

  restaLocal2 = () =>{

    this.setState({
      local: this.state.local -2
    })
  }

  restaLocal3 = () =>{

    this.setState({
      local: this.state.local -3
    })
  }

  /****VISITANTE********/
  aumentaVisitante1 = () => {

    this.setState({
      visitante: this.state.visitante + 1
    })
  }

  aumentaVisitante2 = () => {

    this.setState({
      visitante: this.state.visitante + 2
    })
  }

  aumentaVisitante3 = () => {

    this.setState({
      visitante: this.state.visitante + 3
    })
  }

  restaVisitante1 = () => {

    this.setState({
      visitante: this.state.visitante - 1
    })
  }

  restaVisitante2 = () => {

    this.setState({
      visitante: this.state.visitante - 2
    })
  }

  restaVisitante3 = () => {

    this.setState({
      visitante: this.state.visitante - 3
    })
  }
  
  reiniciarTablero = () =>{
    this.setState({
      local: 0,
      visitante: 0
    })
  }

  render() {
    return (
      <>
        <h4>{this.props.children}</h4>
        <div className='tablero_grupo'>
          <div className='contenedor_local'>
            {/* Inyección de componente */}
            <Equipo title="Local: " contador={this.state.local} bandera={Arg} />

            <button className='btn_inc' onClick={this.aumentaLocal1}>+ 1</button>
            <button className='btn_inc'onClick={this.aumentaLocal2}>+ 2</button>
            <button className='btn_inc' onClick={this.aumentaLocal3}>+ 3</button>
            <button className='btn_dec'onClick={this.restaLocal1}>- 1</button>
            <button className='btn_dec'onClick={this.restaLocal2}>- 2</button>
            <button className='btn_dec'onClick={this.restaLocal3}>- 3</button>
          </div>
          <div className='contenedor_visitante'>
            {/* Inyección de componente */}
            <Equipo title="Visitante: " contador={this.state.visitante} bandera={Usa} />

            <button className='btn_inc' onClick={this.aumentaVisitante1}>+ 1</button>
            <button className='btn_inc'onClick={this.aumentaVisitante2}>+ 2</button>
            <button className='btn_inc'onClick={this.aumentaVisitante3}>+ 3</button>
            <button className='btn_dec'onClick={this.restaVisitante1}>- 1</button>
            <button className='btn_dec' onClick={this.restaVisitante2}>- 2</button>
            <button className='btn_dec'onClick={this.restaVisitante3}>- 3</button>

          </div>
        </div>
        <button onClick={this.reiniciarTablero}>Reiniciar tablero</button>
      </>
    )
  }
}

export default Tablero;