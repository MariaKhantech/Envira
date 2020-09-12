import React, { Component } from "react";
import "./style.css"

export default class ChangePasswordConfirmation extends Component {
  render() {
    return (

      <div className="container mt-5">
        <div className="row text-center m-auto">
          <div className="col-md-12">
            <h3>Change Password</h3>
            <p>Your password has been successfully updated!</p>
          </div>
        </div>
      </div>
    );
  }
}
