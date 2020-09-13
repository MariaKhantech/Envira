import React, { Component } from "react";
import "./style.scss";
import Axios from "axios";
import { Auth } from "aws-amplify";
import { Storage } from "aws-amplify";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import $ from "jquery";

export default class CompanyProfile extends Component {
  state = {
    profile: [],
    companyUserName: "",
    email: "",
    urlUserId: "",
    companyName: "",
    contactPersonName: "",
    companyDescription: "",
    environmentalFocus: "",
    companyWebsite: "",
    companyPhoneNumber: "",
    companyEmail: "",
    imagePreviewUrl: "",
    imageName: [],
    userRating: [],
    events: [],
    totalEvent: "",
  };

  async componentDidMount() {
    console.log("COMPANY");
    try {
      // get the current logged in user details
      const user = await Auth.currentAuthenticatedUser();
      // get username from user object
      const userDetail = user.username;
      console.log(userDetail);
      // get the user details for logged in user from the User table
      Axios.get(`/api/auth/user/${userDetail}`)
        .then((response) => {
          this.setState({
            profile: response.data,
          });
          this.getCompanyProfile();
          this.getCompanyUserName();
          // call this function to get logged in company event details
          this.getUserJoinedEvent();
          this.getImage();

          this.getUserRating();

          this.getUserEvents();
        })
        .catch((err) => console.log(err));
    } catch (error) {
      if (error !== "No current user") {
        console.log(error);
      }
    }
  }

  // get logged in compnay profile details
  getCompanyProfile = () => {
    // const UserId = this.state.profile.id;

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const urlUserId = urlParams.get("userId");

    Axios.get(`/api/auth/companyProfile/${urlUserId}`)
      .then((response) => {
        this.setState({
          companyName: response.data.company_name,
          contactPersonName: response.data.contact_person,
          companyDescription: response.data.company_description,
          environmentalFocus: response.data.environmental_focus,
          companyWebsite: response.data.website,
          companyPhoneNumber: response.data.phone_number,
          companyEmail: response.data.email,
        });
      })
      .catch((err) => console.log(err));
  };

  getCompanyUserName = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const urlUserId = urlParams.get("userId");

