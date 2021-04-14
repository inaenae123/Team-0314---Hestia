import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { getUser } from "../../actions/authActions";
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import PropTypes from "prop-types";
import { connect } from "react-redux";

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
//display listing information
    render() {
        this.state = { open : false };
        this.state = {checked : false};
        this.state = { thanks : false };
        this.state = {popup : false};
        this.state = {review : false};
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.signAgreement = this.signAgreement.bind(this);
        this.handleOpen2 = this.handleOpen2.bind(this);
        this.handleClose2 = this.handleClose2.bind(this);
        this.handleClose3 = this.handleClose3.bind(this);
        this.handleClose4 = this.handleClose4.bind(this);
        this.checked = this.checked.bind(this);
        this.unchecked = this.unchecked.bind(this);
        this.leaveReview = this.leaveReview.bind(this);
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
                                <Box display="flex" flexDirection="column" >
                                    <h3> Rating : 3/5 (Static rn, need endpoint to get listing totalSum/ numratingCount)</h3>
                                    <Button color="primary" variant="contained" onClick={this.leaveReview}>Leave a Review</Button>
                                </Box>
                                <Dialog open={this.state.review} onClose={this.handleClose4}> 
                                        <Paper>
                                            <h1>
                                                Leave Review
                                            </h1>
                                            <TextField id="filled-basic" label="Review out of 5" variant="filled" />
                                        </Paper>
                                </Dialog>  
                                </Grid>
                                <Grid item xs={12} spacing={3}>
                                    <Paper>Address: 1234 Mainstreet Anywhere USA 10000</Paper>
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
                                <Grid item xs={12} spacing={3}>
                                    <Button variant="contained" color = "primary" onClick={this.handleOpen}>Access Leasing Agreement</Button>
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
                                                    //defaultChecked
                                                    //checked = {this.checked}
                                                    //onChange = {this.unchecked}
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                    />
                                                    </form>
                                                </Paper>
                                                <Button color="secondary" variant="contained" onClick={this.signAgreement}>Sign Agreement</Button>
                                            </Box>
                                        </Grid>
                                        </Modal>   
                                        <Dialog open={this.state.thanks} onClose={this.handleClose2}> 
                                        <Paper>
                                            <h1>
                                                Thank you for signing the leasing agreement :)
                                            </h1>
                                        </Paper>
                                        </Dialog>
                                        <Dialog open={this.state.popup} onClose={this.handleClose3}> 
                                        <Paper>
                                            <h1>
                                                Please check box agreeing to all terms beforing signing
                                            </h1>
                                        </Paper>
                                        </Dialog>
                                </Grid>
                            </Grid>
                    </div>
                </div>
            </div>
        );
    }

//open modal when clicking sign leasing agreement
handleOpen() {
    console.log('handleOpen called');
    this.setState({open : true});
};

leaveReview() {
    console.log('leavereview called');
    this.setState({review : true});
}
//function to change states to ensure that user has checked agree box
checked() {
    console.log('checked called');
    this.setState({checked : true});
    this.setState({popup : false});
}
//when uncheck check box, change so that can't sign agreement
unchecked() {
    console.log('unchechked called');
    this.setState({checked : false});
}
//open thank you message
handleOpen2() {
  console.log('handleOpen2 called');
    this.setState({thanks : true});
};
//close sign leasing agreement 
handleClose() {
    console.log('handleClose called');
    this.setState({open : false});
};
//close thank you box
handleClose2() {
    console.log('handleClose2 called');
    this.setState({thanks : false});
};
//close dialog box notifying user to check box agreeing to conditoins
handleClose3() {
    console.log('handleClose3 called');
    this.setState({popup : false});
};
//box to close dialog box that lets user leave a review
handleClose4() {
    console.log('handleClose3 called');
    this.setState({review : false});
};
//function that updates user database indicating user has signed leasing agreement
signAgreement() {
    //if(this.state.checked == true) {
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
        this.handleClose();
        this.handleOpen2();
        console.log("the props are these")
        console.log(this.props.auth);
    //}
    //else {
    //    this.setState({popup : true});
    //}     
        
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
// check which export needed !! TO Do 
export default connect(
mapStateToProps,
{getUser}
)(withRouter(Room));
// }
// export default Room;
