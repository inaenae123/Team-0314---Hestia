import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  
  render() {
    return (
      <div style={{ paddingTop: "80px" }} className="container">
        <div className="row">
          <div className="col s12 center-align">
            <h1>
              Welcome to Hestia!
            </h1>
            <h5 className="grey-text text-darken-1" style={{fontFamily: "monospace", fontSize: "18px"}}>
              Sign up or login to find your perfect sublease or roommate match.
            </h5>
            <br />
            <div style={{textAlign: "center", alignContent: "center"}}>
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  margin: "20px",
                  padding: "15px",
                  backgroundColor: "#FFDF8E",
                  borderColor: "#FFDF8E" 
                }}
                className="btn btn-large waves-effect waves-light hoverable accent-3"
              >
                Register
              </Link>
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  padding: "15px",
                  margin: "20px"
                }}
                className="btn btn-large waves-effect white hoverable black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;