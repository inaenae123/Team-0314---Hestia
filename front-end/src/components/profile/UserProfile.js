import React, { Component} from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import Avatar from 'react-avatar';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUser } from "../../actions/authActions";
import Chip from '@material-ui/core/Chip';
//This file contains the code for the user profile information
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
            listingRoomMates: [],
            price: 0,
            tags: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClickAdd = this.handleClickAdd.bind(this);
    }
    //Code to update user profile details
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
        if (this.state.tags == []) {
            this.state.tags = this.state.user.tags;
        }
        //log updated profile information
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
            listingRoomMates: this.state.listingRoomMates,
            tags: this.state.tags
        };
        //call to user API
        console.log(updatedUser)
        axios.put('http://localhost:3000/api/user', updatedUser)
            .then(response => { 
                console.log(updatedUser)
                console.log(response)          
                this.setState({user: response.data}) 
            })
            .catch(error => error);  

            var updatedListing = {
                //_id: this.state.listing._id,
                userId: this.state.user._id,
                name: this.state.listingName,
                location: this.state.listingLocation,
                Occupancy: this.state.listingOccupancy,
                roomMates: this.state.listingRoomMates,
                price: this.state.price,
                policies: this.state.policies,
                description: this.state.description,
                bed: this.state.bed,
                bath: this.state.bath
            };
        
        if (this.state.listing.length == 0) {
            console.log("first")
            console.log("the listing id is " + this.state.listing.userId)
            console.log("the listing is " + this.state.listing)
            axios.post('http://localhost:3000/api/addListing', updatedListing)
            .then(response => {        
                this.setState({listing: response.data}) 
                console.log("this is the response data" + response.data.userId)
            })
            .catch(error => error); 
            console.log("the listin id is " + this.state.listing.userId)
            console.log("the listing is " + this.state.listing)
        } else {
            console.log("second")
            console.log("the listin id is " + this.state.listing.userId)
            console.log("the listing is " + this.state.listing)
            axios.put('http://localhost:3000/api/updateListing', updatedListing)
            .then(response => {      
                this.setState({listing: response.data}) 
                console.log("this is the response data" + response.data.id)// get age, name and other data from response and set 
                                  //  the states here respectively 
            })
            .catch(error => error); 
            console.log("the listin id is " + this.state.listing.userId)
            console.log("the listing is " + this.state.listing)
        }
    }

    componentDidMount() {
        const { user } = this.props.auth;

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
            console.log(this.state.user.tags);
            this.setState({tags: res.data.tags});
            console.log(this.state.tags);
        });

    }
    //get current tags
    handleClickAdd(e) {
        e.preventDefault();
        const tags = this.state.tags.slice();
        tags.push({id: Math.random() , content: this.input.value});
        this.setState({tags: tags});
    
        console.log("the tags are \n")
        console.log(this.state.tags)
        // this.input.value = '';
        // var updatedUser = {
        //     _id: this.state.user._id,
        //     name: this.state.name,
        //     email: this.state.email,
        //     address: this.state.address,
        //     roommates: this.state.roommates,
        //     phone_number: this.state.phone,
        //     about_me: this.state.about,
        //     listingName: this.state.listingName,
        //     listingLocation: this.state.listingLocation,
        //     listingOccupancy: this.state.listingOccupancy,
        //     listingRoomMates: this.state.listingRoomMates,
        //     tags: this.state.tags
        // };

        // console.log(updatedUser)
        // axios.put('http://localhost:3000/api/user', updatedUser)
        //     .then(response => { 
        //         console.log(updatedUser)
        //         console.log(response)          
        //         this.setState({user: response.data}) // get age, name and other data from response and set 
        //                           //  the states here respectively 
        //     })
        //     .catch(error => error);
        console.log("this is the current tags")
        console.log(this.state.tags)
      }
     //function to delete a profile tag from user profile 
    handleClickDelete(tag) {
        console.log(tag)
        const tags = this.state.tags.filter(t => tag.id !== t.id);
        this.setState({tags: tags});
    }
    //display user profile
    render() {
        return (
            <div className="container" style={{paddingTop: "30px"}}>
                <div className="row" style={{padding: "0px 20%"}}>
                    <div className="col s8" style={{backgroundColor: "white", padding: "30px 20px", borderRadius: "6px"}}>
                        <Link to="/dashboard" className="btn-flat waves-effect">
                            <i className="material-icons left">keyboard_backspace</i> Back to Dashboard
                        </Link>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <h3>
                                <b>User Profile</b> 
                            </h3>
                        </div>
                        <div className="col s12" style={{textAlign: "center", alignContent: "center"}}>
                            <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} size="100" round/>
                        </div>
                        <form>
                            <div className="generalInfo col s12">
                                <h4>General Information</h4>
                                <div className="col s12">
                                    <label htmlFor="name" className="col s12">
                                    Name
                                        <input
                                        className="col s12"
                                        defaultValue={this.state.user.name}
                                        id="name"
                                        name="name"
                                        type="text"
                                        onChange={(e) => this.setState({name: e.target.value})}
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
                                <h4>Contact Information</h4>
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
                                <h4>Listing Information</h4>
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
                                <div className="col s12">
                                    <label htmlFor="address" className="col s12">price
                                        <input
                                        defaultValue={this.state.user.price}
                                        id="price"
                                        type="number"
                                        onChange={(e) => this.setState({price: e.target.value})}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="personality col s12">
                                <h4>Personality Information</h4>
                                <h6>Press the button below to take the questionnaire</h6>
                                <Link
                                to={{
                                    pathname:'/questionnaire', state: {id: this.state.user._id}}}
                                    style={{
                                    width: "200px",
                                    borderRadius: "3px",
                                    margin: "20px 0px",
                                    padding: "15px" 
                                }}
                                className="btn btn-large waves-effect white hoverable black-text"
                                >
                                Take Questionnaire
                                </Link>
                                <div className="AddAndDelete">
                                    <h6>Add tags that describe you!</h6>
                                    {this.state.tags.map((tags) => {
                                        console.log("in the tags mapping part")
                                        console.log(this.state.user)
                                        var content = tags.content;
                                        var chip = (
                                            <Chip clickable
                                                label = {content}
                                                onDelete={this.handleClickDelete.bind(this, tags)}
                                            />
                                        );
                                        console.log("the current tags are")
                                        console.log(this.state.user.tags)
                                        return chip
                                    })}
                                    <div className="inputs">
                                        <input ref={r => this.input = r} style={{display: "inline", maxWidth: "300px", marginRight: "20px"}}/>
                                        <button onClick={this.handleClickAdd}
                                            style={{
                                                width: "60px",
                                                borderRadius: "3px",
                                                margin: "10px 10px 0px 0px",
                                                height: "40px"
                                            }}
                                            className="btn btn-large waves-effect white hoverable black-text">
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <button
                                style={{
                                width: "160px",
                                borderRadius: "3px",
                                margin: "10px 10px 0px 0px",
                                backgroundColor: "#FFDF8E",
                                borderColor: "#FFDF8E" 
                                }}
                                value='Submit'
                                type='submit'
                                onClick={this.handleSubmit}
                                className="btn btn-large waves-effect waves-light hoverable accent-3"
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
