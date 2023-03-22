import { Component } from "react";


class Equipo extends Component {
  render() {
    return (
      <div className='tablero_cabecera'>
        <h3> {this.props.title} </h3>
        <h3>{this.props.contador}</h3>

        {/* agregar el src con la bandera que recibimos por props, recuerde usar la expresión de llaves en vez de comillas */}
        <img className='img_sel' src={this.props.bandera} alt="" />
      </div>
    )
  }
}

export default Equipo;