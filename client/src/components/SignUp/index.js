import React, { Component } from 'react'
import "./style.css";
import { Auth } from "aws-amplify";
import Axios from 'axios';
import { validateAll } from 'indicative/validator'

export default class Register extends Component {

  state = {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    role: "",
    roleTypes: [],
    isLoading: false,
    confirmationCode: "",
    newUser: null,
    errors: "",
    cognitoErrors: ""
  }

  componentDidMount() {
    Axios.get("/api/auth/role") //getting role types from role table 
      .then(
        (response) => {
          this.setState({
            roleTypes: response.data,
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    })
  }


  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { username, email, password } = this.state;
    const data = this.state;
    const rules = {
      username: "required|string",
      email: "required|email",
      password: "required|string|min:8|number|confirmed"
    }
    const messages = {
      required: (field) => `${field} is required`,
      'email.email': "The email is invalid",
      'password.confirmed': "The password and confirm password do not match",
    }
    validateAll(data, rules, messages)
      .then(() => {
        console.log("success")
      }).catch(errors => {
        console.log(errors)
        const formattedErrors = {};
        errors.forEach(errors => formattedErrors[errors.field] = errors.message)
        this.setState(
          { errors: formattedErrors }
        )
        console.log(formattedErrors)
      })
    this.setState({ isLoading: true });
    try {
      const newUser = await Auth.signUp({
        username,
        password,
        attributes: {
          email: email
        }
      });
      this.setState({ newUser })
      this.postNewUser(); //call this function to post data in user model
    } catch (err) {
      console.log(err);
      this.setState({
        errors: "",
        cognitoErrors: err.message
      })
    }

  };

  postNewUser = () => {
    Axios.post("/api/auth/signup", {
      username: this.state.username,
      password: this.state.password,
      role: this.state.role,
      email: this.state.email
    })
      .then((res) => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  handleConfirmationSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    try {
      await Auth.confirmSignUp(this.state.username, this.state.confirmationCode);
      await Auth.signIn(this.state.username, this.state.password);

      // this.props.user.userHasAuthenticated(true);
      // this.props.history.push('/login');
      window.location = "/login"
    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }
  };


  renderConfirmationForm() {
    return (

      <div className="container mt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-7 border mt-2 shadow-lg p-3 mb-5 bg-white rounded">
            <h3 className="font-weight-normal text-center mb-2">Please check your email for the code.</h3>
            <form onSubmit={this.handleConfirmationSubmit}>
              <div className="form-group input-group text-center">
                <label htmlFor="confirmationCode" className="mr-2">Confirmation Code:</label>
                <input name="confirmationCode" type="tel" value={this.state.confirmationCode} onChange={this.handleInputChange} required />
              </div>
              <div className="form-group mx-auto text-center">
                <button type="submit" className="btn btn-primary btn-md">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    );
  }

  renderForm() {
    const mystyle = {
      color: "red",
      display: "block"
    };
    return <>
      <div className="container w-75 register">
        <div className="row">
          <div className="col-md-4 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Welcome</h3>
            <p>You are 30 seconds away from earning your own money!</p>
            <a href="/login" className="text-info" type="submit" className="btn btn-light btn-block rounded-pill">Login</a>
          </div>
          <div className="col-md-8">
            <div className="card cardStyle bg-light">
              <div className="card-body">

                <h4 className="card-title mt-3 text-center">Create Account</h4>
                <form onSubmit={this.handleFormSubmit}>
                  <div style={mystyle}>{this.state.errors.username}</div>
                  <div style={mystyle}>{this.state.cognitoErrors}</div>
                  <div className="form-group input-group">

                    <div className="input-group-prepend">
                      <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                    </div>
                    <input name="username" value={this.state.username} onChange={this.handleInputChange} className="form-control" placeholder="User name" type="text" />

                  </div>
                  <div style={mystyle}>{this.state.errors.email}</div>
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                    </div>
                    <input name="email" value={this.state.email} onChange={this.handleInputChange} className="form-control" placeholder="Email address" type="email" />
                  </div>
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"> <i className="fa fa-building"></i> </span>
                    </div>
                    <select name="role" value={this.state.role} onChange={this.handleInputChange} className="form-control">

                      {this.state.roleTypes.map(role => {
                        return (<option key={role.id} value={role.id}>{role.type}</option>)

                      })}
                    </select>
                  </div>
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                    </div>
                    <input name="password" value={this.state.password} onChange={this.handleInputChange} className="form-control" placeholder="Create password" type="password" />
                    {/* {this.state.errors.password && (<div className="invalid-feedback">test message</div>)} */}
                  </div>
                  <div style={mystyle}>{this.state.errors.password}</div>
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                    </div>
                    <input name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleInputChange} className="form-control" placeholder="Confirm password" type="password" />
                  </div>
                  <div className="form-group mx-auto text-center">
                    <button type="submit" className="btn btn-primary btn-lg"> Create Account  </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  }

  render() {
    return (
      <div className="Signup">{this.state.newUser === null ? this.renderForm() : this.renderConfirmationForm()}</div>
    );
  }
}
