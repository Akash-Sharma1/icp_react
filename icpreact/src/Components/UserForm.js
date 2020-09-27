import React, { Component } from 'react'
import SendRequest from './SendRequest';

export default class UserForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user : {
                id : "",
                resume : "",
                username : "",
                email : "",
                usertype : "",
            }
        }
        this.onchange = this.onchange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(e){
        let form = document.getElementById("userform");
        let formdata = new FormData(form);
        // console.log(form);
        // console.log(...formdata);
        this.props.userfunction(formdata);
    }
    
    componentDidMount(){
        let RequestObj = new SendRequest()
        if( typeof(this.props.userId) != "undefined" ){
            RequestObj.Send(process.env.REACT_APP_ManageUsersAPI+this.props.userId)
            .then(response => this.setState({ user : response.data}))
        }
    }

    onchange(e){
        let Tempuser = this.state.user;
        Tempuser[e.target.name] = e.target.value;
        this.setState({user : Tempuser})
    }

    render() {
        
        return (
            <div className="mainbody" >
                <form className="form-group row col-10 " id="userform">
                    <label className="col-2 col-form-label expand">username</label>
                    <input className="form-control expandInputboxes" value={this.state.user.username}
                        type="text" name = "username" onChange={this.onchange} />
                        
                    <label className="col-2 col-form-label expand" type="email">email</label>
                    <input className="form-control expandInputboxes" value={this.state.user.email}
                             name = "email" onChange={this.onchange} />
                    
                    <label className="col-2 col-form-label expand">Users</label>
                    <select className="form-control" id="usertype" name="usertype" onChange={this.onchange} 
                    value = {this.state.user.usertype}>
                        <option value="Admin">Admin</option>
                        <option value="Participant">Participant</option>
                    </select>
                    
                    <label className="col-2 col-form-label expand">Resume</label>
                    <input type="file" class="form-control-file" id="resume" name="resume"></input>
                    <br/><br/>

                    <button  type = "button"  className="btn btn-primary right expandFULL100"
                        onClick={this.submitHandler}>{this.props.buttonsStatement}</button>
                </form>
            </div>
        )
    }
}
