import React from 'react'
import Header from '../Header'
import ListaCliente from '../ListaCliente'

const Proyeccion = ( ) => {

  return (
    <div>
      <Header></Header>
      <div className="main">
        <ListaCliente showDeathDate={true}></ListaCliente>
      </div>
    </div>
  )
}
export default Proyeccion