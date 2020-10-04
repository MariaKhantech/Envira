import React, { Component } from "react";
import { Auth } from "aws-amplify";
import Axios from "axios";
import moment from "moment";
import { Link } from 'react-router-dom'
import "./style.css";

import StarRatingComponent from "react-star-rating-component";

export class ReviewForm extends Component {
  state = {
    rating: 0,
    disabled: true,
    reviewerImage:'',
    username:''

  }

  componentDidMount () {
    this.getReviewUser();
    this.getReviewerImage();
  }

  //get the details of the use from the USER table
  getReviewUser() {
    Axios.get(`/api/getreviewer/${this.props.comment.UserId}`)
			.then((response) => {
				console.log(response.data);
				this.setState({username:response.data.user_name})
			})
			.catch((err) => console.log(err));
  }

  getReviewerImage = () => {
    Axios.get(`/api/auth/image/${this.props.comment.UserId}`)
      .then((response) => {
        this.setState({
          reviewerImage: `https://envirabucket215241-dev.s3.amazonaws.com/public/${response.data.image_name}`,
        });
      })
      .catch((err) => console.log(err));
  };


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
      <div className=" col-5 review-block mb-5 mt-5">
        <hr />

        <hr />

        <div className="col-12 text-center">
          <img
            src={this.state.reviewerImage}
            className="img-rounded "
            width="100px"
            height="100px"
          />
          <div className="review-block-name">
             <Link to={{pathname: "/profile",search: `?username=${this.state.username}`}} >{this.state.username}</Link>
          </div>

          <div className="review-block-date">
          {moment(this.props.comment.createdAt).format("dddd, MMMM Do YYYY")}
          </div>
        </div>
        <div className="col-12 text-center">
          <div className="review-block-title">
              {this.props.comment.comment_detail}
          </div>
          {/* <div className="review-block-description">
            this was nice in buy. this was nice in buy. this was nice in buy.
            this was nice in buy this was nice in buy this was nice in buy this
            was nice in buy this was nice in buy
          </div> */}
        </div>
      </div>
    );
  }
}

export default ReviewForm;
