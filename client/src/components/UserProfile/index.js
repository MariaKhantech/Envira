import React, { Component } from "react";
import "./style.scss";
import Axios from "axios";
import { Auth } from "aws-amplify";
import ReviewForm from "../ReviewForm";

import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

export class UserProfile extends Component {
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
    totalEvent: "",
    rating: 0,
    disabled: true,
    userRating: [],
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
          // call this function to get logged in user event details
          this.getUserTotalEvent();
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
    const UserId = this.state.profile.id;
    Axios.get(`/api/auth/userProfile/${UserId}`)
      .then((response) => {
        console.log(response);
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

  // get logged in user info from EventAttendee model
  getUserTotalEvent = () => {
    const UserId = this.state.profile.id;
    Axios.get(`/api/auth/userTotalEvent/${UserId}`)
      .then((response) => {
        console.log(response);
        this.setState({
          totalEvent: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  //   click method to change star value
  onStarClick(nextValue) {
    this.setState({ rating: nextValue, disabled: false });
  }

  //   Post request to submit rating to DB
  postRating = (event) => {
    event.preventDefault();
    Axios.post("/api/rate/userprofile", {
      rating: this.state.rating,
      UserId: this.state.profile.id,
    })
      .then((res) => {
        console.log(res);
        this.setState({ rating: "0", disabled: true });
      })
      .catch((err) => console.log(err));
  };

  //  Get request to return user ratings from DB
  getUserRating = () => {
    Axios.get(`/api/rate/userprofile/${this.state.profile.id}`)
      .then((res) => {
        this.setState({ userRating: res.data });
        console.log(this.state.userRating);
      })
      .catch((err) => console.log(err));
  };

  //   Method to convert user ratings into average (WIP)
  //   getUserAverage = () => {

  //   };

  render() {
    console.log(this.state.totalEvent);
    console.log(this.state.userRating);

    // const that storest the content of the overview
    const overviewTab = (
      <div>
        <div className="row">
          <div className="col">
            <div className="card-profile-stats d-flex justify-content-center mt-md-5">
              <div>
                <span className="heading">10/10</span>
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
            Greta Thunburg<span className="font-weight-light">, 17</span>
          </h3>
          <div className="h5 font-weight-300">
            <i className="ni location_pin mr-2" />
            Stockholm, Sweden
          </div>
          <div className="h5 mt-4">
            <i className="ni business_briefcase-24 mr-2" />
            Environmentalist- Activist
          </div>
          <div>
            <i className="ni education_hat mr-2" />
            University of Environmentalist
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

    //enters the start rating//
    // Popover to display rating was posted
    const popover = (
      <Popover id="popover-basic">
        <Popover.Title>Rating Posted!</Popover.Title>
      </Popover>
    );
    // Variable to post star ratings
    const postStarRating = (
      <div>
        <div class="row">
          <div class="col">
            <div
              class="card-profile-stats d-flex justify-content-center mt-md-5"
              style={{ fontSize: "28px" }}
            >
              <StarRatingComponent
                name="rating"
                starCount={5}
                value={this.state.rating}
                onStarClick={this.onStarClick.bind(this)}
              />
            </div>
            <OverlayTrigger
              delay={{ show: 250, hide: 350 }}
              placement="right"
              overlay={popover}
            >
              <Button
                disabled={this.state.disabled}
                variant="primary"
                sz="sm"
                className="float-center"
                onClick={this.postRating}
              >
                Post Rating
              </Button>
            </OverlayTrigger>
          </div>
        </div>
      </div>
    );
    // WILL BE NON-EDITABLE AVERAGE USER RATING (WIP)
    //   const starRating = (
    // 	<StarRatingComponent
    // 	  name="rating"
    // 	  starCount={5}
    // 	  // value={this.getAverageRating(this.state.userRating)}
    // 	/>
    //   );
    //end of star rating tab//
    return (
      <div className=" main-content mb-4">
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
              <div className="col-lg-7 col-md-10">
                <h1 className="display-2 text-black">
                  {this.state.profile.user_name}
                </h1>
                <p className="text-black mt-0 mb-5">
                  This is your profile page. You can see the progress you've
                  made with your work and manage your projects or assigned tasks
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Page content --> */}
        <div className=" mt-7">
          <div className="row">
            <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0 col-12 ">
              <div className="card card-profile shadow ">
                <div className="row justify-content-center">
                  <div className="col-lg-3 order-lg-2">
                    <div className="card-profile-image">
                      <a href="#">
                        <img
                          src="https://i.guim.co.uk/img/media/d2d6b9cc8326a99daee0f47ad3b94cca738e4ecd/0_229_3500_2101/master/3500.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=5078627d8ad593949b1bb03d7653d615"
                          className="rounded-circle"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    <a href="#" className="btn btn-sm btn-info mr-4">
                      Events
                    </a>
                    <a href="#" className="btn btn-sm btn-default float-right">
                      Message
                    </a>
                  </div>
                </div>

                {/* profile tabs */}
                <div className="card-body shadow p-3 pt-0 pt-md-4">
                  <ul className="nav nav-tabs " role="tablist">
                    <li className="nav-item">
                      <a
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
                        className="nav-link"
                        data-toggle="tab"
                        href="#tabs-2"
                        role="tab"
                      >
                        Rating
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#tabs-3"
                        role="tab"
                      >
                        Event Photos
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
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
                    />
                    {overviewTab}
                    <div className="tab-pane " id="tabs-2" role="tabpanel" />
                    {postStarRating}
                    {/* {starRating} */}
                    <div className="tab-pane " id="tabs-3" role="tabpanel">
                      <div className="row">
                        <div className="col">
                          <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                            <ReviewForm />
                          </div>
                        </div>
                      </div>
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
                      <a
                        href="edituserprofile"
                        className="btn btn-sm btn-primary"
                      >
                        Edit Profile
                      </a>
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
                            <label>User Name:</label>
                          </div>
                          <div className="col-md-6">
                            <p>{this.state.profile.user_name}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Name:</label>
                          </div>
                          <div className="col-md-6">
                            <p>
                              {this.state.firstName} {this.state.lastName}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Email:</label>
                          </div>
                          <div className="col-md-6">
                            <p>{this.state.profile.email}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Phone:</label>
                          </div>
                          <div className="col-md-6">
                            <p>{this.state.phoneNumber}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Location:</label>
                          </div>
                          <div className="col-md-6">
                            <p>
                              {this.state.state} {this.state.city}{" "}
                              {this.state.zipCode}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Current Event:</label>
                          </div>
                          <div className="col-md-6">
                            <p>N/A</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Joined Events:</label>
                          </div>
                          <div className="col-md-6">
                            <p>{this.state.totalEvent.length}</p>
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

export default UserProfile;
