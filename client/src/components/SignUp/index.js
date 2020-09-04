import React, { Component } from 'react'
import "./style.css";
import { Auth } from "aws-amplify";
import Axios from 'axios';
import FormErrors from "../FormErrors";
import Validate from "../../util/FormValidation";

export default class Register extends Component {

  state = {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    role: "select",
    isLoading: false,
    confirmationCode: "",
    newUser: null,
    errors: {
      cognito: null,
      blankfield: false,
      passwordmatch: false
    }
  }

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false,
        passwordmatch: false
      }
    });
  }


  // async componentDidMount() {
  //   try {
  //     Axios.get("/api/auth/role") //getting role types from role table 
  //       .then(
  //         (response) => {
  //           this.setState({
  //             roleTypes: response.data,
  //           });
  //         },
  //         (error) => {
  //           this.setState({
  //             error
  //           });
  //         }
  //       )
  //   }
  //   catch (error) {

  //     console.log(error);

  //   }
  // }

  handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    })
    document.getElementById(e.target.id).classList.remove("is-invalid");
  }


  handleFormSubmit = async (event) => {
    event.preventDefault();

    // Form validation
    this.clearErrorState();
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error }
      });
    }

    // AWS Cognito integration here
    this.setState({ isLoading: true });
    const { username, email, password } = this.state;
    try {
      const newUser = await Auth.signUp({
        username,
        password,
        attributes: {
          email: email
        }
      });
      this.setState({ newUser })
      //call this function to post data in user model
      this.postNewUser();
    } catch (error) {
      let err = null;
      !error.message ? err = { "message": error } : err = error;
      console.log(err);
      this.setState({
        errors: {
          ...this.state.errors,
          cognito: err
        }
      });
    }

  };

  postNewUser = () => {
    debugger
    console.log(this.state.role)
    Axios.post("/api/auth/signup", {
      username: this.state.username,
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
      window.location = "/"
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
                <input id="confirmationcode" name="confirmationCode" type="tel" value={this.state.confirmationCode} onChange={this.handleInputChange} required />
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
    return <>
      <div className="container w-50 register">
        <div className="row text-center justify-content-center">
          <div className="col-md-10">
            <div className="card cardStyle bg-light">
              <div className="card-body">
                <h4 className="card-title mt-3 text-center">Create Account</h4>
                <FormErrors formerrors={this.state.errors} />

                <form onSubmit={this.handleFormSubmit}>
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                    </div>
                    <input id="username" name="username" value={this.state.username} onChange={this.handleInputChange} className="form-control" placeholder="User name" type="text" />
                  </div>

                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                    </div>
                    <input id="email" name="email" value={this.state.email} onChange={this.handleInputChange} className="form-control" placeholder="Email address" type="email" />
                  </div>

                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"> <i className="fa fa-building"></i> </span>
                    </div>
                    <select id="role" name="role" value={this.state.role} onChange={this.handleInputChange} className="form-control">
                      {/* {this.state.roleTypes.map(role => {
                        return (<option defaultValue="User" key={role.id} value={role.id}>{role.type}</option>)
                      })} */}
                      <option value="select">Select a registration type</option>
                      <option value="1">User</option>
                      <option value="2">Company</option>
                      <option value="3">Non-Profit</option>
                    </select>
                  </div>

                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                    </div>
                    <input id="password" name="password" value={this.state.password} onChange={this.handleInputChange} className="form-control" placeholder="Create password" type="password" />
                  </div>

                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                    </div>
                    <input id="confirmpassword" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleInputChange} className="form-control" placeholder="Confirm password" type="password" />
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
