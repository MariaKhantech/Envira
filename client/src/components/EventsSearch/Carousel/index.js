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
    const renderCard = this.props.state.eventData.map((data) => (
      <Card className="p-2">
        <Card.Header name="organizer">{data.id}</Card.Header>
        <Card.Img variant="top" src="http://placehold.it/250x200" />
        <Card.Body>
          <Card.Title className="text-center" name="eventTitle">
            {data.event_name}
          </Card.Title>
          <Card.Text className="text-center" name="email">
            <i className="fa fa-envelope"></i> {data.contact_person}
          </Card.Text>
          <Card.Text className="text-center" name="website">
            <i className="fa fa-globe"></i> {data.contact_number}
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
            {data.address}
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
