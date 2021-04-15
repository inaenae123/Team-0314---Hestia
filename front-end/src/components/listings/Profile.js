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

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
            // open : false,
            // checked : false,
            // thanks: false,
            // popup: false,
            // review: false
        }
        // this.handleOpen = this.handleOpen.bind(this);
        // this.handleClose = this.handleClose.bind(this);
        // this.signAgreement = this.signAgreement.bind(this);
        // this.handleOpen2 = this.handleOpen2.bind(this);
        // this.handleClose2 = this.handleClose2.bind(this);
        // this.handleClose3 = this.handleClose3.bind(this);
        // this.handleClose4 = this.handleClose4.bind(this);
        // this.checked = this.checked.bind(this);
        // this.unchecked = this.unchecked.bind(this);
        // this.leaveReview = this.leaveReview.bind(this);
        // this.handlesubmitReview = this.handlesubmitReview.bind(this);
    }
    
    componentDidMount() {
        //Receives user from api
        axios.get('/api/user', {
        })
        .then(res => {
            console.log(res.data);
            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i]._id === this.props.match.params.id) {
                    this.setState({user: res.data[i]});
                }
            }
        });
    }

    render() {
        console.log(this.state.user);
        return (
            <div className="container" style={{paddingTop: "30px"}}>
                <div className="row" style={{padding: "0px 20%"}}>
                    <div className="col s8" style={{backgroundColor: "white", padding: "30px 20px", borderRadius: "6px"}}>
                        <Link to="/profiles" className="btn-flat waves-effect">
                            <i className="material-icons left">keyboard_backspace</i> Back to All Profiles
                        </Link>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                           
                        </div>
                        <div style={{justifyContent: "center", textAlign: "center", margin: "20px"}}>
                            <h3>
                                <b>{this.state.user.name}</b> 
                            </h3>
                            <img src="https://miro.medium.com/max/360/1*W35QUSvGpcLuxPo3SRTH4w.png" height="200px" width="200px"/>
                        </div>
                            <Grid container spacing={3}>
                                <Grid item xs={12} spacing={3}>
                                    <h4>About Me:</h4>
                                    <h6>{this.state.user.about_me}</h6>
                                </Grid>
                                <Grid item xs={12} spacing={3}>
                                    <h4>Email:</h4>
                                    <h6>{this.state.user.email}</h6>
                                </Grid>
                                <Grid item xs={12} spacing={3}>
                                    <h4>Phone Number:</h4>
                                    <h6>{this.state.user.phone_number}</h6>
                                </Grid>
                                <Box display="flex" flexDirection="column" >
                                    <Link
                                    to={{pathname: `/room/${this.state.user._id}`}}
                                        style={{
                                        width: "200px",
                                        borderRadius: "3px",
                                        margin: "20px 0px",
                                        padding: "15px" 
                                    }}
                                    className="btn btn-large waves-effect white hoverable black-text"
                                    >
                                    Go to Listing
                                    </Link>
                                </Box>
                            </Grid>
                    </div>
                </div>
            </div>
        );
    }

//open modal when clicking sign leasing agreement
// handleOpen() {
//     console.log('handleOpen called');
//     this.setState({open : true});
// };
// handlesubmitReview() {
//     console.log(document.getElementById('reviewBox').value);
//     console.log(this.props.match.params.id)
//         axios.post('/api/rating', {
//                 listingID: this.props.match.params.id,
//                 rating: document.getElementById('reviewBox').value
//         })
//         .then(res => {
//             console.log(res);
//         });
//         this.handleClose4();
//         console.log("the props are these")
// }
// leaveReview() {
//     console.log('leavereview called');
//     this.setState({review : true});
// }
//function to change states to ensure that user has checked agree box
// checked() {
//     console.log('checked called');
//     this.setState({checked : true});
//     this.setState({popup : false});
// }
//when uncheck check box, change so that can't sign agreement
// unchecked() {
//     console.log('unchechked called');
//     this.setState({checked : false});
// }
//open thank you message
// handleOpen2() {
//   console.log('handleOpen2 called');
//     this.setState({thanks : true});
// };
//close sign leasing agreement 
// handleClose() {
//     console.log('handleClose called');
//     this.setState({open : false});
// };
//close thank you box
// handleClose2() {
//     console.log('handleClose2 called');
//     this.setState({thanks : false});
// };
//close dialog box notifying user to check box agreeing to conditoins
// handleClose3() {
//     console.log('handleClose3 called');
//     this.setState({popup : false});
// };
//box to close dialog box that lets user leave a review
// handleClose4() {
//     console.log('handleClose3 called');
//     this.setState({review : false});
// };
//function that updates user database indicating user has signed leasing agreement
// signAgreement() {
//     //if(this.state.checked == true) {
//         const { user } = this.props.auth;
//         console.log("the user is " + user);

//         axios.post('/api/signLease', {
//                 userId: user.id,
//         })
//         .then(res => {
//             console.log(res);
//             console.log(user);
//             console.log(user.signed)
//         });
//         this.handleClose();
//         this.handleOpen2();
//         console.log("the props are these")
//         console.log(this.props.auth);
    //}
    //else {
    //    this.setState({popup : true});
    //}     
        
// };


// const mapStateToProps = state => ({
//     auth: state.auth,
//     errors: state.errors
// });

}
Profile.propTypes = {
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
)(withRouter(Profile));
// }
// export default Room;