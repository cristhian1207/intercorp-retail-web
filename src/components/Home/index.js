import React, { Component } from 'react';
import Header from '../Header'
import ListaCliente from '../ListaCliente'
import CrearCliente from '../CrearCliente'

class Home extends Component {

  render() {
    return (
      <div>
        <Header></Header>
        <div className="main">
          <CrearCliente updateList={() => this.listaCliente.loadCustomerList()} updateKpi={() => this.listaCliente.loadCustomerKpi()}></CrearCliente>
          <ListaCliente ref={instance => { this.listaCliente = instance; }}></ListaCliente>
        </div>
      </div>
    )
  }
}
export default Home