import React from 'react'
import Header from '../Header'
import ListaCliente from '../ListaCliente'
import CrearCliente from '../CrearCliente'

const Home = ( ) => {

  return (
    <div>
      <Header></Header>
      <div>
        <CrearCliente></CrearCliente>
        <ListaCliente></ListaCliente>
      </div>
    </div>
  )
}
export default Home