import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import "../App.css";
import { Auth } from "aws-amplify";
import "./test.css"
export default class Register extends Component {

    state = {
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        signedUp: false,
        confirmationCode: "",
        newUser: null,
        isLoading: false,
        type: "company"
    }

    validateConfirmationForm() {
        return this.state.confirmationCode.length > 0;
    }

    handleToggle = (e) => {
        if (this.state.type === "company") {
            this.setState({
                type: "user"
            })
        }
        else {
            this.setState({
                type: "company"
            })
        }
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

        return (
            <>
                <div className="container register">
                    <div className="row">
                        <div className="col-md-3 register-left">
                            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                            <h3>Welcome</h3>
                            <p>You are 30 seconds away from earning your own money!</p>
                            <input type="submit" name="" value="Login" /><br />
                        </div>
                        <div className="col-md-9 register-right">

                            <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a onClick={this.handleToggle} className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                        aria-controls="home" aria-selected="true">Company</a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={this.handleToggle} className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                                        aria-controls="profile" aria-selected="false">User</a>
                                </li>
                            </ul>

                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                                    <h3 className="register-heading">Register as a Company</h3>
                                    <div className="row register-form">

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="companyName" className="font-italic font-weight-bold">Company Name:</label>
                                                <input name="companyName" onChange={this.handleInputChange} type="text" className="form-control" placeholder="First Name *" value="" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="companyEmail" className="font-italic font-weight-bold">Company Email:</label>
                                                <input name="companyEmail" onChange={this.handleInputChange} type="email" className="form-control" placeholder="Your Email *" value="" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="address" className="font-italic font-weight-bold">Address:</label>
                                                <textarea name="address" onChange={this.handleInputChange} type="textarea" className="form-control" placeholder="Company Address *" />
                                            </div>

                                            <div className="form-group">
                                                <div className="maxl">
                                                    <label className="font-italic font-weight-bold radio inline">
                                                        <input onChange={this.handleInputChange} type="radio" name="gender" value="male" checked />
                                                        <span> Non-Profit </span>
                                                    </label>
                                                    <label className="ml-2 font-italic font-weight-bold radio inline">
                                                        <input onChange={this.handleInputChange} type="radio" name="gender" value="female" />
                                                        <span>Regular</span>
                                                    </label>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="phoneNumber" className="font-italic font-weight-bold">Phone Number:</label>
                                                <input name="phoneNumber" onChange={this.handleInputChange} type="text" minLength="10" maxLength="10" name="txtEmpPhone"
                                                    className="form-control" placeholder="Your Phone *" value="" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password" className="font-italic font-weight-bold">Password:</label>
                                                <input name="password" onChange={this.handleInputChange} type="password" className="form-control" placeholder="Password *" value="" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="confirmPassword" className="font-italic font-weight-bold">Confirm Password:</label>
                                                <input name="confirmPassword" onChange={this.handleInputChange} type="password" className="form-control" placeholder="Confirm Password *"
                                                    value="" />
                                            </div>
                                            <input onClick={this.handleFormSubmit} type="submit" className="btnRegister" value="Register" />
                                        </div>

                                    </div>



                                </div>

                                <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <h3 className="register-heading">Register as a User</h3>
                                    <div className="row register-form">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="userName" className="font-italic font-weight-bold">User Name:</label>
                                                <input onChange={this.handleInputChange} name="userName" type="text" className="form-control" placeholder="User Name *" value="" required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="firstName" className="font-italic font-weight-bold">First Name:</label>
                                                <input onChange={this.handleInputChange} name="firstName" type="text" className="form-control" placeholder="First Name *" value="" required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="lastName" className="font-italic font-weight-bold">Last Name:</label>
                                                <input onChange={this.handleInputChange} name="lastName" type="text" className="form-control" placeholder="Last Name *" value="" required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email" className="font-italic font-weight-bold">Email:</label>
                                                <input onChange={this.handleInputChange} name="email" type="email" className="form-control" placeholder="Email *" value="" required />
                                            </div>


                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="password" className="font-italic font-weight-bold">Password:</label>
                                                <input name="password" onChange={this.handleInputChange} type="password" className="form-control" placeholder="Password *" value="" required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="confirmPassword" className="font-italic font-weight-bold">Confirm Password:</label>
                                                <input name="confirmPassword" onChange={this.handleInputChange} type="password" className="form-control" placeholder="Confirm Password *"
                                                    value="" required />
                                            </div>

                                            <input onClick={this.handleFormSubmit} type="submit" className="btnRegister" value="Register" />
                                        </div>
                                    </div>
                                </div>
                            </div>





                        </div>




                    </div>
                </div>


            </>

        )

    }

    render() {
        return (
            <div className="Signup">{this.state.newUser === null ? this.renderForm() : this.renderConfirmationForm()}</div>
        );
    }
}
