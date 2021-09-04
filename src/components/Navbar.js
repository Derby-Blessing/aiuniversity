import React, { useState } from "react";
import { Button } from "./Button";
//import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
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
    <>
      <nav className="NavbarItems">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <i className="fa fa-university" aria-hidden="true"></i>
            AIUNIVERSITY: <br></br> The Italian University Advisor{" "}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/ricensisci"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Ricensisci
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/consigliami"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Consigliami
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/trova-ateneo"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Trova Ateneo
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/trova-corso-di-laurea"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Trova Corso Di Laurea
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
