import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import axios from "axios";
import 'semantic-ui-css/semantic.min.css'
import {Card, Icon} from 'semantic-ui-react'
import { orange } from "@material-ui/core/colors";
import Chip from '@material-ui/core/Chip';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from "react-bootstrap/Button";

//import { getUser } from "../../actions/authActions";


class Profiles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            userId: this.props.location.state.id,
            question: [], 
            originalArray: []
        };
        this.compareLowesttMatch = this.compareLowesttMatch.bind(this);
        this.compareHighestMatch = this.compareHighestMatch.bind(this);
        this.showMatches = this.showMatches.bind(this);
        this.showHighestMatch = this.showHighestMatch.bind(this);
        this.showLowestMatch = this.showLowestMatch.bind(this);
        this.reset = this.reset.bind(this);
      }

      compareLowesttMatch(a, b) {
        if (a.matchRate > b.matchRate) return 1;
        if (b.matchRate > a.matchRate) return -1;
        return 0;
    }

    compareHighestMatch(a, b) {
        if (a.matchRate < b.matchRate) return 1;
        if (b.matchRate < a.matchRate) return -1;
        return 0;
    }

      showHighestMatch(e) {
        console.log("in the highest")
        console.log(e);
        // console.log(this.state.users);
        let filteredUsers = [...this.state.users];
        filteredUsers = filteredUsers.sort(this.compareHighestMatch);
        this.setState({users: filteredUsers});
        // console.log(this.state.users)
      }

      showLowestMatch(e) {
        console.log(e);
        // console.log(this.state.users);
        let filteredUsers = [...this.state.users];
        filteredUsers = filteredUsers.sort(this.compareLowesttMatch);
        this.setState({users: filteredUsers});
        // console.log(this.state.users)
      }

      showMatches(e) {
        e.preventDefault();
        alert('Here are the matches');
      }

      reset() {
        let originalArray = [...this.state.originalArray];
        console.log(originalArray);
        this.setState({users: originalArray});
    }
    
      componentDidMount() {
        //Receives listings from api
        axios.get('/api/user', {
        })
        .then(res => {
            this.setState({users: res.data});
            this.setState({originalArray: res.data});
            console.log(this.state.users)
        });
        //Get Qestionaires
        axios.get('/api/questionnaire', {})
        .then(res => {
            this.setState({question: res.data});
            console.log(this.state.question);
            //console.log(this.props.location.state.id);
        })
    }
        
    render() {
        console.log(this.state.users);
        return (
            <div className="container" style={{paddingTop: "30px"}}>
                <div style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Link to="/dashboard" className="btn-flat waves-effect">
                        <i className="material-icons left">keyboard_backspace</i> Back to Dashboard
                    </Link>
                    <h1 style={{textAlign:"center", margin: "0px"}}><strong>User Profiles</strong></h1>
                </div>
                <div style={{paddingTop: "10px"}}>
                        <Dropdown style={{display: "inline", padding: "0px 10px"}}>
                            <Dropdown.Toggle style={{backgroundColor: "#FFFB9B", color: "black", borderColor: "#FFFB9B"}}>
                                Sort By
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={this.showHighestMatch}>Highest Matches</Dropdown.Item>
                                <Dropdown.Item onClick={this.showLowestMatch}>Lowest Matches</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button variant="light" onClick={this.reset} style={{margin: "0px 10px"}}>
                            Reset
                        </Button>
                    </div>
                <div className="row" style={{margin: "30px 10px", justifyContent: 'center'}}>
                    {this.state.users.map((userP) => {
                        console.log("matching");
                        console.log(this.state.userId)
                        console.log(userP._id)
                        console.log("hiiii")
                        console.log(typeof this.state.users)
                        console.log(this.state.users)
                        var qUser = this.state.question.find(element => element.userId === this.state.userId);
                        var qMatch = this.state.question.find(element => element.userId === userP._id);
                        var matchColor;
                        var matchRate;
                        if (typeof qMatch !== "undefined" && qMatch !== null) {
                            matchRate = matchRateCalc(qMatch, qUser);
                        } else {
                            matchRate = 0;
                        }
                        if (matchRate < 0) {
                            if (matchRate > - 8) {
                                matchColor = "orange";
                            } else {
                                matchColor = "red";
                            }
                        } else if (matchRate > 0) {
                            if (matchRate < 8) {
                                matchColor = "yellow";
                            } else {
                                matchColor = "green";
                            }
                        } else {
                            matchColor = "grey";
                        }
                        userP.matchRate = matchRate;
                        console.log(userP)
                        console.log(matchColor);
                        console.log(matchRate);
                        
                        var card = (
                            <Link to={{pathname: `/profile/${userP._id}`}} style={{margin: '20px', justifyContent: 'center'}}>
                                <Card centered
                                    link
                                    image='https://miro.medium.com/max/360/1*W35QUSvGpcLuxPo3SRTH4w.png'
                                    header={userP.name}
                                    description={userP.about_me}
                                    extra = {userP.tags.map((tags) => {
                                        var chip = (
                                            <Chip style={{marginRight: '5px'}}
                                                label = {tags.content}
                                            />
                                        );
                                        return chip
                                    })}
                                    color = {matchColor}
                                    meta = {(matchRate/16 * 100) + "%"}
                                    />
                            </Link>
                        );
                        return card
                    })};
                </div>
                <button
            style={{
            width: "160px",
            borderRadius: "3px",
            margin: "10px 10px 0px 0px"
            }}
            value='Submit'
            type='submit'
            onClick={this.showMatches}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
            Show Matches
        </button>
            </div>
            
            
        );
    }
}

function matchRateCalc(q1, q2) {
    let matchRate = 0;
    matchRate = (q1.answer1*q2.answer3 + q1.answer2*q2.answer4 - q1.answer1*q2.answer5 - q1.answer2*q2.answer6);
    return matchRate;
}

export default Profiles
    