import React, { Component, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import Avatar from 'react-avatar';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUser } from "../../actions/authActions";

class Questionnaire extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container" style={{paddingTop: "30px"}}>
                <div className="row" style={{padding: "0px 20%"}}>
                    <div className="col s8" style={{backgroundColor: "white", padding: "30px 20px", borderRadius: "6px"}}>
                        <Link to="/userprofile" className="btn-flat waves-effect">
                            <i className="material-icons left">keyboard_backspace</i> Back to Profile
                        </Link>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <h4>
                                <b>Questionnaire</b> 
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Questionnaire;