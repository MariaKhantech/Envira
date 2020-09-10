import React, { Component } from "react";
import ReviewComment from "../ReviewForm";
import { Storage } from "aws-amplify";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import ImageGallery from "react-image-gallery";
import moment from "moment";
import Axios from "axios";
import "./style.scss";

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewArray: [],
      eventId: "",
      userId: "",
      eventData: [],
      eventImage: "",
      eventImageUrl: "",
      profileImage: "",
      profileImageUrl: "",
      rating: 0,
      disabled: true,
      userRating: [],
    };
    this.initializeCountdown = this.initializeCountdown.bind(this);
  }

  //load any data here like comments
  componentDidMount() {
    let reviewArray = [
      { name: <ReviewComment /> },
      { name: <ReviewComment /> },
      { name: <ReviewComment /> },
      { name: <ReviewComment /> },
      { name: <ReviewComment /> },
    ];
    this.getEventData();

    this.setState({ reviewArray });
    //setting date for testing
    let date = new Date();
    date.setDate(30);
    this.initializeCountdown(date);
  }
  //initialize the countdouwn
  initializeCountdown(endtime) {
    var timeinterval = setInterval(function () {
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
        clearInterval(timeinterval);
      }
    }, 1000);
  }

  getEventData = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("eventId");

    console.log(id);

    this.setState({ eventId: id });

    Axios.get(`/api/create/eventcreate`)
      .then((response) => {
        console.log(response.data);
        this.setState({ eventData: response.data });

        const filteredId = this.state.eventData.filter(
          (detail) => detail.id == this.state.eventId
        );

        this.setState({ eventData: filteredId });
        console.log(this.state.eventData);

        const UserId = this.state.eventData.map((data) => data.UserId);
        const image = this.state.eventData.map((data) => data.image);
        this.setState({ eventImage: image, userId: UserId });

        this.getEventImageUrl();
        this.getProfileImage(this.state.userId);
        this.getUserRating();
      })
      .catch((err) => console.log(err));
  };

  getProfileImage = (userId) => {
    Axios.get(`/api/auth/image/${userId}`)
      .then((response) => {
        this.setState({
          profileImage: response.data,
        });
        console.log(this.state.profileImage);
        this.getProfileImageUrl();
      })
      .catch((err) => console.log(err));
  };

  getProfileImageUrl = () => {
    let fileName = this.state.profileImage.image_name;
    console.log(fileName);
    Storage.get(fileName)
      .then((data) => {
        console.log(data);
        this.setState({
          profileImageUrl: data,
        });
      })
      .catch((err) => console.log(err));
  };

  getEventImageUrl = () => {
    Storage.get(this.state.eventImage)
      .then((data) => {
        // console.log(data);
        this.setState({ eventImageUrl: data });
      })
      .catch((err) => console.log(err));
  };

  //   //   Post request to submit rating to DB
  postRating = (event) => {
    event.preventDefault();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("eventId");
    Axios.post(`/api/rate/event`, {
      rating: this.state.rating,
      EventId: id,
      UserId: this.state.userId,
    })
      .then((res) => {
        console.log(res);
        this.setState({ rating: "0", disabled: true });
      })
      .catch((err) => console.log(err));
  };

  //   click method to change star value
  onStarClick(nextValue) {
    this.setState({ rating: nextValue, disabled: false });
  }

  getUserRating = () => {
    Axios.get(`/api/rate/userprofile/${this.state.userId}`)
      .then((res) => {
        this.setState({ userRating: res.data });
        console.log(this.state.userRating);
      })
      .catch((err) => console.log(err));
  };

  starRating = () => {
    this.state.userRating.map((data) => (
      <StarRatingComponent name="rating" starCount={5} value={data.rating} />
    ));
  };

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
          placement="top"
          overlay={popover}
        >
          <Button
            disabled={this.state.disabled}
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

    const images = [
      {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
      },
      {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
      },
      {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
      },
    ];

    //google image asrc address
    const googleMapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=${address}+${city}+${eventState}`;
    return (
      <div class="wrapper2">
        <div class="container-fluid ">
          <div
            class="jumbotron background-img"
            style={{ marginBottom: " 0", borderBottom: "4rem solid #85dcba" }}
          >
            <div class="card flex-row  float-right border-0 style-contact-person">
              <div class="border-0">
                <img src={this.state.profileImageUrl} height="300px" alt="" />
              </div>
              <div class="card-body ">
                <h4>
                  <span>
                    <b>Contact: </b>
                  </span>
                  {contactPerson}
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
                <p class="card-text ">
                  <span>
                    <b>Website: </b>
                  </span>
                  {website}
                </p>
              </div>
            </div>

            <h1 class="display-4 text-white">{eventName}</h1>
            <p class="lead text-white">{date}</p>

            <p class="lead">
              <a
                class="btn btn-primary btn-lg"
                style={{ marginTop: "8rem" }}
                href="#"
                role="button"
              >
                Join Event
              </a>
            </p>
          </div>
        </div>

        {/* <!--count down reference https://codepen.io/techmariakhan/pen/ExKXjGv--> */}
        <div class="continer centerIt">
          <div>
            <label class="project-name text-center">Event Countdown:</label>
          </div>
          <div class="counter counter-div">
            <div class="days">
              <div class="value">00</div>
              <span>Days</span>
            </div>
            <div class="hours">
              <div class="value">00</div>
              <span>Hours</span>
            </div>
            <div class="minutes">
              <div class="value">00</div>
              <span>Minutes</span>
            </div>
            <div class="seconds">
              <div class="value">00</div>
              <span>Seconds</span>
            </div>
          </div>
        </div>

        <div class=" home-info-section">
          {/* <div class="container"> */}
          <div class="row justify-content-center">
            <div class="col-3 ">
              <figure>
                <img class="event-img" src={this.state.eventImageUrl} />
              </figure>
            </div>
            <div class="col-4">
              <header class="entry-header">
                <h2 class="entry-title text-white">About the event</h2>
              </header>
              <div>
                <p class="mt-3 text-white">{description}</p>
              </div>
            </div>
          </div>

          <div class="container mt-5 text-center text-white">
            <h1 class="text-white">Event Attendees</h1>
            {/* <section>
						<ImageGallery items={images} />
						</section> */}
          </div>
        </div>

        <div
          className="row justify-content-center mb-5"
          style={{ marginTop: "5rem" }}
        >
          <div className="col-4 text-center">
            <div className="card border-0  " style={{ width: "10rem;" }}>
              <div className="card-body shadow-lg p-3 rounded location-cardStyle">
                <div className="section-title">
                  <h2 className="text-white">Location</h2>
                  <p class="text-white">Get directions to our event center</p>
                </div>
                <div class="ct-address">
                  <span class="text-white">Address:</span>
                  <p class="text-white">
                    {address}, {city} {eventState}
                    <br />
                    United State
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="map-responsive text-center">
              <iframe
                className="rounded map-style"
                src={googleMapUrl}
                width="500"
                height="300"
                frameborder="0"
                allowfullscreen
              />
            </div>
          </div>
        </div>

        <div class=" home-info-section">
          <div class="row justify-content-center">
            <div className="row" style={{ marginTop: "40px;" }}>
              <div className="col-md-12">
                <div className="well well-sm">
                  <div class="text-center">
                    <h1 className=" leave-reviewbtn text-center mb-2">
                      Event Review
                    </h1>
                  </div>

                  <div
                    className="row"
                    id="post-review-box"
                    style={{ display: "none;" }}
                  >
                    <div className="col-md-12">
                      <form accept-charset="UTF-8" action="" method="post">
                        <input
                          id="ratings-hidden"
                          name="rating"
                          type="hidden"
                        />
                        <textarea
                          class="form-control animated"
                          cols="100"
                          id="new-review"
                          name="comment"
                          placeholder="Enter your review here..."
                          rows="5"
                        />

                        <div className="text-center">
                          <button
                            className="btn btn-lg save-btn mt-2"
                            type="submit"
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
          <div class="container bg-dark border border-primary rounded">
            <div
              class="row mt2 justify-content-around"
              style={scrollingContainer}
            >
              {this.state.reviewArray.map((item) => {
                return item.name;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
