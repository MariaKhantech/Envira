import React, { Component } from 'react'
import UpdateProfile from "../components/EditUserProfile";


export default class EditProfile extends Component {

    render() {
        return (
            <>
                <UpdateProfile auth={this.props.auth}
                    history={this.props.history}></UpdateProfile>
            </>
        )
    }
}
