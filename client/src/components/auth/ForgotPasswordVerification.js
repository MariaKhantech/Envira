import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

class ForgotPasswordVerification extends Component {
  state = {
    verificationCode: "",
    email: "",
    newPassword: "",
  };


  handlePasswordVerification = async event => {
    event.preventDefault();

    // Form validation

    // AWS Cognito integration here
    try {
      await Auth.forgotPasswordSubmit(
        this.state.email,
        this.state.verificationCode,
        this.state.newPassword
      );
      this.props.history.push("/changepasswordconfirmation");
    } catch (error) {
      console.log(error);
    }
  };

  handleInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <div id="login">
          <div className="container">
            <h1>Set new password</h1>
            <p>
              Please enter the verification code sent to your email address below,
              your email address and a new password.
          </p>
            <div id="login-row" className="row justify-content-center align-items-center">
              <div id="login-column" className="col-md-6">
                <div id="login-box" className="col-md-12">
                  <form id="login-form" className="form" action="" method="post">
                    <div className="form-group">
                      <label>Verification Code:</label><br />
                      <input onChange={this.handleInputChange} type="text" name="verificationCode" value={this.state.verificationCode} className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>New Password:</label><br />
                      <input onChange={this.handleInputChange} type="password" name="newPassword" value={this.state.newPassword} className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Email:</label><br />
                      <input onChange={this.handleInputChange} type="password" name="email" value={this.state.email} className="form-control" />
                    </div>
                    <div className="form-group">
                      <button onClick={this.handlePasswordVerification} type="submit" className="btn btn-info btn-md" >Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ForgotPasswordVerification;