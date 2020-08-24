import React, { Component } from 'react'
import { Auth } from "aws-amplify";

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
        // validate for correct password and username

        this.setState({ isLoading: true });

        const { username, password } = this.state;
        try {
            const newUser = await Auth.signIn({
                username,
                password,
            });
            this.setState({ newUser })

            console.log(newUser);
            //redirect user to home page 
            window.location = "/";
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <>
                <div className="container mt-5">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6 border mt-2 shadow-lg p-3 mb-5 bg-white rounded">
                            <div className="col-md-12">
                                <form className="form" onSubmit={this.handleFormSubmit} >
                                    <h3 className="text-center ">Login</h3>
                                    <div className="form-group">
                                        <label className="font-weight-bold">Username:</label><br />
                                        <input onChange={this.handleInputChange} type="text" name="username" id="username" className="form-control" value={this.state.username} required />
                                    </div>
                                    <div className="form-group">
                                        <label className="font-weight-bold">Password:</label><br />
                                        <input onChange={this.handleInputChange} type="password" name="password" id="password" className="form-control" value={this.state.password} required />
                                    </div>
                                    <div className="form-group mx-auto text-center">
                                        <button type="submit" name="submit" className="btn btn-info btn-lg">Login</button>
                                    </div>
                                    <div id="register-link" className="text-center">
                                        <a href="/forgotpassword" className="text-info">Forgot Password</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
