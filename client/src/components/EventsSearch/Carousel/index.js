import React, { Component } from "react";
import Slider from "react-slick";
import moment from "moment";
import { Button } from "react-bootstrap";

import "./carousel.css";

export default class Carousel extends Component {
  render() {
    const { handleViewEvent } = this.props;
    const renderCard = this.props.state.eventData.map((data) => (
      <div id="contact-box">
        <img
          alt="image"
          className="img-fluid mx-auto"
          style={{ borderRadius: "10px" }}
          src="http://placehold.it/250x200"
        />
        <h3 className="mx-auto text-center mt-2" name="event">
          <strong>{data.event_name}</strong>
        </h3>
        <h4 class="text-center">
          <i className="fa fa-calendar ml-1"></i>
          {moment(data.date).format("dddd, MMMM Do YYYY")}
        </h4>
        <ul id="contactList" className="p-1 ">
          <li>
            <i className="fa fa-user mr-1 ml-1 mt-2"></i>
            {data.contact_person}
          </li>
          <li>
            <i className="fa fa-envelope mr-1 ml-1 mt-2"></i>
            {data.contact_email}
          </li>
          <li>
            <i className="fa fa-phone mr-1  ml-1 mt-2"></i>
            {data.contact_number}
          </li>
        </ul>
        <div className="mt-1 mx-auto" id="contact-box-footer">
          <div className="mx-auto">
            <small style={{ color: "#32325d" }} name="location">
              {data.city}
              <i className="ml-1 fa fa-map-pin"></i>
            </small>
            <Button
              size="sm"
              className="float-right"
              key={data.id}
              value={data.id}
              onClick={handleViewEvent}
              style={{ backgroundColor: "#c38d9e", border: "none" }}
            >
              View
            </Button>
          </div>
        </div>
      </div>
    ));

    const carouselSettings = {
      dots: true,
      infinite: true,
      adaptiveHeight: true,
      speed: 500,
      slidesToShow: this.props.state.slidesToShow,
      slidesToScroll: this.props.state.slidesToScroll,
    };

    return (
      <Slider className="d-flex justify-content-center" {...carouselSettings}>
        {renderCard}
      </Slider>
    );
  }
}
