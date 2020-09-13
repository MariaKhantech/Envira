import React, { Component } from "react";
import "./style.scss";
import Axios from "axios";
import { Auth } from "aws-amplify";
import { Storage } from "aws-amplify";
import ReviewForm from "../ReviewForm";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";
import $ from "jquery";

export default class UserProfile extends Component {
  state = {
    profile: [],
    userName: "",
    email: "",
    urlUserId: "",
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    phoneNumber: "",
    occupation: "",
    about: "",
    zipCode: "",
    totalEvent: "",
    imagePreviewUrl: "",
    imageName: [],
    userRating: [],
    events: [],
  };

  async componentDidMount() {
    try {
      // get the current logged in user details
      const user = await Auth.currentAuthenticatedUser();
      // get username from user object
      const userDetail = user.username;
      // get the user details for logged in user from the User table
      Axios.get(`/api/auth/user/${userDetail}`)
        .then((response) => {
          this.setState({
            profile: response.data,
          });
          // call this function to get logged in user profile details
          this.getUserProfile();
          this.getUserName();
          // call this function to get logged in user event details
          this.getUserJoinedEvent();
          this.getUserEvents();
          this.getImage();
          this.getUserRating();
        })
        .catch((err) => console.log(err));
    } catch (error) {
      if (error !== "No current user") {
        console.log(error);
      }
    }
  }

  // get logged in user info from UserProfile model
  getUserProfile = () => {
    // const UserId = this.state.profile.id;

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const urlUserId = urlParams.get("userId");

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
        });
      })
      .catch((err) => console.log(err));
  };

  getUserName = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const urlUserId = urlParams.get("userId");

    console.log(urlUserId);
    Axios.get(`/api/auth/userid/${urlUserId}`)
      .then((response) => {
        this.setState({
          userName: response.data.user_name,
          email: response.data.email,
        });

        console.log(this.state.userName);
      })
      .catch((err) => console.log(err));
  };

  // get logged in user info from EventAttendee model
  getUserJoinedEvent = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const UserId = urlParams.get("userId");
    // const UserId = this.state.profile.id;
    Axios.get(`/api/auth/userTotalEvent/${UserId}`)
      .then((response) => {
        this.setState({
          totalEvent: response.data,
        });
        console.log(this.state.totalEvent.length);
      })
      .catch((err) => console.log(err));
  };

  getImage = () => {
    // const UserId = this.state.profile.id;

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const urlUserId = urlParams.get("userId");

    this.setState({ eventId: urlUserId });

    // console.log(this.state.eventId);

    // console.log(UserId);
    Axios.get(`/api/auth/image/${urlUserId}`)
      .then((response) => {
        this.setState({
          imageName: response.data,
        });
        console.log(this.state.imageName);
        this.getImageFromS3();
      })
      .catch((err) => console.log(err));
  };

  getImageFromS3 = () => {
    let fileName = this.state.imageName.image_name;
    console.log(fileName);
    Storage.get(fileName)
      .then((data) => {
        console.log(data);
        this.setState({
          imagePreviewUrl: data,
        });
      })
      .catch((err) => console.log(err));
  };

  getUserRating = () => {
    // const UserId = this.state.profile.id;

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const urlUserId = urlParams.get("userId");

    // console.log(urlUserId);

    Axios.get(`/api/rate/userprofile/${urlUserId}`)
      .then((res) => {
        // console.log(res);
        this.setState({ userRating: [res.data] });
      })
      .catch((err) => console.log(err));
  };

  // get logged in user info from Event model
  getUserEvents = () => {
    // console.log("herer");
    // const UserId = this.state.profile.id;

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const urlUserId = urlParams.get("userId");

    console.log(urlUserId);

    Axios.get(`/api/getuserevents/${urlUserId}`)
      .then((response) => {
        this.setState({
          events: response.data,
        });
        console.log(response.data);
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
            pathname: "/edituserprofile",
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
            pathname: "/edituserprofile",
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
    // add avgRating to starRating component value
    // Get average rating using map and reduce
    const ratings = this.state.userRating.map((data) => data.rating);
    const avgRating =
      ratings.reduce((a, b) => a + parseInt(b), 0) / ratings.length;
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
                <span className="heading" />
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
          <h3>
            {this.state.firstName} {this.state.lastName}
          </h3>
          <div className="h5 font-weight-300">
            <i className="ni location_pin mr-2" />
            {this.state.state}, {this.state.city}
          </div>
          <div className="h5 mt-4">
            <i className="ni business_briefcase-24 mr-2" />
            {this.state.occupation}
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
                style={hideEditEventLink}
                onClick={this.closeModal}
                to={{ pathname: "/editevent", search: `?eventId=${event.id}` }}
              >
                Edit
              </Link>
            </div>
          </div>
        </div>
        <hr />
      </div>
    ));

    //end of star rating tab//
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
          <div className="container-fluid d-flex align-items-center">
            <div className="row">
              <div className="col-lg-7 col-md-10 ">
                <h1 className="display-2 text-dark text-center ml-5">
                  {this.state.userName}
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Page content --> */}
        <div className=" mt--7">
          <div className="row">
            <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0 col-12 ">
              <div className="card card-style-plus card-profile shadow ">
                <div className="row justify-content-center">
                  <div className="col-lg-3 order-lg-2">
                    <div className="card-profile-image card-style-plus">
                      {!this.state.imageName && (
                        <img
                          style={imgPreview}
                          src="../assets/imgs/avatarimg.png"
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
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">
                          My Events
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
                      <div class="modal-body">{eventCards}</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* profile tabs */}
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
                      <p>Joined events here</p>
                    </div>
                    <div className="tab-pane " id="tabs-3" role="tabpanel">
                      <p>My event comments here</p>
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
                      <h3 className="mb-0">Profile</h3>
                    </div>

                    <div className="col-4 text-right">
                      {/* <a
                          class="a-design"
                          href="edituserprofile"
                          className="btn-design btn btn-sm btm-sm-design btn-primary-design btn-primary"
                        >
                          Edit Profile
                        </a>
                     */}

                      {editProfileBtn}
                    </div>
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
                            <label class="label-design">User Name:</label>
                          </div>
                          <div className="col-md-6">
                            <p class="p-design">{this.state.userName}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label class="label-design">Name:</label>
                          </div>
                          <div className="col-md-6">
                            <p class="p-design">
                              {this.state.firstName} {this.state.lastName}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label class="label-design">Email:</label>
                          </div>
                          <div className="col-md-6">
                            <p class="p-design">{this.state.email}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label class="label-design">Phone:</label>
                          </div>
                          <div className="col-md-6">
                            <p class="p-design">{this.state.phoneNumber}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label class="label-design">Location:</label>
                          </div>
                          <div className="col-md-6">
                            <p class="p-design">
                              {this.state.state} {this.state.city}{" "}
                              {this.state.zipCode}
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

                      <hr className="my-4" />
                      {/* <!-- Description --> */}
                      <form>
                        {/* <h6 className="heading-small text-muted mb-4">About me</h6> */}
                        <div className="pl-lg-4">
                          <div className="form-group focused">
                            <label>About Me</label>
                            <textarea
                              rows="4"
                              className="form-control form-control-alternative"
                              value={this.state.about}
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

        {/* <footer className="footer">
        <div className="row align-items-center justify-content-xl-between">
          <div className="col-xl-6 m-auto text-center">

          </div>
        </div>

      </footer> */}
      </div>
    );
  }
}
