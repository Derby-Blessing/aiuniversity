//import React, { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Row,
  FormControl,
  Container,
} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import logo from "./logo_ai_university.png";

class Menu extends React.Component {
  render() {
    const color = { color: "#1A237E" };
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
          <Container>
            <Navbar.Brand href="/">
              <Image src={logo} alt="logo" fluid />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link style={color} href="/">
                  Home
                </Nav.Link>
                <Nav.Link style={color} href="/about">
                  About
                </Nav.Link>
                <Nav.Link style={color} href="/consigliami">
                  Chiedi Un Consiglio
                </Nav.Link>
                <Nav.Link style={color} href="/recensisci">
                  Lascia Una Recensione
                </Nav.Link>
                <Nav.Link style={color} href="/trova-corso-di-laurea">
                  Cerca Corso Di Laurea
                </Nav.Link>
                <NavDropdown title="Altro" id="collasible-nav-dropdown">
                  <NavDropdown.Item style={color} href="/trova-ateneo">
                    Cerca Ateneo
                  </NavDropdown.Item>
                  <NavDropdown.Item style={color} href="/review-algorithm">
                    Review Algorithm
                  </NavDropdown.Item>
                  <NavDropdown.Item style={color} href="/dettaglio-corso">
                    Dettaglio Corso
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Menu;
