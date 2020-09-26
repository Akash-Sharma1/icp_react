import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import SendRequest from './SendRequest';
import UserRow from './UserRow';

import { Redirect } from "react-router-dom";

export default class ShowInterview extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            interview : {users:[]},
            isloading: false,
            erroroccured: false
        }
    }
    
    deleteinterview(){
        
    }

    componentDidMount(){
        this.setState({isloading : true});
        let RequestObj = new SendRequest()
        RequestObj.Send(process.env.REACT_APP_ManageInterviewsAPI+this.props.match.params.id)
        .then(response => { this.setState({ interview : response.data , isloading : false}); })
        .catch(err => {this.setState({erroroccured : true})})
    }
    
    render() {
        var loading_message = "Loading...please wait"
        if (this.state.isloading == false) {
            loading_message = "";
        }
        if (this.state.erroroccured) return <Redirect to="/" />

        return (
            <div className="mainbody ">
                <h1>interview Details</h1>
                {loading_message}
                <p><strong>InterviewId: </strong>{this.state.interview.id}</p>
                <p><strong>Start Time: </strong>{this.state.interview.startTime}</p>
                <p><strong>End Time: </strong>{this.state.interview.endTime}</p>
                <p><strong>Users: </strong></p>
                <table>
                    {this.state.interview.users.map(user => 
                            <UserRow key = {user.id} user = {user}/>
                    )}
                </table>
                <p><NavLink to={"interviews/" + this.state.interview.id + "/edit"}>Edit interview</NavLink></p>
                <p><div className="clickable" onClick={() => { this.deleteinterview(); }}>Delete interview</div></p>
            </div >
        )
    }
}
