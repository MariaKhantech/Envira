import React, { Component } from 'react';
// import "./updateProfile.css";
import Axios from 'axios';
import { Auth } from 'aws-amplify';
// import ProfileImage from "../ProfileImage"

export default class UpdateProfile extends Component {
    state = {
        profile: [],
        companyName: "",
        contactPersonName: "",
        companyDescription: "",
        environmentalFocus: "",
        companyWebsite: "",
        companyPhoneNumber: "",
        companyEmail: "",
        data: ""
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
                        this.setState({
                            profile: response.data,
                        });
                        this.getCompanyProfile()
                    })
                .catch(err => console.log(err))
        } catch (error) {
            if (error !== "No current user") {
                console.log(error);
            }
        }
    }

    getCompanyProfile = () => {
        const UserId = this.state.profile.id
        console.log(this.state.companyName)
        Axios.get(`/api/auth/companyProfile/${UserId}`)
            .then(
                (response) => {
                    console.log(response.data)
                    this.setState({
                        companyName: response.data.company_name,
                        contactPersonName: response.data.contact_person,
                        companyDescription: response.data.company_description,
                        environmentalFocus: response.data.environmental_focus,
                        companyWebsite: response.data.website,
                        companyPhoneNumber: response.data.phone_number,
                        companyEmail: response.data.email,
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
    }

    handleFormSubmit = async (event) => {
        event.preventDefault();
        const { companyName, companyDescription, companyEmail, companyWebsite, contactPersonName, environmentalFocus, companyPhoneNumber } = this.state
        const id = this.state.profile.id;
        console.log(this.state.profile.id);

        console.log(companyName, companyDescription)
        Axios.post("/api/auth/updateCompanyProfile", {
            companyName,
            companyDescription,
            companyEmail,
            companyWebsite,
            contactPersonName,
            environmentalFocus,
            companyPhoneNumber,
            id
        })
            .then((res) => {
                console.log(res)
            })
            .catch(err => console.log(err.message))
    }

    handleUpdateFormSubmit = async (event) => {
        event.preventDefault();
        const { companyName, companyDescription, companyEmail, companyWebsite, contactPersonName, environmentalFocus, companyPhoneNumber } = this.state
        const UserId = this.state.profile.id;
        Axios.put(`/api/auth/updateCompanyProfile/${UserId}`, {
            companyName,
            companyDescription,
            companyEmail,
            companyWebsite,
            contactPersonName,
            environmentalFocus,
            companyPhoneNumber,
        })

            .then((res) => {
                console.log(res)
                window.location = "/companyprofile";
            })

            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <div className="container profile-container rounded mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-4 border-right">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                                <span className="font-weight-bold mb-3">Hello {this.state.companyName}</span>
                                {/* <ProfileImage></ProfileImage> */}

                            </div>
                        </div>
                        <div className="col-md-8 border-right">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="text-right">Profile Settings</h4>
                                </div>
                                <div className="row mt-2">

                                    <div className="col-md-6">
                                        <label className="labels">User Name</label>
                                        <input type="text" className="form-control" value={this.state.profile.user_name} readOnly />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">Company Name</label>
                                        <input name="companyName" type="text" className="form-control" placeholder="company name" value={this.state.companyName} onChange={this.handleInputChange} />
                                    </div>

                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label className="labels">Phone Number</label>
                                        <input id="phonenumber" name="companyPhoneNumber" value={this.state.companyPhoneNumber} type="tel" className="form-control" placeholder="company phone number" onChange={this.handleInputChange} /></div>
                                    <div className="col-md-6">
                                        <label className="labels">Company Email</label>
                                        <input name="companyEmail" type="email" placeholder="company email" className="form-control" value={this.state.companyEmail} onChange={this.handleInputChange} />
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6 mt-1">
                                        <label className="labels">Contact Person</label>
                                        <input name="contactPersonName" type="text" className="form-control" placeholder="contact person" value={this.state.contactPersonName} onChange={this.handleInputChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">Website</label>
                                        <input name="companyWebsite" type="url" className="form-control" placeholder="company website" value={this.state.companyWebsite} onChange={this.handleInputChange} />
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-12 mt-1">
                                        <label className="labels">Description</label>
                                        <textarea name="companyDescription" type="text" className="form-control" placeholder="company description" value={this.state.companyDescription} onChange={this.handleInputChange} />
                                    </div>
                                    <div className="col-md-12 mt-1">
                                        <label className="labels">Environmental Focus</label>
                                        <textarea name="environmentalFocus" type="text" className="form-control" placeholder="environmental focus details" value={this.state.environmentalFocus} onChange={this.handleInputChange} />
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

