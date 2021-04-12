import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getUser } from "../../actions/authActions";
import axios from "axios";



class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      user: []
    }
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount() { 
    const { user } = this.props.auth;
        console.log("the user is " + user.name);
        axios.get('/api/userprofile', {
            params : {
                id: user.id,
                name: user.name
            }
        })
        .then(res => {
            this.setState({user: res.data});
            console.log(this.state.user)
            console.log(this.state.user.about_me)
        });
        console.log("the props are these")
        console.log(this.props.auth);
        }

render() {
    const { user } = this.props.auth;
    return (
      <div style={{ paddingTop: "80px" }} className="container">
        <div className="row">
          <div className="col s12 center-align">
            <h2>
              <b>Hey there,</b> {user.name.split(" ")[0]}<b>!</b>
            </h2>
            <div style={{textAlign: "center", alignContent: "center"}}>
              <Link
                  to="/userprofile"
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    margin: "20px",
                    padding: "14px",
                    backgroundColor: "#FFDF8E",
                    borderColor: "#FFDF8E" 
                  }}
                  className="btn btn-large waves-effect waves-light hoverable accent-3"
                >
                  My Profile
              </Link>
              <button
                style={{
                  width: "160px",
                  borderRadius: "3px",
                  margin: "0px 10px 0px 15px"
                }}
                onClick={this.onLogoutClick}
                className="btn btn-large waves-effect white hoverable black-text"
              >
                Logout
              </button>
            </div>
            <h4 style={{fontSize:"20px", paddingTop:"10pt", fontFamily: "monospace"}}>
                Do you want to...
            </h4>
            <div style={{textAlign: "center", alignContent: "center"}}>
              <Link
                  to={{pathname: "/profiles", state: {id: this.state.user._id}}}
                  style={{
                    width: "160px",
                    borderRadius: "3px",
                    margin: "20px",
                    padding: "14px",
                    backgroundColor: "#FFFB9B", color: "black", borderColor: "#FFFB9B"
                  }}
                  className="btn btn-large waves-effect waves-light hoverable accent-3"
                >
                  Go to Profiles
                </Link>
                <Link
                  to= {{
                    pathname:'/rooms', state: {id: this.state.user._id}}}
                  style={{
                    width: "160px",
                    borderRadius: "3px",
                    margin: "20px",
                    padding: "14px",
                    backgroundColor: "#FFFB9B", color: "black", borderColor: "#FFFB9B" 
                  }}
                  className="btn btn-large waves-effect waves-light hoverable accent-3"
                >
                  Go to Listings
                </Link>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getUser: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
  //errors: state.errors
});

export default connect(
  mapStateToProps,
  { logoutUser, getUser}
)(Dashboard);