import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <Link className="nav-links" to="/">
            WeatherReport.IN
          </Link>
        </h1>
      </nav>
    );
  }
}

export default Navbar;
