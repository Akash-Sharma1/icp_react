import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SendRequest from './SendRequest';

export default class ShowUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            user : {},
            isdeleted: false,
            isloading: false
        }
    }
    
    deleteuser(){
        let RequestObj = new SendRequest()
        RequestObj.Send(process.env.REACT_APP_ManageUsersAPI+this.state.user.id, 'DELETE')
        .then(response => {alert("Delted"); this.setState({isdeleted : true})} )        
    }

    componentDidMount(){
        this.setState({isloading : true});
        let RequestObj = new SendRequest()
        RequestObj.Send(process.env.REACT_APP_ManageUsersAPI+this.props.match.params.id)
        .then(response => { this.setState({ user : response.data , isloading : false}); })
    }
    
    render() {
        if (this.state.isdeleted) return <Redirect to="/" />
        var loading_message = "Loading...please wait"
        if (this.state.isloading == false) {
            loading_message = "";
        }
        return (
            <div className="mainbody ">
                <h1>User Details</h1>
                {loading_message}
                <p><strong>UserId: </strong>{this.state.user.id}</p>
                <p><strong>Username: </strong>{this.state.user.username}</p>
                <p><strong>User Email: </strong>{this.state.user.email}</p>
                <p><strong>User Resume: </strong><a href={"http://localhost:3000/"+this.state.user.resume} target=''>Resume link</a></p>
                <p><NavLink to={"users/" + this.state.user.id + "/edit"}>Edit user</NavLink></p>
                <p><div className="clickable" onClick={() => { this.deleteuser(); }}>Delete user</div></p>
            </div >
        )
    }
}
