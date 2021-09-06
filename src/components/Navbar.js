//import React, { useState } from "react";
import React from 'react';
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

/*function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>*/
    class Navbar extends React.Component {
      render() {
        return (
          <>
          <nav class="navbar navbar-expand-sm bg-light justify-content">
          <a class="navbar-brand" href="#">AIUNIVERSITY: <br></br> The Italian University Advisor</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/ricensisci">Recensisci</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/consigliami">Consigliami</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/trova-ateneo">Trova Ateneo</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/trova-corso-di-laurea">Trova Corso Di Laurea</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/sign-up">Sign Up</a>
                </li>
            </ul>
          </div>
        </nav>
    </>
  );
}
}



export default Navbar
