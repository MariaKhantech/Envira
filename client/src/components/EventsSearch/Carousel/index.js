import React, { Component } from "react";
import Slider from "react-slick";
// import EventCard from "../EventCard/index";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./style.css";

export default class Carousel extends Component {
  render() {
    const renderCard = this.props.state.information.map((data) => (
      <Card className="p-2">
        <Card.Header name="organizer">{data.organizer}</Card.Header>
        <Card.Img variant="top" src={data.image} />
        <Card.Body>
          <Card.Title className="text-center" name="eventTitle">
            {data.eventTitle}
          </Card.Title>
          <Card.Text className="text-center" name="email">
            <i className="fa fa-envelope"></i> {data.email}
          </Card.Text>
          <Card.Text className="text-center" name="website">
            <i className="fa fa-globe"></i> {data.website}
          </Card.Text>
          <Card.Text className="text-center" name="date">
            <i className="fa fa-calendar"></i> {data.date}
          </Card.Text>
        </Card.Body>
        <Card.Body className="mx-auto text-center">
          <Button variant="primary" size="sm">
            Attend
          </Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted" name="location">
            {data.location}
            <i className="ml-1 fa fa-map-pin"></i>
          </small>
        </Card.Footer>
      </Card>
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
      <Row>
        <Col md={12} className="mx-auto mt-5">
          <Slider {...carouselSettings}>{renderCard}</Slider>
        </Col>
      </Row>
    );
  }
}
