import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class InterviewRow extends Component {

    deleteInterview(){
        
    }
    sendNotifications(){
        
    }
    render() {
        return (
            <tr className="mainbody ">
                <td>{this.props.Interview.id}</td>
                <td>{this.props.Interview.startTime}</td>
                <td>{this.props.Interview.endTime}</td>
                <td>
                    <select className="form-control marginonTop"
                        onChange={(e) => {
                            e.target.value = this.props.Interview.users.length + " participants";
                    }}>
                        <option>{this.props.Interview.users.length} Users</option>
                        {this.props.Interview.users.map(user => 
                            <option key={user.id}> {user.username} </option>
                        )}
                    </select>
                </td>
                <td><NavLink to={"interviews/" + this.props.Interview.id + "/edit"}>Edit Interview</NavLink></td>
                <td><div className="clickable" onClick={() => { this.deleteInterview(); }}>Delete Interview</div></td>
                <td><div className="clickable" onClick={() => { this.sendNotifications(); }}>Send notifications</div></td>
            </tr >
        )
    }
}
