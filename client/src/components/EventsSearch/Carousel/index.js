import React, { Component } from "react";
import Slider from "react-slick";
import moment from "moment";
import { Row, Col, Button } from "react-bootstrap";

import "./style.css";

export default class Carousel extends Component {
  render() {
    const renderCard = this.props.state.eventData.map((data) => (
      <div className="contact-box">
        <img
          alt="image"
          className="img-fluid mx-auto"
          src="http://placehold.it/250x200"
        />
        <h3 className="mx-auto text-center mt-2" key={data.id} name="event">
          <strong>{data.event_name}</strong>
        </h3>
        <h4 class="text-center">
          <i className="fa fa-calendar ml-1"></i>{" "}
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
        <div className="contact-box-footer mt-1 mx-auto">
          <div className="mx-auto">
            <small style={{ color: "#32325d" }} name="location">
              {data.city}
              <i className="ml-1 fa fa-map-pin"></i>
            </small>
            <Button
              size="sm"
              className="float-right"
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
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Row>
        <Col md={this.props.state.colSz} className="mx-auto mt-3">
          <Slider {...carouselSettings}>{renderCard}</Slider>
        </Col>
      </Row>
    );
  }
}
