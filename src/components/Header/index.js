import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'

import Logo from '../../img/home_logo.jpg'

const Header = ( ) => {

  const getSelectedLinkClass = (link) => {
    const url = window.location.href;
    const urlSplit = url.split("/");
    const curLink = urlSplit[urlSplit.length-1];
    return link === curLink ? 'navbar-bg-a-selected' : 'navbar-bg-a';
  }

  return (
    <Navbar expand="lg" className="navbar-bg">
      <Navbar.Brand href="/" key="home" className={getSelectedLinkClass('')}><img alt="" src={Logo} width="30" height="30" className="d-inline-block align-top"/>{' '}Intercorp Retail</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" key="registro" className={getSelectedLinkClass('')}>Registro</Nav.Link>
          <Nav.Link href="/proyeccion" key="proyeccion" className={getSelectedLinkClass('')}>Proyección y Análisis</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header