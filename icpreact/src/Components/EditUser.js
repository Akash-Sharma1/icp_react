import React, { Component } from 'react'

import UserForm from './UserForm'
import SendRequest from './SendRequest'

import { Redirect } from "react-router-dom";

export default class EditUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isedited : false
        }
        this.edituser = this.edituser.bind(this);
    }

    edituser(userData){
        let RequestObj = new SendRequest()
        RequestObj.Send(process.env.REACT_APP_ManageUsersAPI+this.props.match.params.id, 'PATCH', userData)
        .then(response => {alert("edit user with id = "+response.data.id); this.setState({isedited : true})} )
    }
    
    render() {
        if (this.state.isedited) return <Redirect to="/users" />
        return (
            <div>
                <UserForm userfunction = {this.edituser} userId = {this.props.match.params.id} buttonsStatement = "Edit user"/>
            </div>
        )
    }
}
