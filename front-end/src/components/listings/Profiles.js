import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import axios from "axios";
import 'semantic-ui-css/semantic.min.css'
import {Card, Icon} from 'semantic-ui-react'
//import { getUser } from "../../actions/authActions";


class Profiles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            userId: this.props.location.state.id,
            question: []
        };
        this.showMathces = this.showMatches.bind(this);
      }

      showMatches(e) {
        e.preventDefault();
        alert('Here are the matches');
      }
    
      componentDidMount() {
        //Receives listings from api
        axios.get('/api/user', {
        })
        .then(res => {
            this.setState({users: res.data});
            console.log(this.state.users)
        });
        //Get Qestionaires
        axios.get('/api/questionnaire', {})
        .then(res => {
            this.setState({question: res.data});
            console.log(this.state.question);
            console.log(this.props.location.state.id);
        })
    }
        
    render() {
        return (
            <div className="container" style={{paddingTop: "30px"}}>
                <div style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Link to="/dashboard" className="btn-flat waves-effect">
                        <i className="material-icons left">keyboard_backspace</i> Back to Dashboard
                    </Link>
                    <h1 style={{textAlign:"center", margin: "0px"}}><strong>User Profiles</strong></h1>
                </div>
                <div className="row" style={{margin: "30px 10px", justifyContent: 'center'}}>
                    {this.state.users.map((userP) => {
                        console.log("matching");
                        console.log(this.state.userId)
                        console.log(this.state.users._id)
                        let questionU = this.state.question.find(element => element.userId === this.state.userId);
                        let questionI = this.state.question.find(element => element.userId === this.state.users._id);
                        console.log(questionU);
                        console.log(questionI);
                        var card = (
                            <Link to="/room" style={{margin: '20px', justifyContent: 'center'}}>
                                <Card centered
                                    link
                                    image='https://miro.medium.com/max/360/1*W35QUSvGpcLuxPo3SRTH4w.png'
                                    header={userP.name}
                                    description={userP.about_me}
                                    extra = {userP.listing}
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
    matchRate = (q1.answer1*q2.answer3 + q1.answer2*q2.answer4 + q1.answer1*-q2.answer5 + q1.answer2*-q2.answer6);
    return matchRate;
}

export default Profiles
    