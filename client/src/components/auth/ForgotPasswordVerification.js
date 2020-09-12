import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import "./style.css"

export default class ForgotPasswordVerification extends Component {
  state = {
    verificationCode: "",
    email: "",
    newPassword: "",
    cognitoErrors: "",
  };

  handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  handlePasswordVerification = async event => {
    event.preventDefault();
    // AWS Cognito integration for new password setup
    try {
      await Auth.forgotPasswordSubmit(
        this.state.email,
        this.state.verificationCode,
        this.state.newPassword
      );
      window.location = "/changepasswordconfirmation";
    } catch (error) {
      this.setState({
        cognitoErrors: error.message
      })
    }
  };


  render() {
    const myStyle = {
      color: "red",
      display: "block",
      fontSize: "15px"
    };
    return (
      <>
        <div>
          <div className="container mt-5 password-width ">
            <div className="row justify-content-center align-items-center">

              <div className="col-md-6 mt-2 shadow-lg p-3 mb-5 bg-white rounded border-style-signup">
                <h3 className="text-center">Set new password</h3>
                <p className="password-text">
                  Please enter the verification code sent to your email address below,
                  your email address and a new password.
                </p>
                <div className="col-md-12">
                  <form onSubmit={this.handlePasswordVerification}>
                    <div className="form-group">
                      <label className="mt-2 font-weight-bold">Verification Code:</label><br />
                      <input onChange={this.handleInputChange} placeholder="Please enter verification code" type="text" name="verificationCode" value={this.state.verificationCode} className="form-control" />
                    </div>
                    <div className="form-group">
                      <label className="font-weight-bold">New Password:</label><br />
                      <input onChange={this.handleInputChange} placeholder="Please enter password" type="password" name="newPassword" value={this.state.newPassword} className="form-control" />
                    </div>
                    <div className="form-group">
                      <label className="mt-2 font-weight-bold">User Name:</label><br />
                      <input onChange={this.handleInputChange} placeholder="Please enter user name" type="text" name="email" value={this.state.email} className="form-control" />
                    </div>
                    <div style={myStyle}>{this.state.cognitoErrors}</div>
                    <div className="form-group mx-auto text-center mt-2">
                      <button type="submit" className="btn create-btn btn-lg" >Submit</button>
                    </div>
                    <div id="register-link" className="text-center">
                      <a href="/forgotpassword" className="text-info">Request for a new verification code</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
