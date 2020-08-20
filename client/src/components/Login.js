import React, { Component } from 'react'
import { Auth } from "aws-amplify";
import "./login.css"

export default class Login extends Component {

    state = {
        userName: "",
        password: "",
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

        const { userName, password } = this.state;
        try {
            const newUser = await Auth.signIn({
                userName,
                password,
            });
            this.setState({ newUser })
            console.log(newUser);
        } catch (err) {
            console.log(err);
        }
    }



    render() {
        return (
            <div>
                <div id="login">
                    <h3 className="text-center text-white pt-5">Login form</h3>
                    <div className="container">
                        <div id="login-row" className="row justify-content-center align-items-center">
                            <div id="login-column" className="col-md-6">
                                <div id="login-box" className="col-md-12">
                                    <form id="login-form" className="form" action="" method="post">
                                        <h3 className="text-center text-info">Login</h3>
                                        <div className="form-group">
                                            <label htmlFor="userName" className="text-info">Username:</label><br />
                                            <input onChange={this.handleInputChange} type="text" name="userName" id="username" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="text-info">Password:</label><br />
                                            <input onChange={this.handleInputChange} type="password" name="password" id="password" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="remember-me" className="text-info">

                                                <span><input id="remember-me" name="remember-me" type="checkbox" />
                                                </span></label><br />
                                            <input onClick={this.handleFormSubmit} type="submit" name="submit" className="btn btn-info btn-md" value="submit" />
                                        </div>
                                        <div id="register-link" className="text-right">
                                            <a href="#" className="text-info">Register here</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
