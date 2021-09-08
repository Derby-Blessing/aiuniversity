//import React, { useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav,NavDropdown,Row,FormControl,Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import logo from './logo_ai_university.png';


    class Menu extends React.Component {
      render() {
        return (
          <>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Container>
        <Navbar.Brand href="/"><Image src={logo} alt="logo" fluid /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/consigliami">Chiedi un consiglio</Nav.Link>
            <Nav.Link href="/recensisci">Lascia una recensione</Nav.Link>
            <NavDropdown title="Altro" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/trova-corso-di-laurea">Cerca corso di laurea</NavDropdown.Item>
              <NavDropdown.Item href="/trova-ateneo">Cerca Ateneo</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
}



export default Menu
