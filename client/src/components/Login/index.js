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
            window.location = "/";
        } catch (error) {
            let err = null;
            !error.message ? err = { "message": error } : err = error;
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
                    <h4 className="text-center text-white">Login</h4>

                    <div className="form-group">
                        <label className="font-weight-bold text-white">Username:</label><br />
                        <input id="username" onChange={this.handleInputChange} type="text" name="username" id="username" className="form-control" value={this.state.username} />
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold text-white">Password:</label><br />
                        <input id="password" onChange={this.handleInputChange} type="password" name="password" id="password" className="form-control" value={this.state.password} />
                    </div>
                    <FormErrors className="error-font" formerrors={this.state.errors} />
                    <div className="form-group mx-auto text-center">
                        <button type="submit" name="submit" className="font-weight-bold btn-login btn btn-info text-white">Login</button>
                    </div>
                    <div id="register-link" className="text-center">
                        <small><a href="/forgotpassword" className="text-info text-white font-weight-bold ">Forgot Password </a></small>
                    </div>
                    <div id="register-link" className="text-center">
                        <small><a href="/signup" className="text-info font-weight-bold  text-white">Register</a></small>
                    </div>
                </form>
            </>
        )
    }
}
