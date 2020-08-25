import React, { Component } from 'react'
import "./style.css";
import { Auth } from "aws-amplify";
import Axios from 'axios';

export default class Register extends Component {

  state = {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    role: "",
    id: null,
    roleTypes: [],
    isLoading: false,
    signedUp: false,
    confirmationCode: "",
    newUser: null
  }

  componentDidMount() {
    Axios.get("/api/auth/role") //getting role types from role table 
      .then(
        (response) => {
          console.log(response)
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
    let newUser = {
      username: this.state.username,
      password: this.state.password,
      role: this.state.role,
      email: this.state.email
    }
    const { username, email, password } = this.state;
    //check for form validation
    // password match
    if (this.state.password !== this.state.confirmPassword) {
      
      alert("password don't match")
    } else {
      this.postNewUser(newUser); //call this function to post data in user model

      this.setState({ isLoading: true });

      console.log(this.state.username)
      try {
        const newUser = await Auth.signUp({
          username,
          password,
          attributes: {
            email: email
          }
        });
        console.log(username)
        this.setState({ newUser })
        console.log(newUser);
      } catch (err) {
        console.log(err);
      }
    }

  };

  postNewUser = ()=> {
    // console.log(newUser)
    Axios.post("/api/auth/signup", {
      username: this.state.username,
      password: this.state.password,
      role:this.state.role,
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
      this.props.history.push('/login');
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
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                    </div>
                    <input name="username" value={this.state.username} onChange={this.handleInputChange} className="form-control" placeholder="User name" type="text" required />
                  </div>
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                    </div>
                    <input name="email" value={this.state.email} onChange={this.handleInputChange} className="form-control" placeholder="Email address" type="email" required />
                  </div>
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"> <i className="fa fa-building"></i> </span>
                    </div>
                    <select name="role" value={this.state.role} onChange={this.handleInputChange} className="form-control" required>

                      {this.state.roleTypes.map(role => {
                        return (<option key={role.id} value={role.type}>{role.type}</option>)

                      })}
                    </select>
                  </div>
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                    </div>
                    <input name="password" value={this.state.password} onChange={this.handleInputChange} className="form-control" placeholder="Create password" type="password" required />
                  </div>
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                    </div>
                    <input name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleInputChange} className="form-control" placeholder="Confirm password" type="password" required />
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