    console.log(urlUserId);
    Axios.get(`/api/auth/userid/${urlUserId}`)
      .then((response) => {
        this.setState({
          companyUserName: response.data.user_name,
          email: response.data.email,
        });

        console.log(this.state.companyUserName);
      })
      .catch((err) => console.log(err));
  };

  // get logged in user info from EventAttendee model
  getUserJoinedEvent = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const UserId = urlParams.get("userId");
    Axios.get(`/api/auth/userTotalEvent/${UserId}`)
      .then((response) => {
        this.setState({
          totalEvent: response.data,
        });
        console.log(this.state.totalEvent.length);
      })
      .catch((err) => console.log(err));
  };

  // get logged in company profile image
  getImage = () => {
    // const UserId = this.state.profile.id;

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const urlUserId = urlParams.get("userId");

    Axios.get(`/api/auth/image/${urlUserId}`)
      .then((response) => {
        this.setState({
          imageName: response.data,
        });
        this.getImageFromS3();
      })
      .catch((err) => console.log(err));
  };

  // get imag
  getImageFromS3 = () => {
    let fileName = this.state.imageName.image_name;
    Storage.get(fileName)
      .then((data) => {
        this.setState({
          imagePreviewUrl: data,
        });
      })
      .catch((err) => console.log(err));
  };

  // get logged in user info from EventAttendee model
  getUserEvents = () => {
    // console.log("herer");
    // const UserId = this.state.profile.id;

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const urlUserId = urlParams.get("userId");

    Axios.get(`/api/getuserevents/${urlUserId}`)
      .then((response) => {
        this.setState({
          events: response.data,
        });
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  getUserRating = () => {
    // const UserId = this.state.profile.id;

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const urlUserId = urlParams.get("userId");

    Axios.get(`/api/rate/userprofile/${urlUserId}`)
      .then((res) => {
        this.setState({ userRating: [res.data] });
      })
      .catch((err) => console.log(err));
  };

  //close the modal if user edits an event
  closeModal() {
    $("#eventModal").modal("hide");
  }

  render() {
    const loggedInUserId = this.state.profile.id;
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const urlUserId = urlParams.get("userId");
    let editProfileBtn;
    let hideEditEventLink;

    if (loggedInUserId == urlUserId) {
      editProfileBtn = (
        <Link
          to={{
            pathname: "/editcompanyprofile",
            search: `?userId=${urlUserId}`,
          }}
          className="btn-design btn btn-sm btm-sm-design btn-primary-design btn-primary"
        >
          Edit Profile
        </Link>
      );
    } else {
      editProfileBtn = (
        <Link
          to={{
            pathname: "/editcompanyprofile",
            search: `?userId=${urlUserId}`,
          }}
          className="btn-design btn btn-sm btm-sm-design btn-primary-design btn-primary d-none"
        >
          Edit Profile
        </Link>
      );
      hideEditEventLink = {
        pointerEvents: "none",
        color: "#fff",
      };
    }

    const myStyle = {
      width: "304px",
      height: "200px",
    };
    const imgPreview = {
      textAlign: "center",
      margin: "auto",
      height: "150px",
      width: "150px",
      borderLeft: "1px solid gray",
      borderRight: "1px solid gray",
      borderTop: "5px solid gray",
      borderBottom: "5px solid gray",
      borderRadius: 50,
    };

    // Get average rating using map and reduce
    const ratings = this.state.userRating.map((data) => data.rating);
    const avgRating =
      ratings.reduce((a, b) => a + parseInt(b), 0) / ratings.length;
    // add avgRating to starRating component value
    const starRating = (
      <StarRatingComponent name="rating" starCount={5} value={avgRating} />
    );

    // const that storest the content of the overview
    const overviewTab = (
      <div>
        <div className="row">
          <div className="col">
            <div className="card-profile-stats d-flex justify-content-center mt-md-5">
              <div>
                <span className="heading">{starRating}</span>
                <span className="description">AVERAGE EVENT RATINGS</span>
              </div>
              <div>
                <span className="heading">10</span>
                <span className="description">Event Photos</span>
              </div>
              <div>
                <span className="heading">89</span>
                <span className="description">Event Comments</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h3>{this.state.companyName}</h3>
          <div className="h5 font-weight-300">
            <i className="ni location_pin mr-2" />
            <a href={this.state.companyWebsite} target="_blank">
              {this.state.companyWebsite}
            </a>
          </div>
          <div className="h5 mt-4">
            <i className="ni business_briefcase-24 mr-2" />
            {this.state.companyEmail}
          </div>
          <div>
            <i className="ni education_hat mr-2" />
          </div>
          <hr />
          <div>
            <h5 className="ni business_briefcase-24 mr-2">How to connect:</h5>
            <i className="fa fa-linkedin-square fa-2x" aria-hidden="true" />
            <i className="fa fa-facebook-official fa-2x" aria-hidden="true" />
            <i className="fa fa-twitter-square fa-2x" aria-hidden="true" />
            <i className="fa fa-meetup fa-2x" aria-hidden="true" />
          </div>
        </div>
      </div>
    );
    //end of the overview tab //

    //render list of events for modal
    const eventCards = this.state.events.map((event) => (
      <div>
        <div class="card mb-3">
          <div class="row mx-auto no-gutters">
            <div class="col-md-4">
              <img
                src={`https://envirabucket215241-dev.s3.amazonaws.com/public/${event.image}`}
                class="card-img"
                alt="..."
              />
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title">{event.event_name}</h5>
              </div>
            </div>
            <div class="col-md-2">
              <Link
                onClick={this.closeModal}
                to={{ pathname: "/eventspage", search: `?eventId=${event.id}` }}
              >
                View
              </Link>
              <br />
              <Link
                onClick={this.closeModal}
                to={{ pathname: "/editevent", search: `?eventId=${event.id}` }}
                style={hideEditEventLink}
              >
                Edit
              </Link>
            </div>
          </div>
        </div>
        <hr />
      </div>
    ));

    return (
      <div className=" main-content">
        {/* <!--reference https://www.creative-tim.com/bits/bootstrap/user-profile-page-argon-dashboard--> */}
        {/* <!-- Header --> */}
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          id="background-cover"
        >
          {/* <!-- Mask --> */}
          <span className="mask bg-gradient-default opacity-8" />
          {/* <!-- Header container --> */}
          <div className="container-fluid container-design d-flex align-items-center">
            <div className="row">
              <div className="col-lg-7 col-md-10">
                <h1 className="h1-design h1-special display-2 text-black">
                  {this.state.companyUserName.toUpperCase()}
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Page content --> */}
        <div className=" mt--7">
          <div className="row">
            <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0 col-12 ">
              <div className="card card-profile shadow ">
                <div className="row justify-content-center">
                  <div className="col-lg-3 order-lg-2">
                    <div className="card-profile-image">
                      {!this.state.imageName && (
                        <img
                          style={imgPreview}
                          src="https://via.placeholder.com/150"
                          className="rounded-circle"
                          alt="edit profile to change image"
                        />
                      )}

                      {this.state.imageName && (
                        <img
                          style={(myStyle, imgPreview)}
                          src={this.state.imagePreviewUrl}
                          className="rounded-circle"
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    <a
                      class="a-design"
                      href="#"
                      className="btn-design btn btn-sm btm-sm-design btn-info mr-4"
                      data-toggle="modal"
                      data-target="#eventModal"
                    >
                      My Events
                    </a>
                    <a
                      class="a-design"
                      href="/eventCreate"
                      className="btn-design btn btn-sm btm-sm-design btn-default float-right"
                    >
                      Create Event
                    </a>
                  </div>
                </div>

                {/* MODAL FOR SEEING EVENTS*/}
                <div
                  class="modal fade"
                  id="eventModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="eventModal"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div class="modal-content">
                      <div class="modal-header text-center myevent-header">
                        <h5 class="modal-title text-white" id="exampleModalCenterTitle">
                         MY EVENTS
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body myEvent-modal">{eventCards}</div>
                      <div class="modal-footer myevent-footer">
                        <button
                          type="button"
                          class="btn myevent-btn text-white"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body shadow p-3 pt-0 pt-md-4 mt-5">
                <ul className="nav nav-tabs ul-design" role="tablist">
                    <li className="nav-item">
                      <a
                        class="a-design"
                        className="nav-link active"
                        data-toggle="tab"
                        href="#tabs-1"
                        role="tab"
                      >
                        Overview
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        class="a-design"
                        className="nav-link"
                        data-toggle="tab"
                        href="#tabs-2"
                        role="tab"
                      >
                        Joined Events
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        class="a-design"
                        className="nav-link"
                        data-toggle="tab"
                        href="#tabs-3"
                        role="tab"
                      >
                        Comments
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div
                      className="tab-pane active"
                      id="tabs-1"
                      role="tabpanel"
                    >
                      {overviewTab}
                    </div>
                    <div className="tab-pane " id="tabs-2" role="tabpanel">
                     <p>joined events</p>
                    </div>
                    <div className="tab-pane " id="tabs-3" role="tabpanel">
                        <p>all comments from my events</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 order-xl-1">
              <div className="card bg-secondary shadow">
                <div className="card-header bg-white border-0">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <h3 className="mb-0 h1-design h3-special">
                        {this.props.profileType} Profile
                      </h3>
                    </div>

                    <div className="col-4 text-right">{editProfileBtn}</div>
                  </div>
                </div>
                {/* <!--reference https://bootsnipp.com/snippets/K0ZmK--> */}
                <div className="card-body shadow-lg p-3">
                  <div className="col-md-8">
                    <div className="tab-content profile-tab" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <label class="label-design">Company Name:</label>
                          </div>
                          <div className="col-md-6">
                            <p class="p-design">{this.state.companyUserName}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label class="label-design">Email:</label>
                          </div>
                          <div className="col-md-6">
                            <p class="p-design">{this.state.companyEmail}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label class="label-design">Phone:</label>
                          </div>
                          <div className="col-md-6">
                            <p class="p-design">
                              {this.state.companyPhoneNumber}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label class="label-design">Website:</label>
                          </div>
                          <div className="col-md-6">
                            <p class="p-design">{this.state.companyWebsite}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label class="label-design">Contact Person:</label>
                          </div>
                          <div className="col-md-6">
                            <p class="p-design">
                              {this.state.contactPersonName}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label class="label-design">Current Event:</label>
                          </div>
                          <div className="col-md-6">
                            <p class="p-design">N/A</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label class="label-design">Joined Events:</label>
                          </div>
                          <div className="col-md-6">
                            <p class="p-design">
                              {this.state.totalEvent.length}
                            </p>
                          </div>
                        </div>
                      </div>

                      <hr className="my-4 hr-design" />
                      {/* <!-- Description --> */}
                      <form>
                        {/* <h6 className="h1-design heading-small text-muted mb-4"></h6> */}
                        <div className="pl-lg-4">
                          <div className="form-group focused">
                            <label class="label-design">
                              Environmental Focus
                            </label>
                            <textarea
                              rows="4"
                              className="form-control form-control-alternative"
                              value={this.state.environmentalFocus}
                              readOnly
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
