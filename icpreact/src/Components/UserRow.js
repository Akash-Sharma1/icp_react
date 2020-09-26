import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class UserRow extends Component {

    deleteuser(){
        
    }
    
    render() {
        return (
            <tr className="mainbody ">
                <td>{this.props.user.id}</td>
                <td>{this.props.user.username}</td>
                <td>{this.props.user.email}</td>
                <td><a href={"http://localhost:3000/"+this.props.user.resume} target=''>Resume link</a></td>
                <td><NavLink to={"users/" + this.props.user.id + "/edit"}>Edit user</NavLink></td>
                <td><div className="clickable" onClick={() => { this.deleteuser(); }}>Delete user</div></td>
            </tr >
        )
    }
}
