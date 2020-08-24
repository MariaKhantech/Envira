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

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="font-weight-light">Forgot your password?</h2>
              <p>Not to worry. Just enter your email address below and we'll send you an instruction email for recovery.</p>

              <form onSubmit={this.handleForgotPassword} className="mt-3">

                <input name="email" value={this.state.email}
                  onChange={this.handleInputChange} className="form-control form-control-lg" type="email" placeholder="Your email address" />

                <div className="text-right my-3">
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
