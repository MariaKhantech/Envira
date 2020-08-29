import React, { Component } from 'react'
import UpdateProfile from "../components/EditProfile";
import { browserHistory } from 'react-router';

export default class EditProfile extends Component {

    render() {
        
        return (
            <div>
                <UpdateProfile auth={this.props.auth}
                    history={this.props.history}></UpdateProfile>
            </div>
        )
    }
}
