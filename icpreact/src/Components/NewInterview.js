import React, { Component } from 'react'

import FormInterview from './FormInterview'
import SendRequest from './SendRequest'

import { Redirect } from "react-router-dom";

export default class NewInterview extends Component {
    constructor(props) {
        super(props)
        this.addInterview = this.addInterview.bind(this);
        this.state = {
            isadded : false
        }
    }

    addInterview(interviewData){
        let RequestObj = new SendRequest()
        RequestObj.Send(process.env.REACT_APP_ManageInterviewsAPI, 'POST', interviewData)
        .then(response => {alert("Added with id = "+response.data.id); this.setState({isadded : true})} )
    }
    
    render() {
        if (this.state.isadded) return <Redirect to="/" />
        return (
            <div>
                <FormInterview Interviewfunction = {this.addInterview} buttonsStatement = "Add Interview"/>
            </div>
        )
    }
}
