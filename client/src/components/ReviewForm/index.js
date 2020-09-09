import React, { Component } from "react";
import { Auth } from "aws-amplify";
import Axios from "axios";
import "./style.css";

import StarRatingComponent from "react-star-rating-component";

export class ReviewForm extends Component {
  // state = {
  //   eventId: "",
  //   userId: "",
  //   eventData: [],
  //   userRating: [],
  // };
  // componentDidMount() {
  //   this.getEventData();
  // }

  // getEventData = () => {
  //   const id = JSON.parse(localStorage.getItem("eventId")).id;
  //   console.log(id);
  //   this.setState({ eventId: id });

  //   Axios.get(`/api/create/eventcreate`)
  //     .then((response) => {
  //       console.log(response.data);
  //       this.setState({ eventData: response.data });

  //       const filteredId = this.state.eventData.filter(
  //         (detail) => detail.id == this.state.eventId
  //       );
  //       const UserId = this.state.eventData.map((data) => data.UserId);
  //       this.setState({ eventData: filteredId, userId: UserId });

  //       this.getUserRating();
  //     })
  //     .catch((err) => console.log(err));
  // };

  // getUserRating = () => {
  //   Axios.get(`/api/rate/userprofile/${this.state.userId}`)
  //     .then((res) => {
  //       this.setState({ userRating: res.data });
  //       console.log(this.state.userRating);
  //     })
  //     .catch((err) => console.log(err));
  // };

  render() {
    console.log(this.props);
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

    // console.log(this.state.userRating);
    // const rating = this.state.userRating.map((data) => data.rating);

    // console.log(rating);

    // const starRating = (
    //   <StarRatingComponent name="rating" starCount={5} value={rating} />
    // );

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
