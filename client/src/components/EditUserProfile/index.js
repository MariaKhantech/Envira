import React, { Component } from 'react';
import "./updateProfile.css";
import Axios from 'axios';
import { Auth } from 'aws-amplify';
import ProfileImage from "../ProfileImage"
import FormErrors from "../FormErrors";
import Validate from "../../util/FormValidation";

export default class UpdateProfile extends Component {
    state = {
        profile: [],
        firstName: "",
        lastName: "",
        city: "",
        state: "",
        phoneNumber: "",
        occupation: "",
        about: "",
        zipCode: "",
        data: "",
        errors: {
            blankfield: false,
            phonenumber: false
        }
    }

    clearErrorState = () => {
        this.setState({
            errors: {
                blankfield: false,
                phonenumber: false
            }
        });
    }

    async componentDidMount() {
        try {
            // get the current logged in user details
            const user = await Auth.currentAuthenticatedUser();
            // get username from user object
            const userDetail = user.username;
            console.log(userDetail)
            // get the user details for logged in user from the User table 
            Axios.get(`/api/auth/user/${userDetail}`)
                .then(
                    (response) => {
                        console.log(response)
                        this.setState({
                            profile: response.data,
                        });
                        this.getUserProfile()
                    })
                .catch(err => console.log(err))
        } catch (error) {
            if (error !== "No current user") {
                console.log(error);
            }
        }
    }


    getUserProfile = () => {
        const UserId = this.state.profile.id
        console.log(this.state.firstName)
        Axios.get(`/api/auth/userProfile/${UserId}`)
            .then(
                (response) => {
                    console.log(response.data)
                    this.setState({
                        firstName: response.data.first_name,
                        lastName: response.data.last_name,
                        phoneNumber: response.data.phone_number,
                        city: response.data.city,
                        state: response.data.state,
                        about: response.data.about,
                        zipCode: response.data.zip_code,
                        occupation: response.data.occupation,
                        data: response.data
                    });
                })
            .catch(err => console.log(err))
    }

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
        const { firstName, lastName, city, state, zipCode, about, phoneNumber, occupation } = this.state
        const id = this.state.profile.id;
        Axios.post("/api/auth/updateUserProfile", {
            firstName,
            lastName,
            city,
            state,
            zipCode,
            about,
            phoneNumber,
            occupation,
            id
        })
            .then((res) => {
                console.log(res)
            })
            .catch(err => console.log(err.message))
    }

    handleUpdateFormSubmit = async (event) => {
        event.preventDefault();

        // Form validation
        this.clearErrorState();
        const error = Validate(event, this.state);
        if (error) {
            this.setState({
                errors: { ...this.state.errors, ...error }
            });
        }
        else {
            const { firstName, lastName, city, state, zipCode, about, phoneNumber, occupation } = this.state
            const UserId = this.state.profile.id;
            console.log(UserId)
            Axios.put(`/api/auth/updateUserProfile/${UserId}`, {
                firstName,
                lastName,
                city,
                state,
                zipCode,
                about,
                phoneNumber,
                occupation
            })
                .then((res) => {
                    console.log(res)
                    window.location = "/userprofile";
                })
                .catch(err => console.log(err))
        }
    }

    render() {
        return (
            <>
                <div className="container profile-container rounded mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-4 border-right">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                                <span className="font-weight-bold mb-3">Hello {this.state.profile.user_name}</span>
                                {/* <span className="text-black-50">{this.state.profile.email}</span> */}
                                <ProfileImage></ProfileImage>

                            </div>
                        </div>
                        <div className="col-md-8 border-right">
                            <div className="p-3 py-5">
                                <FormErrors formerrors={this.state.errors} />
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="text-right">Profile Settings</h4>
                                </div>
                                <div className="row mt-2">

                                    <div className="col-md-12">
                                        <label className="labels">User Name</label>
                                        <input id="username" type="text" className="form-control" value={this.state.profile.user_name} readOnly />
                                    </div>
                                    <div className="col-md-6 mt-1">
                                        <label className="labels">First Name</label>
                                        <input id="firstname" name="firstName" type="text" className="form-control" placeholder="first name" value={this.state.firstName} onChange={this.handleInputChange} />
                                    </div>
                                    <div className="col-md-6 mt-1">
                                        <label className="labels">Last Name</label>
                                        <input id="lastname" name="lastName" type="text" className="form-control" placeholder="last name" value={this.state.lastName} onChange={this.handleInputChange} />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label className="labels">Phone Number</label>
                                        <input id="phonenumber" name="phoneNumber" value={this.state.phoneNumber} type="tel" className="form-control" placeholder="enter phone number" onChange={this.handleInputChange} /></div>
                                    <div className="col-md-6">
                                        <label className="labels">Email ID</label>
                                        <input readOnly type="text" className="form-control" value={this.state.profile.email} />
                                    </div>
                                    <div className="col-md-12 mt-1">
                                        <label className="labels">Occupation</label>
                                        <input id="occupation" name="occupation" type="text" className="form-control" placeholder="enter occupation" value={this.state.occupation} onChange={this.handleInputChange} /></div>

                                    <div className="col-md-12 mt-1">
                                        <label className="labels">About</label>
                                        <textarea id="about" name="about" type="text" className="form-control" placeholder="about" value={this.state.about} onChange={this.handleInputChange} /></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-4">
                                        <label className="labels">City</label>
                                        <input id="city" name="city" type="text" className="form-control" placeholder="city" value={this.state.city} onChange={this.handleInputChange} />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="labels">State/Region</label>
                                        <input id="state" name="state" type="text" className="form-control" value={this.state.state} placeholder="state" onChange={this.handleInputChange} />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="labels">Zip Code</label>
                                        <input id="zipcode" name="zipCode" type="text" className="form-control" value={this.state.zipCode} placeholder="state" onChange={this.handleInputChange} />
                                    </div>
                                </div>
                                {!this.state.data && (
                                    <div className="mt-5 text-center">
                                        <button onClick={this.handleFormSubmit} className="btn btn-primary profile-button" type="button">Save Profile</button>
                                    </div>
                                )}
                                {this.state.data && (
                                    <div className="mt-5 text-center">
                                        <button onClick={this.handleUpdateFormSubmit} className="btn btn-primary profile-button" type="button">Update Profile</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

