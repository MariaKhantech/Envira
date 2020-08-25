import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

export default class ChangePassword extends Component {

  state = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  }


  handleSubmit = async event => {
    event.preventDefault();

    // Form validation

    // AWS Cognito integration here
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log(user);
      console.log(Auth);
      await Auth.changePassword(
        user,
        this.state.oldPassword,
        this.state.newPassword
      );
      this.props.history.push("/changepasswordconfirmation");
    } catch (err) {
      console.log(err);
    }
  };

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }


  render() {
    return (
      <>
        <section className="section auth">
          <div className="container">
            <h1>Change Password</h1>

            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="password"
                    id="oldpassword"
                    placeholder="Old password"
                    value={this.state.oldPassword}
                    onChange={this.onInputChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="password"
                    id="newpassword"
                    placeholder="New password"
                    value={this.state.newPassword}
                    onChange={this.onInputChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="password"
                    id="confirmpassword"
                    placeholder="Confirm password"
                    value={this.state.confirmPassword}
                    onChange={this.onInputChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <a href="/forgotpassword">Forgot password?</a>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <button className="button is-success">
                    Change password
                </button>
                </p>
              </div>
            </form>
          </div>
        </section>
      </>
    )
  }

}