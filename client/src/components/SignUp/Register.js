import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import "../SignUp/signUp.css";
import { Auth } from "aws-amplify";

export default class Register extends Component {

  state = {
    isLoading: false,
    username: "",
    password: "",
    email: "",
    signedUp: false,
    confirmationCode: "",
    newUser: null
  }

  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0;
  }


  handleInputChange = (e) => {
    let name = e.target.name;
    console.log(name);
    let value = e.target.value;
    console.log(value);
    this.setState({
      [name]: value
    })
  }


  handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("hello")
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
      console.log(newUser);
    } catch (err) {
      console.log(err);
    }
  }

  handleConfirmationSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    try {
      await Auth.confirmSignUp(this.state.username, this.state.confirmationCode);
      await Auth.signIn(this.state.username, this.state.password);

      // this.props.userHasAuthenticated(true);
      this.props.history.push('/login');
    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }
  };


  renderConfirmationForm() {
    return (
      <form onSubmit={this.handleConfirmationSubmit}>
        <Form.Group>
          <Form.Label htmlFor="confirmationCode">Confirmation Code</Form.Label>
          <Form.Control name="confirmationCode" type="tel" value={this.state.confirmationCode} onChange={this.handleInputChange} />
          <h1>Please check your email for the code.</h1>
        </Form.Group>
        {/* <Button
          disabled={!this.validateConfirmationForm()}
          type="submit"
          isLoading={this.state.isLoading}

        /> */}
        <Button variant="primary" type="submit">
          Submit
    </Button>
      </form>
    );
  }

  renderForm() {
    return <>
      <div className="container register">
        <div className="row">
          <div className="col-md-4 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Welcome</h3>
            <p>You are 30 seconds away from earning your own money!</p>
            <input type="submit" name="" value="Login" /><br />
          </div>

          <div className="col-md-8">
            <div className="card bg-light">
              <div className="card-body mx-auto">
                <h4 className="card-title mt-3 text-center">Create Account</h4>

                <form>
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                    </div>
                    <input  name="" className="form-control" placeholder="User name" type="text" />
                  </div>
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                    </div>
                    <input name="" className="form-control" placeholder="Email address" type="email" />
                  </div>
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"> <i className="fa fa-building"></i> </span>
                    </div>
                    <select className="form-control">
                      <option selected=""> Select registration type</option>
                      <option>User</option>
                      <option>Company</option>
                      <option>Non-profit</option>
                    </select>
                  </div>
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                    </div>
                    <input className="form-control" placeholder="Create password" type="password" />
                  </div>
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                    </div>
                    <input className="form-control" placeholder="Repeat password" type="password" />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
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
