import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import FormErrors from "../FormErrors";
import Validate from "../../util/FormValidation";

export default class ForgotPassword extends Component {
  state = {
    email: "",
    errors: {
      blankfield: false
    }
  };

  clearErrorState = () => {
    this.setState({
      errors: {
        blankfield: false,
      }
    });
  }

  handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    })
    document.getElementById(e.target.id).classList.remove("is-invalid");
  }

  handleForgotPassword = async event => {
    event.preventDefault();

    // check Form validation
    this.clearErrorState();
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error }
      });
    }
    else {
      // cognito integration for forgot password
      try {
        await Auth.forgotPassword(this.state.email);
        window.location = '/forgotpasswordverification';
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    return (
      <>
        <div className="container mt-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-7  mt-2 shadow-lg p-3 mb-5 bg-white border-style-signup rounded">
              <h2 className="font-weight-normal text-center">Forgot your password?</h2>
              <p className="font-italic">Not to worry. Just enter your email address below and we'll send you an instruction email for recovery.</p>
              <FormErrors formerrors={this.state.errors} />
              <form onSubmit={this.handleForgotPassword} className="mt-3">
                <div className="form-group">
                  <input id="email" name="email" value={this.state.email}
                    onChange={this.handleInputChange} className="form-control form-control-lg" type="email" placeholder="Your email address" />
                </div>
                <div className="form-group mx-auto text-center">
                  <button type="submit" className="btn btn-lg create-btn font-weight-bold">Reset Password</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}
