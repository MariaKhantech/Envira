import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import "../App.css";
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
      <h1 className="text-center mb-2">Registration Form</h1>
      <Form onSubmit={this.handleFormSubmit} className="signupForm">
        <Form.Group >
          <Form.Label htmlFor="username">User Name</Form.Label>
          <Form.Control name="username" type="text" placeholder="User name" onChange={this.handleInputChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">Email Address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" onChange={this.handleInputChange} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>
        <Form.Group >
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" onChange={this.handleInputChange} />
        </Form.Group>
        <Form.Group>
          <Form.Text className="text-danger">
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
    </Button>

      </Form>
    </>
  }

  render() {
    return (
      <div className="Signup">{this.state.newUser === null ? this.renderForm() : this.renderConfirmationForm()}</div>
    );
  }
}
