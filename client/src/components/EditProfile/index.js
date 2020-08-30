import React, { Component } from 'react';
import "./updateProfile.css";
import Axios from 'axios';
import { Auth } from 'aws-amplify';
import ProfileImage from "../ProfileImage"



export default class UpdateProfile extends Component {
    state = {
        profile: [],
        firstName: "",
        lastName: "",
        city: "",
        state: "",
        phoneNumber: "",
        address: "",
        about: "",
        zipCode: "",
    }

    async componentDidMount() {
        try {
            // get the current logged in user details
            const user = await Auth.currentAuthenticatedUser();
            // get username from user object
            const userDetail = user.username;
            // get the user details for logged in user from the User table 
            Axios.get(`/api/auth/user/${userDetail}`)
                .then(
                    (response) => {
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
        Axios.get(`/api/auth/userProfile/${UserId}`)
            .then(
                (response) => {
                    console.log(response)
                    this.setState({
                        firstName: response.data.first_name,
                        lastName: response.data.last_name,
                        phoneNumber: response.data.phone_number,
                        city: response.data.city,
                        state: response.data.state,
                        about: response.data.about,
                        zipCode: response.data.zip_code,
                        address: response.data.address,
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
        const { firstName, lastName, city, state, zipCode, about, phoneNumber } = this.state
        console.log(this.state.profile.id);

        console.log(firstName, lastName)
        Axios.post("/api/auth/updateUserProfile", {
            firstName,
            lastName,
            city,
            state,
            zipCode,
            about,
            phoneNumber,
            id: this.state.profile.id
        })
            .then((res) => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    handleUpdateFormSubmit = async (event) => {
        event.preventDefault();
        const { firstName, lastName, city, state, zipCode, about, phoneNumber } = this.state
        const UserId = this.state.profile.id;
        Axios.put(`/api/auth/updateUserProfile/${UserId}`, {
            firstName,
            lastName,
            city,
            state,
            zipCode,
            about,
            phoneNumber,
        })

            .then((res) => {
                console.log(res)
                window.location = "/userprofile";
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
                                <span className="font-weight-bold mb-3">Hello {this.state.firstName}</span>
                                {/* <span className="text-black-50">{this.state.profile.email}</span> */}
                                <ProfileImage></ProfileImage>

                            </div>
                        </div>
                        <div className="col-md-8 border-right">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="text-right">Profile Settings</h4>
                                </div>
                                <div className="row mt-2">

                                    <div className="col-md-12">
                                        <label className="labels">User Name</label>
                                        <input type="text" className="form-control" value={this.state.profile.user_name} readOnly />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">First Name</label>
                                        <input name="firstName" type="text" className="form-control" placeholder="first name" value={this.state.firstName} onChange={this.handleInputChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">Last Name</label>
                                        <input name="lastName" type="text" className="form-control" placeholder="last name" value={this.state.lastName} onChange={this.handleInputChange} />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label className="labels">Phone Number</label>
                                        <input name="phoneNumber" value={this.state.phoneNumber} type="tel" className="form-control" placeholder="enter phone number" onChange={this.handleInputChange} /></div>
                                    <div className="col-md-6">
                                        <label className="labels">Email ID</label>
                                        <input readOnly type="text" className="form-control" value={this.state.profile.email} />
                                    </div>
                                    <div className="col-md-12">
                                        <label className="labels">Address</label>
                                        <input name="address" type="text" className="form-control" placeholder="enter address" value={this.state.address} onChange={this.handleInputChange} /></div>

                                    <div className="col-md-12">
                                        <label className="labels">About</label>
                                        <textarea name="about" type="text" className="form-control" placeholder="about" value={this.state.about} onChange={this.handleInputChange} /></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-4">
                                        <label className="labels">City</label>
                                        <input name="city" type="text" className="form-control" placeholder="city" value={this.state.city} onChange={this.handleInputChange} />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="labels">State/Region</label>
                                        <input name="state" type="text" className="form-control" value={this.state.state} placeholder="state" onChange={this.handleInputChange} />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="labels">Zip Code</label>
                                        <input name="zipCode" type="text" className="form-control" value={this.state.zipCode} placeholder="state" onChange={this.handleInputChange} />
                                    </div>
                                </div>
                                {!this.state.profile && (
                                    <div className="mt-5 text-center">
                                        <button onClick={this.handleFormSubmit} className="btn btn-primary profile-button" type="button">Save Profile</button>
                                    </div>
                                )}
                                {this.state.profile && (
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

