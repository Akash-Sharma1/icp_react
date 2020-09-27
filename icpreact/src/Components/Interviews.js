import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

import InterviewRow from './InterviewRow';
import SendRequest from './SendRequest';

export default class Interviews extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Interviews : [],
            isloading : false
        }
    }
    
    componentDidMount(){
        this.setState({isloading : true});
        let RequestObj = new SendRequest()
        console.log(process.env.REACT_APP_ManageInterviewsAPI);
        RequestObj.Send(process.env.REACT_APP_ManageInterviewsAPI)
        .then(response => { this.setState({ Interviews : response.data , isloading : false}); })
    
    }
    render() {
        var loading_message = "Loading...please wait"
        if (this.state.isloading == false) {
            loading_message = "";
        }
        return (
            <div>
                <h1>Admin panel : Upcoming Interviews</h1><br />

                <NavLink to="/interviews/new">
                    <button className="btn btn-primary right expandFULL100" >Schedule new interview</button>
                </NavLink><br />
                
                {loading_message}

                <table>
                    <thead>
                        <tr>
                            <th>InterviewId</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Users</th>
                            <th>Show interview</th>
                            <th>Want to edit?</th>
                            <th>Send Notification</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Interviews.map(interview =>
                            < InterviewRow key={interview.id} Interview={interview} />)}
                    </tbody>
                </table>
                <br />
            </div>
        )
    }
}

