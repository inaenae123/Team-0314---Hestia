import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Avatar from 'react-avatar';
import AvatarEditor from 'react-avatar-editor'

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
                            <div className="input-field col s12">
                                <input
                                value={this.state.username}
                                id="name"
                                type="text"
                                />
                                <label htmlFor="name">Username</label>
                            </div>
                            <div className="input-field col s12">
                                <label active htmlFor="about" style={{paddingBottom: "20px"}}>About Me</label>
                                <input
                                value={this.state.about}
                                id="about"
                                type="text"
                                />
                            </div>
                            <h5>Contact Information</h5>
                            <div className="input-field col s12">
                                <input
                                value={this.state.email}
                                id="email"
                                type="text"
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                value={this.state.phone}
                                id="phone"
                                type="text"
                                />
                                <label htmlFor="phone">Phone Number</label>
                            </div>
                            <h5>Listing Information</h5>
                            <div className="input-field col s12">
                                <input
                                value={this.state.roommates}
                                id="roommates"
                                type="number"
                                />
                                <label htmlFor="roommates">Number of Roommates</label>
                            </div>

                            <div className="input-field col s12">
                                <input
                                value={this.state.address}
                                id="address"
                                type="text"
                                />
                                <label htmlFor="address">Address</label>
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
                                Edit Profile
                            </button>
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