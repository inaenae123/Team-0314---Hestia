import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  constructor() {
    super();
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

render() {
    const { user } = this.props.auth;
    return (
      <div style={{ paddingTop: "80px" }} className="container">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
            </h4>
            <div style={{textAlign: "center", alignContent: "center"}}>
              <Link
                  to="/userprofile"
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    margin: "20px",
                    padding: "14px" 
                  }}
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
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
            <p style={{fontSize:"20px", paddingTop:"10pt"}} className="flow-text grey-text text-darken-1">
                Do you want to...
            </p>
            <div style={{textAlign: "center", alignContent: "center"}}>
              <Link
                  to="/profiles"
                  style={{
                    width: "160px",
                    borderRadius: "3px",
                    margin: "20px",
                    padding: "14px" 
                  }}
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Go to Profiles
                </Link>
                <Link
                  to="/listings"
                  style={{
                    width: "160px",
                    borderRadius: "3px",
                    margin: "20px",
                    padding: "14px" 
                  }}
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
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
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);