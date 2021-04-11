import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listing: [],
        }
    }
    
    componentDidMount() {
        //Receives listing from api
        axios.get('/api/listing', {
        })
        .then(res => {
            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i]._id === this.props.match.params.id) {
                    this.setState({listing: res.data[i]});
                }
            }
        });
    }

    render() {
        return (
            <div className="container" style={{paddingTop: "30px"}}>
                <div className="row" style={{padding: "0px 20%"}}>
                    <div className="col s8" style={{backgroundColor: "white", padding: "30px 20px", borderRadius: "6px"}}>
                        <Link to="/rooms" className="btn-flat waves-effect">
                            <i className="material-icons left">keyboard_backspace</i> Back to All Room Listings
                        </Link>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                           
                        </div>
                        <div style={{justifyContent: "center", textAlign: "center", margin: "20px"}}>
                            <h3>
                                <b>{this.state.listing.name}</b> 
                            </h3>
                            <img src="https://cdn2.atlantamagazine.com/wp-content/uploads/sites/4/2015/11/1115_homepark05_cck_oneuseonly.jpg" height="200px" width="200px"/>
                        </div>
                            <Grid container spacing={3}>
                                <Grid item xs={12} spacing={3}>
                                    <h4>Address:</h4>
                                    <h6>{this.state.listing.location}</h6>
                                </Grid>
                                <Grid item xs={12} spacing={3}>
                                    <h4>Price:</h4>
                                    <h6>${this.state.listing.price}</h6>
                                </Grid>
                                <Grid item xs={12} spacing={3}>
                                    <Paper>Bed: 4</Paper>
                                </Grid>
                                <Grid item xs={12} spacing={3}>
                                    <Paper>Bath: 2</Paper>
                                </Grid>
                                <Grid item xs={12} spacing={3}>
                                    <h4>Occupancy:</h4>
                                    <h6>{this.state.listing.Occupancy}</h6>
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
        );
    }
}

export default Room;