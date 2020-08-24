import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import "./style.css"

export default class ForgotPassword extends Component {
  state = {
    email: "",
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


  handleForgotPassword = async event => {
    event.preventDefault();

    // Form validation
    // AWS Cognito integration here
    console.log(this.state.email)
    try {
      await Auth.forgotPassword(this.state.email);
      window.location = '/forgotpasswordverification';
      // this.props.history.push('/forgotpasswordverification');
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <div className="container mt-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-7 border mt-2 shadow-lg p-3 mb-5 bg-white rounded">
              <h2 className="font-weight-normal text-center">Forgot your password?</h2>
              <p className="font-italic">Not to worry. Just enter your email address below and we'll send you an instruction email for recovery.</p>
              <form onSubmit={this.handleForgotPassword} className="mt-3">
                <div className="form-group">
                  <input name="email" value={this.state.email}
                    onChange={this.handleInputChange} className="form-control form-control-lg" type="email" placeholder="Your email address" required/>
                </div>
                <div className="form-group mx-auto text-center">
                  <button type="submit" className="btn btn-lg btn-success">Reset Password</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </>
    )
  }
}
