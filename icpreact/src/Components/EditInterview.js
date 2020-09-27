import React, { Component } from 'react'

import FormInterview from './FormInterview'
import SendRequest from './SendRequest'

import { Redirect } from "react-router-dom";

export default class EditInterview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isedited : false
        }
        this.editInterview = this.editInterview.bind(this);
    }

    editInterview(interviewData){
        let RequestObj = new SendRequest()
        RequestObj.Send(process.env.REACT_APP_ManageInterviewsAPI+this.props.match.params.id, 'PATCH', interviewData)
        .then(response => {alert("edit interview with id = "+response.data.id); this.setState({isedited : true})} )
    }
    
    render() {
        if (this.state.isedited) return <Redirect to="/" />
        return (
            <div>
                <FormInterview Interviewfunction = {this.editInterview} InterviewId = {this.props.match.params.id} buttonsStatement = "Edit Interview"/>
            </div>
        )
    }
}
