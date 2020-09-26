import React, { Component } from 'react'

export default class FormInterview extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            interview : {
                users : [],
                user_ids : []
            }
        }
    }
    componentDidMount(){
        if( typeof(this.props.id) == "undefined" )
    }

    render() {
        
        return (
            <div className="mainbody">
                <form className="form-group row col-10 ">
                    <label className="col-2 col-form-label expand">Interview Start Time</label>
                    <input className="form-control expandInputboxes" value={this.state.interview.id}
                        type="datetime-local" name = "id" onChange={this.onchange} />
                </form>
            </div>
        )
    }
}
