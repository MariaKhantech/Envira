import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./updateProfile.css";
import Axios from "axios";
import { Auth } from "aws-amplify";
import ProfileImage from "../ProfileImage";
import FormErrors from "../FormErrors";
import Validate from "../../util/FormValidation";

export class UpdateProfile extends Component {
  state = {
    profile: [],
    urlUserId: "",
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
      phonenumber: false,
    },
  };

  clearErrorState = () => {
    this.setState({
      errors: {
        blankfield: false,
        phonenumber: false,
      },
    });
  };

  // When the page loads for the first time get the logged in user info
  async componentDidMount() {
    try {
      // get the current logged in user details
      const user = await Auth.currentAuthenticatedUser();
      // get username from user object
      const userDetail = user.username;
      // get the user details for logged in user from the User table
      Axios.get(`/api/auth/user/${userDetail}`)
        .then((response) => {
          console.log(response);
          this.setState({
            profile: response.data,
          });
          // call this function to get the existing user profile details
          this.getUserProfile();
        })
        .catch((err) => console.log(err));
    } catch (error) {
      if (error !== "No current user") {
        console.log(error);
      }
    }
  }

  // call this function to get the existing user profile details
  getUserProfile = () => {
    // const UserId = this.state.profile.id;

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const urlUserId = urlParams.get("userId");

    this.setState({ urlUserId: urlUserId });

    Axios.get(`/api/auth/userProfile/${urlUserId}`)
      .then((response) => {
        this.setState({
          firstName: response.data.first_name,
          lastName: response.data.last_name,
          phoneNumber: response.data.phone_number,
          city: response.data.city,
          state: response.data.state,
          about: response.data.about,
          zipCode: response.data.zip_code,
          occupation: response.data.occupation,
          data: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  // call this function on the input change and update the state
  handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
    document.getElementById(e.target.id).classList.remove("is-invalid");
  };

  // call this function on form submit when user saves profile for the first time
  handleFormSubmit = async (event) => {
    event.preventDefault();
    const {
      history: { push },
    } = this.props;

    // check Form validation
    this.clearErrorState();
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error },
      });
    } else {
      const {
        urlUserId,
        firstName,
        lastName,
        city,
        state,
        zipCode,
        about,
        phoneNumber,
        occupation,
      } = this.state;
      //   const id = this.state.profile.id;
      Axios.post("/api/auth/updateUserProfile", {
        firstName,
        lastName,
        city,
        state,
        zipCode,
        about,
        phoneNumber,
        occupation,
        urlUserId,
      })
        .then((res) => {
          console.log(res);
          push({
            pathname: "/userprofile",
            search: `?userId=${this.state.urlUserId}`,
          });
          //   window.location = "/userprofile";
        })
        .catch((err) => console.log(err.message));
    }
  };

  // call this function on form submit when user updates profile
  handleUpdateFormSubmit = async (event) => {
    event.preventDefault();
    const {
      history: { push },
    } = this.props;

    // check Form validation
    this.clearErrorState();
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error },
      });
    } else {
      const {
        urlUserId,
        firstName,
        lastName,
        city,
        state,
        zipCode,
        about,
        phoneNumber,
        occupation,
      } = this.state;
  
      Axios.put(`/api/auth/updateUserProfile/${urlUserId}`, {
        firstName,
        lastName,
        city,
        state,
        zipCode,
        about,
        phoneNumber,
        occupation,
      })
        .then((res) => {
          console.log(res);
          push({
            pathname: "/userprofile",
            search: `?userId=${this.state.urlUserId}`,
          });
          //   window.location = "/userprofile";
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <>
        <div className="container profile-container rounded mt-5 mb-5 bg-light shadow">
          <div className="row ">
            <div className="col-md-4 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <span className="font-weight-bold mb-3">
                  Hello {this.state.profile.user_name}
                </span>
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
                    <label className="editFormlabels">User Name</label>
                    <input
                      id="username"
                      type="text"
                      className="form-control"
                      value={this.state.profile.user_name}
                      readOnly
                    />
                  </div>
                  <div className="col-md-6 mt-1">
                    <label className="editFormlabels">First Name</label>
                    <input
                      id="firstname"
                      name="firstName"
                      type="text"
                      className="form-control"
                      placeholder="first name"
                      value={this.state.firstName}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="col-md-6 mt-1">
                    <label className="editFormlabels">Last Name</label>
                    <input
                      id="lastname"
                      name="lastName"
                      type="text"
                      className="form-control"
                      placeholder="last name"
                      value={this.state.lastName}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label className="editFormlabels">Phone Number</label>
                    <input
                      id="phonenumber"
                      name="phoneNumber"
                      value={this.state.phoneNumber}
                      type="tel"
                      className="form-control"
                      placeholder="enter phone number"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="editFormlabels">Email ID</label>
                    <input
                      readOnly
                      type="text"
                      className="form-control"
                      value={this.state.profile.email}
                    />
                  </div>
                  <div className="col-md-12 mt-1">
                    <label className="editFormlabels">Occupation</label>
                    <input
                      id="occupation"
                      name="occupation"
                      type="text"
                      className="form-control"
                      placeholder="enter occupation"
                      value={this.state.occupation}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <div className="col-md-12 mt-1">
                    <label className="editFormlabels">About</label>
                    <textarea
                      id="about"
                      name="about"
                      type="text"
                      className="form-control"
                      placeholder="about"
                      value={this.state.about}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <label className="editFormlabels">City</label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      className="form-control"
                      placeholder="city"
                      value={this.state.city}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="editFormlabels">State/Region</label>
                    <input
                      id="state"
                      name="state"
                      type="text"
                      className="form-control"
                      value={this.state.state}
                      placeholder="state"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="editFormlabels">Zip Code</label>
                    <input
                      id="zipcode"
                      name="zipCode"
                      type="text"
                      className="form-control"
                      value={this.state.zipCode}
                      placeholder="state"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                {!this.state.data && (
                  <div className="mt-5 text-center">
                    <button
                      onClick={this.handleFormSubmit}
                      className="btn btn-primary profile-button"
                      type="button"
                    >
                      Save Profile
                    </button>
                  </div>
                )}
                {this.state.data && (
                  <div className="mt-5 text-center">
                    <button
                      onClick={this.handleUpdateFormSubmit}
                      className="btn profile-button border-0"
                      type="button"
                    >
                      Update Profile
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(UpdateProfile);
