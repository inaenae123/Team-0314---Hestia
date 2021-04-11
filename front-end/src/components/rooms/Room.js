import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { getUser } from "../../actions/authActions";
import Checkbox from '@material-ui/core/Checkbox';
import axios from "axios";

class Room extends Component {
    constructor(props) {
        super(props);
        this.state = { open : false };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.signAgreement = this.signAgreement.bind(this);
    }

    componentDidMount() { 
        const { user } = this.props.auth;
        console.log(user);
    }
    render() {
        //const { user } = this.props;
        console.log(this.props);
        return (
            <div className="container" style={{paddingTop: "30px"}}>
                <div className="row" style={{padding: "0px 20%"}}>
                    <div className="col s8" style={{backgroundColor: "white", padding: "30px 20px", borderRadius: "6px"}}>
                        <Link to="/rooms" className="btn-flat waves-effect">
                            <i className="material-icons left">keyboard_backspace</i> Back to All Room Listings
                        </Link>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <h4>
                                <b>Listing</b> 
                            </h4>
                        </div>
                        <div style={{justifyContent: "center", textAlign: "center", margin: "20px"}}>
                            <img src="https://cdn2.atlantamagazine.com/wp-content/uploads/sites/4/2015/11/1115_homepark05_cck_oneuseonly.jpg" height="200px" width="200px"/>
                        </div>
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
                                <Grid item xs={12} spacing={3}>
                                    <Button variant="contained" onClick={this.handleOpen}>Access Leasing Agreement</Button>
                                        <Modal style = {{padding: "50px 400px"}} open={this.state.open} onClose={this.handleClose}>
                                        <Grid item xs={12} spacing={3}>
                                            <Paper>
                                            <h1>
                                                Leasing Agreement
                                            </h1>
                                            </Paper>
                                            <Paper>
                                                Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                                aliquip ex ea commodo consequat.
                                            </Paper>
                                            <Box display="flex" flexDirection="column" >
                                                <Paper>
                                                    <form noValidate autoComplete="off">
                                                    <TextField id="filled-basic" label="Name" variant="filled" />
                                                    <TextField id="filled-basic" label="Date" variant="filled" />
                                                    <h3>
                                                        I agree to all terms and conditions listed above
                                                    </h3>
                                                    <Checkbox
                                                    defaultChecked
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                    />
                                                    </form>
                                                </Paper>
                                                <Button color="secondary" variant="contained" onClick={this.signAgreement}>Sign Agreement</Button>
                                            </Box>
                                        </Grid>
                                        </Modal>
                                </Grid>
                            </Grid>
                    </div>
                </div>
            </div>
        );
    }

handleOpen() {
    console.log('handleOpen called');
    this.setState({open : true});
};

handleClose() {
    console.log('handleClose called');
    this.setState({open : false});
};
signAgreement() {
    const { user } = this.props.auth;
        console.log("the user is " + user);

        axios.post('/api/signLease', {
                userId: user.id,
        })
        .then(res => {
            console.log(res);
            console.log(user);
            console.log(user.signed)
        });
        console.log("the props are these")
        console.log(this.props.auth);
};

// const mapStateToProps = state => ({
//     auth: state.auth,
//     errors: state.errors
// });

}
Room.propTypes = {
    getUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
  
const mapStateToProps = state => ({
auth: state.auth,
errors: state.errors
});
  
export default connect(
mapStateToProps,
{getUser}
)(withRouter(Room));
