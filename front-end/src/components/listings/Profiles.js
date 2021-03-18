import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import axios from "axios";
import 'semantic-ui-css/semantic.min.css'
import {Card, Icon} from 'semantic-ui-react'

class Profiles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
      }
    
      componentDidMount() {
        //Receives listings from api
        axios.get('/api/user', {
        })
        .then(res => {
            this.setState({users: res.data});
            console.log(this.state.users)
        });
    }
    
    render() {
        return (
            <div className="container" style={{paddingTop: "30px"}}>
                <div style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Link to="/dashboard" className="btn-flat waves-effect">
                        <i className="material-icons left">keyboard_backspace</i> Back to Dashboard
                    </Link>
                    <h1 style={{textAlign:"center", margin: "0px"}}><strong>User Profiles</strong></h1>
                </div>
                <div className="row" style={{margin: "30px 10px", justifyContent: 'center'}}>
                    {this.state.users.map((user) => {
                        console.log("matching");
                        var card = (
                            <Link to="/room" style={{margin: '20px', justifyContent: 'center'}}>
                                <Card centered
                                    link
                                    image='https://miro.medium.com/max/360/1*W35QUSvGpcLuxPo3SRTH4w.png'
                                    header={user.name}
                                    description={user.about_me}
                                    extra = {user.listing}
                                    />
                            </Link>
                        );
                        return card
                    })};
                </div>
            </div>
        );
    }
}

export default Profiles;