import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Avatar from 'react-avatar';
import AvatarEditor from 'react-avatar-editor'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUser } from "../../actions/authActions";

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            user: []
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChange(event) {
    //     this.setState({value: event.target.value});
    // }
    
    // handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    // }

    componentDidMount() {
        const { user } = this.props.auth;
        console.log(user);

        axios.get('/api/userprofile', {
            params : {
                id: user.id,
                name: user.name
            }
        })
        .then(res => {
            this.setState({user: res.data});
            console.log(this.state.user)
            console.log(this.state.user.name)
        });
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
                                        value={this.state.user.name}
                                        id="name"
                                        type="text"
                                        />
                                    </label>
                                </div>
                                <div className="col s12">
                                    <label htmlFor="about" className="col s12">
                                        About Me
                                        <input
                                        value={this.state.about}
                                        id="about"
                                        type="text"
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="contactinfo col s12">
                                <h5>Contact Information</h5>
                                <div className="col s12">
                                    <label htmlFor="email" className="col s12">Email
                                        <input
                                        value={this.state.user.email}
                                        id="email"
                                        type="text"
                                        />
                                    </label>
                                </div>
                                <div className="col s12">
                                    <label htmlFor="phone" className="col s12">Phone Number
                                        <input
                                        value={this.state.phone}
                                        id="phone"
                                        type="text"
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="listinginfo col s12">
                                <h5>Listing Information</h5>
                                <div className="col s12">
                                    <label htmlFor="roommates" className="col s12">Number of Roommates
                                        <input
                                        value={this.state.roommates}
                                        id="roommates"
                                        type="number"
                                        />
                                    </label>
                                </div>
                                <div className="col s12">
                                    <label htmlFor="address" className="col s12">Address
                                        <input
                                        value={this.state.address}
                                        id="address"
                                        type="text"
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
)(UserProfile);
