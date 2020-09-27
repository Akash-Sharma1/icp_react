import React, { Component } from 'react'

import UserForm from './UserForm'
import SendRequest from './SendRequest'

import { Redirect } from "react-router-dom";

export default class NewUser extends Component {
    constructor(props) {
        super(props)
        this.adduser = this.adduser.bind(this);
        this.state = {
            isadded : false
        }
    }

    adduser(userData){
        console.log(userData);
        let RequestObj = new SendRequest()
        RequestObj.Send(process.env.REACT_APP_ManageUsersAPI, 'POST', userData)
        .then(response => {alert("Added with id = "+response.data.id); this.setState({isadded : true})} )
    }
    
    render() {
        if (this.state.isadded) return <Redirect to="/users" />
        return (
            <div>
                <UserForm userfunction = {this.adduser} buttonsStatement = "Add user"/>
            </div>
        )
    }
}
