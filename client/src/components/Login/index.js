import React, { Component } from 'react'
import { Auth } from "aws-amplify";
import FormErrors from "../FormErrors";
import Validate from "../../util/FormValidation";

export default class Login extends Component {

    state = {
        username: "",
        password: "",
        errors: {
            cognito: null,
            blankfield: false
        }
    }

    clearErrorState = () => {
        this.setState({
            errors: {
                cognito: null,
                blankfield: false
            }
        });
    };

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
        const { username, password } = this.state;
        try {
            const user = await Auth.signIn({
                username,
                password,
            });
            // this.auth.setAuthStatus(true)
            //redirect user to home page 
            // this.props.history.push('/');
            window.location = "/";
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
    }

    render() {
        return (
            <>
                <form className="form" onSubmit={this.handleFormSubmit} >
                    <h3 className="text-center ">Login</h3>

                    <div className="form-group">
                        <label className="font-weight-bold">Username:</label><br />
                        <input id="username" onChange={this.handleInputChange} type="text" name="username" id="username" className="form-control" value={this.state.username} />
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold">Password:</label><br />
                        <input id="password" onChange={this.handleInputChange} type="password" name="password" id="password" className="form-control" value={this.state.password} />
                    </div>
                    <FormErrors formerrors={this.state.errors} />
                    <div className="form-group mx-auto text-center">
                        <button type="submit" name="submit" className="btn btn-info btn-lg">Login</button>
                    </div>
                    <div id="register-link" className="text-center">
                        <small><a href="/forgotpassword" className="text-info">Forgot Password</a></small>
                    </div>
                    <div id="register-link" className="text-center">
                        <small><a href="/signup" className="text-info">Register</a></small>
                    </div>
                </form>
            </>
        )
    }
}
