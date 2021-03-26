import React, { Component, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import axios from "axios";


class Questionnaire extends Component {
    constructor(props) {
        super(props);
        console.log("the state is " + this.props.location.state.id)
        this.state = {
            prev:[],
            userId: this.props.location.state.id,
            answer1:"0",
            answer2:"0",
            answer3:"0",
            answer4:"0",
            answer5:"0",
            answer6:"0"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        alert('Your Questionnaire has been updated');
        
        var updatedQuestionnaire = {
            userId: this.state.userId,
            answer1: this.state.answer1,
            answer2: this.state.answer2,
            answer3: this.state.answer3,
            answer4: this.state.answer4,
            answer5: this.state.answer5,
            answer6: this.state.answer6

        };

        console.log(updatedQuestionnaire)
        axios.post('http://localhost:3000/api/addQuestionnaire', updatedQuestionnaire)
            .then(response => {        
                this.setState({prev: response.data}) // get age, name and other data from response and set 
                                  //  the states here respectively 
            })
            .catch(error => error);  

        console.log("these are your matches");
        var x;
        for(x in updatedQuestionnaire){
            console.log(updatedQuestionnaire[x])
        }
    }

    render() {
        return (
            <div className="container" style={{paddingTop: "30px"}}>
                <div className="row" style={{padding: "0px 20%"}}>
                    <div className="col s8" style={{backgroundColor: "white", padding: "30px 20px", borderRadius: "6px"}}>
                        <Link to="/userprofile" className="btn-flat waves-effect">
                            <i className="material-icons left">keyboard_backspace</i> Back to Profile
                        </Link>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <h4>
                                <b>Questionnaire</b> 
                            </h4>
                        </div>
                        <div style={{ paddingLeft: "25px" , paddingTop: "35px"}}>
                        <FormControl component="fieldset">
                            <div style={{ paddingTop: "10px"}}>

                                <FormLabel component="legend">1. Helping others is something I work hard to do</FormLabel>
                                <RadioGroup row aria-label="q1" name="q1" defaultValue="Neutral" selectedValue={this.state.selectedValue} onChange={(e) => this.setState({answer1: e.target.value})}>
                                    <FormControlLabel value="-2" control={<Radio color="primary" />} label="Strongly Disagree" labelPlacement="bottom"/>
                                    <FormControlLabel value="-1" control={<Radio color="primary" />} label="Disagree" labelPlacement="bottom"/>
                                    <FormControlLabel value="0" control={<Radio color="primary" />} label="Neutral" labelPlacement="bottom"/>
                                    <FormControlLabel value="1" control={<Radio color="primary" />} label="Agree" labelPlacement="bottom"/>
                                    <FormControlLabel value="2" control={<Radio color="primary" />} label="Strongly Agree" labelPlacement="bottom"/>
                                </RadioGroup>
                            </div>
                            <div style={{ paddingTop: "20px"}}>
                                <FormLabel component="legend">2. Being prepared for any potential situation is important to me</FormLabel>
                                <RadioGroup row aria-label="q2" name="q2" defaultValue="Neutral" selectedValue={this.state.selectedValue} onChange={(e) => this.setState({answer2: e.target.value})}>
                                    <FormControlLabel value="-2" control={<Radio color="primary" />} label="Strongly Disagree" labelPlacement="bottom"/>
                                    <FormControlLabel value="-1" control={<Radio color="primary" />} label="Disagree" labelPlacement="bottom"/>
                                    <FormControlLabel value="0" control={<Radio color="primary" />} label="Neutral" labelPlacement="bottom"/>
                                    <FormControlLabel value="1" control={<Radio color="primary" />} label="Agree" labelPlacement="bottom"/>
                                    <FormControlLabel value="2" control={<Radio color="primary" />} label="Strongly Agree" labelPlacement="bottom"/>
                                </RadioGroup>
                            </div>
                            <div style={{ paddingTop: "20px"}}>
                                <FormLabel component="legend">3. I like individuals who go out of their way to help others</FormLabel>
                                <RadioGroup row aria-label="q3" name="q3" defaultValue="Neutral" selectedValue={this.state.selectedValue} onChange={(e) => this.setState({answer3: e.target.value})}>
                                    <FormControlLabel value="-2" control={<Radio color="primary" />} label="Strongly Disagree" labelPlacement="bottom"/>
                                    <FormControlLabel value="-1" control={<Radio color="primary" />} label="Disagree" labelPlacement="bottom"/>
                                    <FormControlLabel value="0" control={<Radio color="primary" />} label="Neutral" labelPlacement="bottom"/>
                                    <FormControlLabel value="1" control={<Radio color="primary" />} label="Agree" labelPlacement="bottom"/>
                                    <FormControlLabel value="2" control={<Radio color="primary" />} label="Strongly Agree" labelPlacement="bottom"/>
                                </RadioGroup>
                            </div>
                            <div style={{ paddingTop: "20px"}}>
                                <FormLabel component="legend">4. I like people who are organized and put together</FormLabel>
                                <RadioGroup row aria-label="q4" name="q4" defaultValue="Neutral" selectedValue={this.state.selectedValue} onChange={(e) => this.setState({answer4: e.target.value})}>
                                    <FormControlLabel value="-2" control={<Radio color="primary" />} label="Strongly Disagree" labelPlacement="bottom"/>
                                    <FormControlLabel value="-1" control={<Radio color="primary" />} label="Disagree" labelPlacement="bottom"/>
                                    <FormControlLabel value="0" control={<Radio color="primary" />} label="Neutral" labelPlacement="bottom"/>
                                    <FormControlLabel value="1" control={<Radio color="primary" />} label="Agree" labelPlacement="bottom"/>
                                    <FormControlLabel value="2" control={<Radio color="primary" />} label="Strongly Agree" labelPlacement="bottom"/>
                                </RadioGroup>
                            </div>
                            <div style={{ paddingTop: "20px"}}>
                                <FormLabel component="legend">5. I dislike people who insist on butting in on other's business and can't keep to themselves</FormLabel>
                                <RadioGroup row aria-label="q5" name="q5" defaultValue="Neutral" selectedValue={this.state.selectedValue} onChange={(e) => this.setState({answer5: e.target.value})}>
                                    <FormControlLabel value="-2" control={<Radio color="primary" />} label="Strongly Disagree" labelPlacement="bottom"/>
                                    <FormControlLabel value="-1" control={<Radio color="primary" />} label="Disagree" labelPlacement="bottom"/>
                                    <FormControlLabel value="0" control={<Radio color="primary" />} label="Neutral" labelPlacement="bottom"/>
                                    <FormControlLabel value="1" control={<Radio color="primary" />} label="Agree" labelPlacement="bottom"/>
                                    <FormControlLabel value="2" control={<Radio color="primary" />} label="Strongly Agree" labelPlacement="bottom"/>
                                </RadioGroup>
                            </div>
                            <div style={{ paddingTop: "20px"}}>
                                <FormLabel component="legend">6.  I dislike people who obsess over every little detail</FormLabel>
                                <RadioGroup row aria-label="q6" name="q6" defaultValue="Neutral" selectedValue={this.state.selectedValue} onChange={(e) => this.setState({answer6: e.target.value})}>
                                    <FormControlLabel value="-2" control={<Radio color="primary" />} label="Strongly Disagree" labelPlacement="bottom"/>
                                    <FormControlLabel value="-1" control={<Radio color="primary" />} label="Disagree" labelPlacement="bottom"/>
                                    <FormControlLabel value="0" control={<Radio color="primary" />} label="Neutral" labelPlacement="bottom"/>
                                    <FormControlLabel value="1" control={<Radio color="primary" />} label="Agree" labelPlacement="bottom"/>
                                    <FormControlLabel value="2" control={<Radio color="primary" />} label="Strongly Agree" labelPlacement="bottom"/>
                                </RadioGroup>
                            </div>
                        </FormControl>
                        </div>
                        <button
                                style={{
                                width: "180px",
                                borderRadius: "3px",
                                margin: "10px 10px 0px 0px"
                                }}
                                value='Submit'
                                type='submit'
                                onClick={this.handleSubmit}
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                Submit Questionnaire
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Questionnaire;