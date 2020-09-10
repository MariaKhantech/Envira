import React, { Component } from 'react';
import Axios from 'axios';
import { Auth } from 'aws-amplify';
import ProfileImage from "../ProfileImage"
import FormErrors from "../FormErrors";
import Validate from "../../util/FormValidation";

export default class UpdateProfile extends Component {
    state = {
        profile: [],
        companyName: "",
        contactPersonName: "",
        description: "",
        environmentalFocus: "",
        companyWebsite: "",
        phoneNumber: "",
        email: "",
        data: "",
        errors: {
            blankfield: false,
            phonenumber: false,
            website:false
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

    // When the page loads for the first time get the logged in user info
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
                        this.setState({
                            profile: response.data,
                        });
                        // call this function to get the existing company profile details
                        this.getCompanyProfile()
                    })
                .catch(err => console.log(err))
        } catch (error) {
            if (error !== "No current user") {
                console.log(error);
            }
        }
    }

    // call this function to get the existing company profile details
    getCompanyProfile = () => {
        const UserId = this.state.profile.id
        Axios.get(`/api/auth/companyProfile/${UserId}`)
            .then(
                (response) => {
                    this.setState({
                        companyName: response.data.company_name,
                        contactPersonName: response.data.contact_person,
                        description: response.data.company_description,
                        environmentalFocus: response.data.environmental_focus,
                        companyWebsite: response.data.companyWebsite,
                        phoneNumber: response.data.phone_number,
                        email: response.data.email,
                        data: response.data
                    });
                })
            .catch(err => console.log(err))
    }

    // call this function on the input change and update the state
    handleInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
        document.getElementById(e.target.id).classList.remove("is-invalid");
    }

    // call this function on form submit when company saves profile for the first time
    handleFormSubmit = async (event) => {
        event.preventDefault();

        // check Form validation
        this.clearErrorState();
        const error = Validate(event, this.state);
        if (error) {
            this.setState({
                errors: { ...this.state.errors, ...error }
            });
        }
        else {
            const { companyName, description, email, companyWebsite, contactPersonName, environmentalFocus, phoneNumber } = this.state
            const id = this.state.profile.id;
            Axios.post("/api/auth/updateCompanyProfile", {
                companyName,
                description,
                email,
                companyWebsite,
                contactPersonName,
                environmentalFocus,
                phoneNumber,
                id
            }).then((res) => {
                console.log(res)
                window.location = "/companyprofile";
            }).catch(err => console.log(err.message))
        }
    }

    // call this function on form submit when company updates profile
    handleUpdateFormSubmit = async (event) => {
        event.preventDefault();
        // check Form validation
        this.clearErrorState();
        const error = Validate(event, this.state);
        if (error) {
            this.setState({
                errors: { ...this.state.errors, ...error }
            });
        }
        else {
            const { companyName, description, email, companyWebsite, contactPersonName, environmentalFocus, phoneNumber } = this.state
            console.log(companyWebsite)
            const UserId = this.state.profile.id;
            Axios.put(`/api/auth/updateCompanyProfile/${UserId}`, {
                companyName,
                description,
                email,
                companyWebsite,
                contactPersonName,
                environmentalFocus,
                phoneNumber,
            }).then((res) => {
                console.log(res)
                window.location = "/companyprofile";
            }).catch(err => console.log(err))
        }
    }

    render() {
        return (
            <>
                <div className="container profile-container rounded mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-4 border-right">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                                <span className="font-weight-bold mb-3">Hello {this.state.companyName}</span>
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

                                    <div className="col-md-6">
                                        <label className="labels">User Name</label>
                                        <input id="username" type="text" className="form-control" value={this.state.profile.user_name} readOnly />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">Company Name</label>
                                        <input id="companyname" name="companyName" type="text" className="form-control" placeholder="company name" value={this.state.companyName} onChange={this.handleInputChange} />
                                    </div>

                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label className="labels">Phone Number</label>
                                        <input id="phonenumber" name="phoneNumber" value={this.state.phoneNumber} type="tel" className="form-control" placeholder="company phone number" onChange={this.handleInputChange} /></div>
                                    <div className="col-md-6">
                                        <label className="labels">Company Email</label>
                                        <input id="email" name="email" type="email" placeholder="company email" className="form-control" value={this.state.email} onChange={this.handleInputChange} />
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6 mt-1">
                                        <label className="labels">Contact Person</label>
                                        <input id="contactperson" name="contactPersonName" type="text" className="form-control" placeholder="contact person" value={this.state.contactPersonName} onChange={this.handleInputChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">Website</label>
                                        <input id="companywebsite" name="companyWebsite" type="url" className="form-control" placeholder="companywebsite" value={this.state.companyWebsite} onChange={this.handleInputChange} />
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-12 mt-1">
                                        <label className="labels">Description</label>
                                        <textarea id="description" name="description" type="text" className="form-control" placeholder="company description" value={this.state.description} onChange={this.handleInputChange} />
                                    </div>
                                    <div className="col-md-12 mt-1">
                                        <label className="labels">Environmental Focus</label>
                                        <textarea id="envirofocus" name="environmentalFocus" type="text" className="form-control" placeholder="environmental focus details" value={this.state.environmentalFocus} onChange={this.handleInputChange} />
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

