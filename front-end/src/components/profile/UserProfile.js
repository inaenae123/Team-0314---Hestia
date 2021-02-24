import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Avatar from 'react-avatar';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            users: []
        };
    }

    componentDidMount() {
        axios.get('/api/user')
        .then(res => {
            this.setState({users: res.data});
            console.log(this.state.users)
        });
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
                                <b>User Profile</b> 
                            </h4>
                            <Avatar size="50" round/>
                            <button
                                style={{
                                width: "160px",
                                borderRadius: "3px",
                                margin: "10px 10px 0px 0px"
                                }}
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                Edit Profile
                            </button>
                        </div>
                        <form>
                            <div className="input-field col s12">
                                <input
                                value={this.state.name}
                                id="name"
                                type="text"
                                />
                                <label htmlFor="name">Username</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                value={this.state.name}
                                id="name"
                                type="text"
                                />
                                <label htmlFor="name">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                value={this.state.name}
                                id="name"
                                type="text"
                                />
                                <label htmlFor="name">Phone Number</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                value={this.state.name}
                                id="name"
                                type="text"
                                />
                                <label htmlFor="name">About Me</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                value={this.state.name}
                                id="name"
                                type="number"
                                />
                                <label htmlFor="name">Number of Roommates</label>
                            </div>
                            <div className="input-field col s12">
                                <select value={this.state.value} onChange={this.handleChange}>
                                    <option value="apartment">Apartment</option>
                                    <option value="house">House</option>
                                </select>
                                <label htmlFor="name">Type of Residence</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                value={this.state.name}
                                id="name"
                                type="number"
                                />
                                <label htmlFor="name">Address</label>
                            </div>
                        </form>
                        {/* <form> */}
                            {/* <div className="input-field col s12">
                                <input
                                name="profileImage"
                                type="file"
                                />
                                <label htmlFor="name">Profile Picture</label>
                            </div>
                            
                            <div className="input-field col s12">
                                <input
                                id="email"
                                type="email"
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <button
                                style={{
                                    width: "150px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem"
                                }}
                                type="submit"
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                >
                                Create Profile
                                </button> */}
                            {/* </div> */}
                        {/* </form> */}
                    </div>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = state => ({
//     auth: state.auth,
//     errors: state.errors
// });

export default UserProfile;