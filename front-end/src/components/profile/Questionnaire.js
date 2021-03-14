import React, { Component, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class Questionnaire extends Component {
    constructor(props) {
        super(props);
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
                                <FormLabel component="legend">1. Question</FormLabel>
                                <RadioGroup row aria-label="q1" name="q1" defaultValue="Neutral">
                                    <FormControlLabel value="Strongly Disagree" control={<Radio color="primary" />} label="Strongly Disagree" labelPlacement="bottom"/>
                                    <FormControlLabel value="Disagree" control={<Radio color="primary" />} label="Disagree" labelPlacement="bottom"/>
                                    <FormControlLabel value="Neutral" control={<Radio color="primary" />} label="Neutral" labelPlacement="bottom"/>
                                    <FormControlLabel value="Agree" control={<Radio color="primary" />} label="Agree" labelPlacement="bottom"/>
                                    <FormControlLabel value="Strongly Agree" control={<Radio color="primary" />} label="Strongly Agree" labelPlacement="bottom"/>
                                </RadioGroup>
                            </div>
                            <div style={{ paddingTop: "20px"}}>
                                <FormLabel component="legend">2. Question</FormLabel>
                                <RadioGroup row aria-label="q2" name="q2" defaultValue="Neutral">
                                    <FormControlLabel value="Strongly Disagree" control={<Radio color="primary" />} label="Strongly Disagree" labelPlacement="bottom"/>
                                    <FormControlLabel value="Disagree" control={<Radio color="primary" />} label="Disagree" labelPlacement="bottom"/>
                                    <FormControlLabel value="Neutral" control={<Radio color="primary" />} label="Neutral" labelPlacement="bottom"/>
                                    <FormControlLabel value="Agree" control={<Radio color="primary" />} label="Agree" labelPlacement="bottom"/>
                                    <FormControlLabel value="Strongly Agree" control={<Radio color="primary" />} label="Strongly Agree" labelPlacement="bottom"/>
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