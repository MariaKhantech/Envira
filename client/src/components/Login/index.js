import React, { Component } from 'react'
import { Auth } from "aws-amplify";
import "../Login/style.css"

export default class Login extends Component {

    state = {
        username: "",
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
        //form validation
        console.log("hello")
        this.setState({ isLoading: true });

        const { username, password } = this.state;
        try {
            const newUser = await Auth.signIn({
                username,
                password,
            });
            this.setState({ newUser })
            window.location="/";
            console.log(newUser);
         //redirect user to home page   
        } catch (err) {
            console.log(err);
        }
    }



    render() {
        return (
            <>
                <div id="login">
                    <h3 className="text-center text-white pt-5">Login form</h3>
                    <div className="container">
                        <div id="login-row" className="row justify-content-center align-items-center">
                            <div id="login-column" className="col-md-12">
                                <div id="login-box" className="col-md-12">
                                    <form id="login-form" className="form" >
                                        <h3 className="text-center text-info">Login</h3>
                                        <div className="form-group">
                                            <label htmlFor="username" className="text-info">Username:</label><br />
                                            <input onChange={this.handleInputChange} type="text" name="username" id="username" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="text-info">Password:</label><br />
                                            <input onChange={this.handleInputChange} type="password" name="password" id="password" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <button onClick={this.handleFormSubmit} type="submit" name="submit" className="btn btn-info btn-md">Submit</button>
                                        </div>
                                        <div id="register-link" className="text-right">
                                            <a href="/forgotpassword" className="text-info">Forgot Password</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
