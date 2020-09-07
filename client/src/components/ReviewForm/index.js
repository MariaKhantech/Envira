import React, { Component } from "react";
import Axios from "axios";
import "./style.css";

import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

export class ReviewForm extends Component {
  state = {
    rating: 0,
    disabled: true,
  };

  //   //   Post request to submit rating to DB
  postRating = (event) => {
    event.preventDefault();
    const id = JSON.parse(localStorage.getItem("eventId")).id;
    console.log(id);
    Axios.post(`/api/rate/userprofile`, {
      rating: this.state.rating,
      EventId: id,
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

  render() {
    const pullLeft = {
      width: "35px;",
      lineHeight: "1",
    };

    const progress = {
      height: "9px;",
      margin: "8px 0;",
    };
    const div1 = {
      height: "9px;",
      margin: "5px 0;",
    };

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

    return (
      <div className=" col-5 review-block mb-5">
        <hr />

        <hr />

        <div className="col-12 text-center">
          <img
            src="../assets/imgs/rainforest/orangutans/babyorangutan.jpg"
            className="img-rounded review-img"
          />
          <div className="review-block-name">
            <a href="#">nktailor</a>
          </div>
          <div className="review-block-date">
            January 29, 2016
            <br />1 day ago
          </div>
        </div>
        <div className="col-12 text-center">
          {postStarRating}

          <div className="review-block-title">this was nice in buy</div>
          <div className="review-block-description">
            this was nice in buy. this was nice in buy. this was nice in buy.
            this was nice in buy this was nice in buy this was nice in buy this
            was nice in buy this was nice in buy
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewForm;
