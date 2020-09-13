import React, { Component } from "react";
import ReviewComment from "../ReviewForm";
import { Storage } from "aws-amplify";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import ImageGallery from "react-image-gallery";
import moment from "moment";
import Axios from "axios";
import { Auth } from "aws-amplify";
import { withRouter } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.scss";

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewArray: [],
      eventId: "",
      userId: "",
      roleId: "",
      eventData: [],
      eventImage: "",
      eventImageUrl: "",
      profileImage: "",
      profileImageUrl: "",
      rating: 0,
      starDisabled: true,
      joinEventDisabled: true,
      postRatingDisabled: true,
      userRating: [],
      profile: [],
      eventEnd: false,
      comment: "",
      eventAttendeeImages: [],
      eventAttendees: [],
    };
    this.initializeCountdown = this.initializeCountdown.bind(this);
    this.timeInterval = 0;
    this.onStarClick = this.onStarClick.bind(this);
  }

  //load any data here like comments
  async componentDidMount() {
    this.getEventData();
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
          this.getUserRating();
          this.getUserAttendance();
        })
        .catch((err) => console.log(err));
    } catch (error) {
      if (error !== "No current user") {
        console.log(error);
      }
    }
  }

  //clear the timer when we leave the page (maria)
  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  //initialize the countdouwn
  initializeCountdown(endtime) {
    this.timeInterval = setInterval(
      function () {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var t = {
          total: t,
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds,
        };

        document.querySelector(".days > .value").innerText = t.days;
        document.querySelector(".hours > .value").innerText = t.hours;
        document.querySelector(".minutes > .value").innerText = t.minutes;
        document.querySelector(".seconds > .value").innerText = t.seconds;
        if (t.total <= 0) {
          clearInterval(this.timeInterval);
          document.querySelector(".days > .value").innerText = "0";
          document.querySelector(".hours > .value").innerText = "0";
          document.querySelector(".minutes > .value").innerText = "0";
          document.querySelector(".seconds > .value").innerText = "0";
          this.setState({ eventEnd: true });
        }
      }.bind(this),
      1000
    );
  }

  getEventData = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("eventId");

    //load the comments of from event using event(id)
    this.loadEventComments(id);
    //load the event attendees
    this.getEventAttendees(id);

    this.setState({ eventId: id });
    Axios.get(`/api/create/eventcreate`)
      .then((response) => {
        this.setState({ eventData: response.data });
        const filteredId = this.state.eventData.filter(
          (detail) => detail.id == this.state.eventId
        );
        this.setState({ eventData: filteredId });
        const UserId = this.state.eventData.map((data) => data.UserId);
        const image = this.state.eventData.map((data) => data.image);
        this.setState({ eventImage: image, userId: UserId });
        this.getRoleId();
        this.getEventImageUrl();
        this.getUserImageUrl(this.state.userId);

        //loads the countdown clock (Marai)
        const eventDate = this.state.eventData.map((data) => data.date);
        let date = new Date(eventDate);
        date.setDate(date.getDate() + 1);
        //date = new Date()
        this.initializeCountdown(date);
      })
      .catch((err) => console.log(err));
  };

  //get the image name from Images table whihc holds the user profile image
  getUserImageUrl = (userId) => {
    Axios.get(`/api/auth/image/${userId}`)
      .then((response) => {
        this.setState({
          profileImageUrl: `https://envirabucket215241-dev.s3.amazonaws.com/public/${response.data.image_name}`,
        });
      })
      .catch((err) => console.log(err));
  };

  getEventImageUrl = () => {
    Storage.get(this.state.eventImage)
      .then((data) => {
        this.setState({ eventImageUrl: data });
      })
      .catch((err) => console.log(err));
  };

  // Post rating first time
  postRating = (event) => {
    event.preventDefault();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("eventId");
    const UserId = this.state.userId[0];
    Axios.post(`/api/rate/event`, {
      rating: this.state.rating,
      EventId: id,
      UserId: UserId,
    })
      .then((res) => {
        this.setState({ rating: this.state.rating, postRatingDisabled: true });
      })
      .catch((err) => console.log(err));
  };

  //   click method to change star value
  onStarClick(rating) {
    this.setState({ rating });
  }

  //get rating details given by logged in user
  getUserRating = () => {
    const UserId = this.state.profile.id;
    const EventId = this.state.eventId;
    Axios.get(`/api/rate/userprofile/${UserId}/${EventId}`)
      .then((res) => {
        this.setState({ rating: res.data.rating, postRatingDisabled: true });
      })
      .catch((err) => console.log(err));
  };

  // calculate average rating when user is not logged in
  starRating = () => {
    this.state.userRating.map((data) => (
      <StarRatingComponent
        name="rating"
        starCount={5}
        value={data.rating}
        postRatingDisabled={false}
      />
    ));
  };

  // get user event attendance details
  getUserAttendance = () => {
    const UserId = this.state.profile.id;
    const EventId = this.state.eventId;
    Axios.get(`/api/auth/joinevent/${UserId}/${EventId}`)
      .then((res) => {
        if (res.data === null) {
          this.setState({
            joinEventDisabled: false,
            postRatingDisabled: true,
          });
        } else {
          this.setState({
            joinEventDisabled: true,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  // post event attendee details
  eventAttendee = (event) => {
    event.preventDefault();
    const UserId = this.state.profile.id;
    const EventId = this.state.eventId;
    Axios.post("/api/auth/joinevent", {
      UserId,
      EventId,
    })
      .then((res) => {
        this.setState({
          joinEventDisabled: true,
          postRatingDisabled: false,
        });
      })
      .catch((err) => console.log(err));
  };

  //redirect user to signup page
  registerToJoinEvent = (event) => {
    event.preventDefault();
    window.location = "/signup";
  };

  //
  getRoleId = () => {
    const UserId = this.state.userId[0];
    Axios.get(`/api/auth/userid/${UserId}`)
      .then((response) => {
        this.setState({
          roleId: response.data.roleId,
        });
      })
      .catch((err) => console.log(err));
  };

  handleRedirect = (event) => {
    event.preventDefault();
    const {
      history: { push },
    } = this.props;

    const roleId = this.state.roleId;

    if (roleId === 1) {
      push({
        pathname: "/userprofile",
        search: `?userId=${this.state.userId[0]}`,
      });
    } else if (roleId === 2) {
      push({
        pathname: "/companyprofile",
        search: `?userId=${this.state.userId[0]}`,
      });
    } else if (roleId === 3) {
      push({
        pathname: "/companyprofile",
        search: `?userId=${this.state.userId[0]}`,
      });
    }
  };

  //load the event comments for this event
  loadEventComments(eventId) {
    Axios.get(`/api/geteventcomments/${eventId}`)
      .then((response) => {
        this.setState({ reviewArray: response.data });
      })
      .catch((err) => console.log(err));
  }

  //track the review comment as the user types
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  //saves comment to the DB
  saveReview = () => {
    const userReview = {
      userId: this.state.profile.id,
      eventId: parseInt(this.state.eventId),
      comment: this.state.comment,
    };

    Axios.post("/api/createcomment", {
      userReview,
    })
      .then((res) => {
        const copyArray = [...this.state.reviewArray];
        copyArray.push(res.data);
        this.setState({ reviewArray: copyArray });
      })
      .catch((err) => console.log(err));
  };


 //load the users attending this event
 async getEventAttendees(eventId) {		
  Axios.get(`/api/geteventattendees/${eventId}`)
  .then((response) => {
    response.data.forEach( async attendee => {

      let userName,imageName  = ""
 
      // //get the ateendeeusername
     await Axios.get(`/api/auth/userid/${attendee.UserId}`)
      .then((response) => {
       userName = response.data.user_name
      })
      .catch((err) => console.log(err));

      //get the attendee image
      await Axios.get(`/api/auth/image/${attendee.UserId}`)
      .then((response) => {
        imageName = response.data.image_name
 
      })
      .catch((err) => console.log(err));
  
      //put the usrname and imagename in an object
      let attendeeObj = {
        username: userName,
        image: imageName
      }

      //pussh the objet to the state array
       this.setState({ eventAttendees: [...this.state.eventAttendees, attendeeObj] });   
    });
   
  })
  .catch((err) => console.log(err));
}


  render() {
    const scrollingContainer = {
      height: "800px",
      overflowY: "scroll",
    };

    const eventName = this.state.eventData.map((data) => data.event_name);
    const description = this.state.eventData.map((data) => data.description);
    const address = this.state.eventData.map((data) => data.address);
    const city = this.state.eventData.map((data) => data.city);
    const eventState = this.state.eventData.map((data) => data.state);
    const date = this.state.eventData.map((data) =>
      moment(data.date).format("dddd, MMMM Do YYYY")
    );

    const website = this.state.eventData.map((data) => data.website);
    const contactPerson = this.state.eventData.map(
      (data) => data.contact_person
    );
    const contactEmail = this.state.eventData.map((data) => data.contact_email);
    const contactNumber = this.state.eventData.map(
      (data) => data.contact_number
    );

    // Popover to display rating was posted
    const popover = (
      <Popover id="popover-basic">
        <Popover.Title>Rating Posted!</Popover.Title>
      </Popover>
    );
    // Variable to post star ratings
    const postStarRating = (
      <>
        <div
          className="card-profile-stats d-flex justify-content-center mt-md-5"
          style={{ fontSize: "28px" }}
        >
          <StarRatingComponent
            name="rating"
            starCount={5}
            value={this.state.rating}
            onStarClick={this.onStarClick}
            disabled={this.state.starDisabled}
          />
        </div>
        <OverlayTrigger
          delay={{ show: 250, hide: 350 }}
          placement="top"
          overlay={popover}
        >
          <Button
            disabled={this.state.postRatingDisabled}
            variant="primary"
            size="sm"
            className="float-center"
            onClick={this.postRating}
          >
            Post Rating
          </Button>
        </OverlayTrigger>
      </>
    );

    //google image asrc address
    const googleMapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=${address}+${city}+${eventState}`;

    //map through through all comments/reviews and create a review form/card dor each one
    const reviewsCards = this.state.reviewArray.map((review) => (
      <ReviewComment comment={review} />
    ));

    //create the attendee carousel
    const attendeeCarousel = this.state.eventAttendees.map(
      (attendees, index) => (
        <div key={index}>
          <img
            alt="attendee to event"
            className="rounded img-fluid"
            style={{
              border: "#85dcba",
              borderStyle: "solid",
              borderRadius: "1rem",
            }}
            src={`https://envirabucket215241-dev.s3.amazonaws.com/public/${attendees.image}`}
          />
          <Link
            className="legend"
            to={{
              pathname: "/profile",
              search: `?username=${attendees.username}`,
            }}
          >
            {attendees.username}
          </Link>
        </div>
      )
    );

    return (
      <div className="wrapper2">
        <div className="container-fluid">
          <div
            className="jumbotron background-img"
            style={{ marginBottom: "0", borderBottom: "4rem solid #85dcba" }}
          >
            <div className="card flex-row  float-right border-0 style-contact-person">
              <div className="border-0">
                <img
                  className="rounded img-fluid"
                  style={{
                    border: "#85dcba",
                    borderStyle: "solid",
                    height: "300px",
                  }}
                  src={this.state.profileImageUrl}
                  height="300px"
                  alt="contact person"
                />
              </div>
              <div className="card-body ">
                <h4>
                  <span>
                    <b>Contact: </b>
                  </span>
                  {this.state.profile.id && (
                    <a href="#" onClick={this.handleRedirect}>
                      {contactPerson}
                    </a>
                  )}
                  {!this.state.profile.id && <a>{contactPerson}</a>}
                </h4>
                <hr />
                <h5>
                  <span>
                    <b>Phone:</b>
                  </span>
                  {contactNumber}
                </h5>
                <h5>
                  <span>
                    <b>Email: </b>
                  </span>
                  <i>{contactEmail}</i>
                </h5>
                <p className="card-text ">
                  <span>
                    <b>Website: </b>
                  </span>
                  {website}
                </p>
              </div>
            </div>

            <h1 className="display-4 text-white">{eventName}</h1>
            <p className="lead text-white">{date}</p>
            <p className="lead">
              {!this.state.profile.id && (
                <button
                  className="btn btn-lg border-white shadow text-white font-weight-bold"
                  style={{ marginTop: "8rem", backgroundColor: "#85dcba" }}
                  role="button"
                  onClick={this.registerToJoinEvent}
                >
                  Register to Join Event
                </button>
              )}
              {this.state.profile.id && (
                <button
                  className={`btn btn-lg border-white shadow text-white font-weight-bold' ${
                    this.state.eventEnd ? "d-none" : ""
                  }`}
                  style={{ marginTop: "8rem", backgroundColor: "#85dcba" }}
                  role="button"
                  onClick={this.eventAttendee}
                  disabled={this.state.joinEventDisabled}
                >
                  Join Event
                </button>
              )}
            </p>
          </div>
        </div>

        {/* <!--count down reference https://codepen.io/techmariakhan/pen/ExKXjGv--> */}
        <div className="continer centerIt">
          <div>
            <label className="project-name text-center">EVENT COUNTDOWN:</label>
          </div>
          <div className="counter counter-div">
            <div className="days">
              <div className="value">00</div>
              <span>Days</span>
            </div>
            <div className="hours">
              <div className="value">00</div>
              <span>Hours</span>
            </div>
            <div className="minutes">
              <div className="value">00</div>
              <span>Minutes</span>
            </div>
            <div className="seconds">
              <div className="value">00</div>
              <span>Seconds</span>
            </div>
          </div>
        </div>

        <div className=" home-info-section">
          <div className="row justify-content-center">
            <div className="col-3 ">
              <figure>
                <img
                  className="event-img rounded img-fluid"
                  style={{ border: "#e27d60", borderStyle: "solid" }}
                  src={this.state.eventImageUrl}
                />
              </figure>
            </div>
            <div className="col-4">
              <header className="entry-header">
                <h2 className="entry-title text-white">About the event</h2>
                <hr />
              </header>
              <div>
                <p className="mt-3 text-white">{description}</p>
              </div>
            </div>
          </div>
          <hr style={{ height: "5rem", backgroundColor: " #85dcba" }} />
          <div
            className="container mt-5 text-center text-white "
            style={{
              backgroundColor: "#e27d60",
              borderStyle: "solid",
              borderColor: "#85dcba",
            }}
          >
            <h1 className="text-white mb-2 mt-3">EVENT ATTENDEES</h1>
            <br></br>
            <div className="row mt-2 justify-content-center mx-auto">
              <Carousel autoPlay width="350px">
                {attendeeCarousel}
              </Carousel>
            </div>
          </div>
        </div>

        <div
          className="row justify-content-center mb-5 mt-3"
          style={{ marginTop: "5rem" }}
        >
          <div className="col-4 text-center">
            <div className="card border-0  mt-5" style={{ width: "10rem;" }}>
              <div className="card-body shadow-lg p-3 rounded location-cardStyle">
                <div className="section-title">
                  <h2 className="text-white">Location</h2>
                  <p className="text-white">
                    Get directions to our event center
                  </p>
                </div>
                <div className="ct-address">
                  <span className="text-white">Address:</span>
                  <p className="text-white">
                    {address}, {city} {eventState}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6 mt-5">
            <div className="map-responsive text-center">
              <iframe
                className="rounded map-style"
                src={googleMapUrl}
                width="500"
                height="300"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div
          className={`home-info-section ${this.state.eventEnd ? "" : "d-none"}`}
        >
          <div className="row justify-content-center">
            <div className="row" style={{ marginTop: "40px" }}>
              <div className="col-md-12">
                <div className="well well-sm">
                  <div className="text-center">
                    <h1 className=" leave-reviewbtn text-center mb-2">
                      Event Review
                    </h1>
                  </div>

                  <div className="row" vid="post-review-box">
                    <div
                      className={`col-md-12 ${
                        this.state.profile.length < 1 ? "d-none" : ""
                      }`}
                    >
                      <form acceptCharset="UTF-8" action="" method="post">
                        <input
                          id="ratings-hidden"
                          name="rating"
                          type="hidden"
                        />
                        <textarea
                          className="form-control animated"
                          cols="100"
                          id="new-review"
                          name="comment"
                          placeholder="Enter your review here..."
                          rows="5"
                          value={this.state.comment}
                          onChange={this.handleChange}
                        />

                        <div className="text-center">
                          <button
                            className="btn btn-lg save-btn mt-2"
                            type="button"
                            onClick={this.saveReview}
                          >
                            Save
                          </button>
                          {postStarRating}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="container">
            <div
              className="row mt2 border border-dark justify-content-around"
              style={scrollingContainer}
            >
              {reviewsCards}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(index);
