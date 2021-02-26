import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';




class Rooms extends Component {
    constructor() {
        super();
      }
    
    render() {
        // const { user } = this.props;
        console.log(this.props);
        return (
            <div className="container" style={{paddingTop: "30px"}}>
                <div className="row" style={{padding: "0px 20%"}}>
                    <div className="col s8" style={{backgroundColor: "white", padding: "30px 20px", borderRadius: "6px"}}>
                        <Link to="/dashboard" className="btn-flat waves-effect">
                            <i className="material-icons left">keyboard_backspace</i> Back to Dashboard
                        </Link>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <h4>
                                <b>Room Listing</b> 
                            </h4>
                        </div>
                        <Container maxWidth="sm">IMAGE GOES HERE FROM MONGO DATABASE</Container>
                        <div>
                            <Grid container spacing={3}>
                                <Grid item xs={12} spacing={3}>
                                    <Paper>Address: 1234 Mainstreet Anywhere USA 10000</Paper>
                                </Grid>
                                <Grid item xs={12} spacing={3}>
                                    <Paper>Rent: $1400</Paper>
                                </Grid>
                                <Grid item xs={12} spacing={3}>
                                    <Paper>Bed: 4</Paper>
                                </Grid>
                                <Grid item xs={12} spacing={3}>
                                    <Paper>Bath: 2</Paper>
                                </Grid>
                                <Grid item xs={12} spacing={3}>
                                    <Paper>Current Occupants: John Smith</Paper>
                                </Grid>
                                <Grid item xs={12} spacing={3}>
                                    <Paper>Additional Information/Policies: At Camden, your pets are family too! We welcome cats and dogs, up to 3 pets per apartment home, with no pet weight limit. Call us with any pet-related questions! Restricted breeds: American Pit Bull Terrier, American Staffordshire Terrier, Staffordsh </Paper>
                                </Grid>
                                <Grid item xs={12} spacing={3}>
                                    <Paper>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Paper>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Rooms;