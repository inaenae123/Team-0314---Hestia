import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import axios from "axios";
import 'semantic-ui-css/semantic.min.css'
import {Card, Icon} from 'semantic-ui-react'

class Rooms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listings: []
        }
      }
    
      componentDidMount() {
        //Receives listings from api
        axios.get('/api/listing', {
        })
        .then(res => {
            this.setState({listings: res.data});
            console.log(this.state.listings)
        });
    }
    
    render() {
        return (
            <div className="container" style={{paddingTop: "30px"}}>
                <div style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Link to="/dashboard" className="btn-flat waves-effect">
                        <i className="material-icons left">keyboard_backspace</i> Back to Dashboard
                    </Link>
                    <h1 style={{textAlign:"center", margin: "0px"}}><strong>Room Listings</strong></h1>
                </div>
                <div className="row" style={{margin: "30px 10px", justifyContent: 'center'}}>
                    {this.state.listings.map((listing) => {
                        console.log(listing);
                        var occupancy = "Occupancy: " + listing.Occupancy;
                        var extra = ( <div> <Icon name='user'/> {occupancy} </div>);
                        var card = (
                            <Link to="/room" style={{margin: '20px', justifyContent: 'center'}}>
                                <Card centered
                                    link
                                    image='https://cdn2.atlantamagazine.com/wp-content/uploads/sites/4/2015/11/1115_homepark05_cck_oneuseonly.jpg'
                                    header={listing.name}
                                    meta={listing.location}
                                    extra = {extra}
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

export default Rooms;