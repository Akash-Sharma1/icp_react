import React, { Component } from 'react'
import SendRequest from './SendRequest';

export default class FormInterview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            interview : {
                id : "",
                startTime : "",
                endTime : "",
                users : [],
                user_ids : []
            },
            users: [],
        }
        this.onchange = this.onchange.bind(this);
        this.handleuserchange = this.handleuserchange.bind(this);
    }
    
    componentDidMount(){
        let RequestObj = new SendRequest()
        if( typeof(this.props.InterviewId) != "undefined" ){
            RequestObj.Send(process.env.REACT_APP_ManageInterviewsAPI+this.props.InterviewId)
            .then(response => { 
                response.data.startTime = response.data.startTime.substr(0,response.data.startTime.length-1);
                response.data.endTime = response.data.endTime.substr(0,response.data.endTime.length-1);
                response.data.user_ids = [];
                response.data.users.map(user => response.data.user_ids.push(user.id));
                this.setState({ interview : response.data}); })
        }
        RequestObj.Send(process.env.REACT_APP_ManageUsersAPI)
        .then(response => { this.setState({ users : response.data}); })
    }
    onchange(e){
        let TempInterview = this.state.interview;
        TempInterview[e.target.name] = e.target.value;
        this.setState({interview : TempInterview})
    }
    handleuserchange(e){
        let arr = {target : {value : [], name : "user_ids"}};
        let target = e.target.selectedOptions;
        for(let i=0;i<target.length;i++)arr.target.value.push(target[i].value)
        this.onchange(arr);  
    }
    

    render() {
        
        return (
            <div className="mainbody">
                <form className="form-group row col-10 ">
                    <label className="col-2 col-form-label expand">Interview Start Time</label>
                    <input className="form-control expandInputboxes" value={this.state.interview.startTime}
                        type="datetime-local" name = "startTime" onChange={this.onchange} />
                        
                    <label className="col-2 col-form-label expand">Interview end Time</label>
                    <input className="form-control expandInputboxes" value={this.state.interview.endTime}
                        type="datetime-local" name = "endTime" onChange={this.onchange} />
                    
                    <label className="col-2 col-form-label expand">Users</label>
                    <select multiple className="form-control" id="user_ids" name="user_ids" onChange={this.handleuserchange} value = {this.state.user_ids}>
                        {this.state.users.map(user => {
                            if(this.state.interview.user_ids.includes(user.id))
                            return <option value={user.id} key={user.id} selected>{user.username}</option>
                            else
                            return <option value={user.id} key={user.id} >{user.username}</option> 
                        })}
                    </select>
                    <br/><br/>

                    <button  type = "button"  className="btn btn-primary right expandFULL100"
                        onClick={() => this.props.Interviewfunction(this.state.interview)}>{this.props.buttonsStatement}</button>
                </form>
            </div>
        )
    }
}
