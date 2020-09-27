import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

import UserRow from './UserRow';
import SendRequest from './SendRequest';

export default class Users extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            users : [],
            isloading : false
        }
    }

    componentDidMount(){
        this.setState({isloading : true});
        let RequestObj = new SendRequest()
        console.log(process.env.REACT_APP_ManageInterviewsAPI);
        RequestObj.Send(process.env.REACT_APP_ManageUsersAPI)
        .then(response => { this.setState({ users : response.data , isloading : false}); })
    }
    
    render() {
        var loading_message = "Loading...please wait"
        if (this.state.isloading == false) {
            loading_message = "";
        }
        return (
            <div>
                <h1>Admin panel : Upcoming Interviews</h1><br />

                <NavLink to="/users/new">
                    <button className="btn btn-primary right expandFULL100" >Add new user</button>
                </NavLink><br />
                
                {loading_message}

                <table>
                    <thead>
                        <tr>
                            <th>UserId</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Resume link</th>
                            <th>Show User</th>
                            <th>Want to edit?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user =>
                            < UserRow key={user.id} user={user} />)}
                    </tbody>
                </table>
                <br />
            </div>
        )
    }
}
