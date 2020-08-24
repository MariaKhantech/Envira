import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

class ForgotPasswordVerification extends Component {
  state = {
    verificationCode: "",
    email: "",
    newPassword: "",
  };

  handleInputChange = (e) => {
    let name = e.target.name;
    console.log(name);
    let value = e.target.value;
    console.log(value);
    this.setState({
      [name]: value
    })
  }

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
      // this.props.history.push("/changepasswordconfirmation");
      window.location="/changepasswordconfirmation";
    } catch (error) {
      console.log(error);
    }
  };

  
  render() {
    return (
      <>
        <div>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <h1>Set new password</h1>
              <p>
                Please enter the verification code sent to your email address below,
                your email address and a new password.
              </p>
              <div className="col-md-6 border mt-2 shadow-lg p-3 mb-5 bg-white rounded">
                <div className="col-md-12">
                  <form onSubmit={this.handlePasswordVerification}>
                    <div className="form-group">
                      <label className="mt-2 font-weight-bold">Verification Code:</label><br />
                      <input onChange={this.handleInputChange} type="text" name="verificationCode" value={this.state.verificationCode} className="form-control" />
                    </div>
                    <div className="form-group">
                      <label className="font-weight-bold">New Password:</label><br />
                      <input onChange={this.handleInputChange} type="password" name="newPassword" value={this.state.newPassword} className="form-control" />
                    </div>
                    <div className="form-group">
                      <label className="mt-2 font-weight-bold">Email:</label><br />
                      <input onChange={this.handleInputChange} type="password" name="email" value={this.state.email} className="form-control" />
                    </div>
                    <div className="form-group mx-auto text-center ">
                      <button type="submit" className="btn btn-info btn-lg" >Submit</button>
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

export default ForgotPasswordVerification;