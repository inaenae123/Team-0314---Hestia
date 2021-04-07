import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Hestia_Logo_Backgroundless.png";

class Navbar extends Component {

  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper" style={{backgroundColor: "#FFDF8E"}}>
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              <img src={Logo} style={{width: "6%"}}/>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;