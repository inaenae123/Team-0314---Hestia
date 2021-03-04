import React, { Component, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import Avatar from 'react-avatar';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUser } from "../../actions/authActions";

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            name: '',
            about: '',
            phone: '',
            roommates: 0,
            address: '',
            email: '',
            listing: [],
            listingName: '',
            listingLocation: '',
            listingOccupancy: 0,
            listingRoomMates: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        alert('Profile has been updated!');
        if (this.state.name == '') {
            this.state.name = this.state.user.name;
        }
        if (this.state.about == '') {
            this.state.about = this.state.user.about_me;
        }
        if (this.state.phone == '') {
            this.state.phone = this.state.user.phone_number;
        }
        if (this.state.roommates == 0) {
            this.state.roommates = this.state.user.roommates;
        }
        if (this.state.address == '') {
            this.state.address = this.state.user.address;
        }
        if (this.state.email == '') {
            this.state.email = this.state.user.email;
        }
        if (this.state.listingName == '') {
            this.state.listingName = this.state.user.listingName;
        }
        if (this.state.listingLocation == '') {
            this.state.listingLocation = this.state.user.listingLocation;
        }
        if (this.state.listingOccupancy == '') {
            this.state.listingOccupancy = this.state.user.listingOccupancy;
        }
        if (this.state.listingRoomMates == '') {
            this.state.listingRoomMates = this.state.user.listingRoomMates;
        }
        console.log(this.state.name)
        console.log("the listingName is " + this.state.listingName)
        var updatedUser = {
            _id: this.state.user._id,
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            roommates: this.state.roommates,
            phone_number: this.state.phone,
            about_me: this.state.about,
            listingName: this.state.listingName,
            listingLocation: this.state.listingLocation,
            listingOccupancy: this.state.listingOccupancy,
            listingRoomMates: this.state.listingRoomMates
        };

        console.log(updatedUser)
        axios.put('http://localhost:3000/api/user', updatedUser)
            .then(response => { 
                console.log(updatedUser)
                console.log(response)          
                this.setState({user: response.data}) // get age, name and other data from response and set 
                                  //  the states here respectively 
            })
            .catch(error => error);  

            var updatedListing = {
                _id: this.state.listing._id,
                name: this.state.listingName,
                location: this.state.listingLocation,
                Occupancy: this.state.listingOccupancy,
                roomMates: this.state.listingRoomMates
            };
        
        if (this.state.listing.length == 0) {
            console.log("first")
            console.log("the listin id is " + this.state.listing.id)
            console.log("the listing is " + this.state.listing)
            axios.post('http://localhost:3000/api/addListing', updatedListing)
            .then(response => {        
                this.setState({listing: response.data}) 
                console.log("this is the response data" + response.data.id)
            })
            .catch(error => error); 
            console.log("the listin id is " + this.state.listing.id)
            console.log("the listing is " + this.state.listing)
        } else {
            console.log("second")
            console.log("the listin id is " + this.state.listing.id)
            console.log("the listing is " + this.state.listing)
            axios.put('http://localhost:3000/api/updateListing', updatedListing)
            .then(response => {      
                this.setState({listing: response.data}) 
                console.log("this is the response data" + response.data.id)// get age, name and other data from response and set 
                                  //  the states here respectively 
            })
            .catch(error => error); 
            console.log("the listin id is " + this.state.listing.id)
            console.log("the listing is " + this.state.listing)
        }
    }

    componentDidMount() {
        const { user } = this.props.auth;
        
        console.log("the user is " + user);

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
        return (
            <div className="container" style={{paddingTop: "30px"}}>
                <div className="row" style={{padding: "0px 20%"}}>
                    <div className="col s8" style={{backgroundColor: "white", padding: "30px 20px", borderRadius: "6px"}}>
                        <Link to="/dashboard" className="btn-flat waves-effect">
                            <i className="material-icons left">keyboard_backspace</i> Back to Dashboard
                        </Link>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <h4>
                                <b>User Profile</b> 
                            </h4>
                        </div>
                        <div className="col s12" style={{textAlign: "center", alignContent: "center"}}>
                            <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} size="100" round/>
                        </div>
                        <form>
                            <div className="generalInfo col s12">
                                <h5>General Information</h5>
                                <div className="col s12">
                                    <label htmlFor="name" className="col s12">
                                    Name
                                        <input
                                        className="col s12"
                                        defaultValue={this.state.user.name}
                                        id="name"
                                        name="name"
                                        type="text"
                                        onChange={this.handleChange}
                                        />
                                    </label>
                                </div>
                                <div className="col s12">
                                    <label htmlFor="about" className="col s12">
                                        About Me
                                        <input
                                        defaultValue={this.state.user.about_me}
                                        id="about"
                                        type="text"
                                        onChange={(e) => this.setState({about: e.target.value})}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="contactinfo col s12">
                                <h5>Contact Information</h5>
                                <div className="col s12">
                                    <label htmlFor="email" className="col s12">Email
                                        <input
                                        defaultValue={this.state.user.email}
                                        id="email"
                                        name="email"
                                        onChange={(e) => this.setState({email: e.target.value})}
                                        type="text"
                                        />
                                    </label>
                                </div>
                                <div className="col s12">
                                    <label htmlFor="phone" className="col s12">Phone Number
                                        <input
                                        defaultValue={this.state.user.phone_number}
                                        id="phone"
                                        type="text"
                                        onChange={(e) => this.setState({phone: e.target.value})}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="listinginfo col s12">
                                <h5>Listing Information</h5>
                                <div className="col s12">
                                    <label htmlFor="listingName" className="col s12"> Listing name
                                        <input
                                        defaultValue={this.state.user.listingName}
                                        id="listingName"
                                        type="text"
                                        onChange={(e) => this.setState({listingName: e.target.value})}
                                        />
                                    </label>
                                </div>
                                <div className="col s12">
                                    <label htmlFor="listingLocation" className="col s12">Address
                                        <input
                                        defaultValue={this.state.user.listingLocation}
                                        id="listingLocation"
                                        type="text"
                                        onChange={(e) => this.setState({listingLocation: e.target.value})}
                                        />
                                    </label>
                                </div>
                                <div className="col s12">
                                    <label htmlFor="listingOccupancy" className="col s12">Occupancy
                                        <input
                                        defaultValue={this.state.user.listingOccupancy}
                                        id="listingOccupancy"
                                        type="number"
                                        onChange={(e) => this.setState({listingOccupancy: e.target.value})}
                                        />
                                    </label>
                                </div>
                                <div className="col s12">
                                    <label htmlFor="address" className="col s12">RoomMates
                                        <input
                                        defaultValue={this.state.user.Occupancy}
                                        id="roommates"
                                        type="number"
                                        onChange={(e) => this.setState({listingRoom: e.target.value})}
                                        />
                                    </label>
                                </div>
                            </div>
                        </form>
                        <button
                                style={{
                                width: "160px",
                                borderRadius: "3px",
                                margin: "10px 10px 0px 0px"
                                }}
                                value='Submit'
                                type='submit'
                                onClick={this.handleSubmit}
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                Update Profile
                            </button>
                    </div>
                </div>
            </div>
        );
    }
}

UserProfile.propTypes = {
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
)(withRouter(UserProfile));
