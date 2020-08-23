import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class EventCard extends Component {
  render() {
    const {
      company,
      eventTitle,
      email,
      website,
      date,
      location,
    } = this.props.state;

    return (
      <Card className="p-2">
        <Card.Header name="company">{company} </Card.Header>
        <Card.Img variant="top" src="http://placehold.it/250x200" />
        <Card.Body>
          <Card.Title className="text-center" name="eventTitle">
            {eventTitle}
          </Card.Title>
          <Card.Text className="text-center" name="email">
            <i className="fa fa-envelope"></i> {email}
          </Card.Text>
          <Card.Text className="text-center" name="website">
            <i className="fa fa-globe"></i> {website}
          </Card.Text>
          <Card.Text className="text-center" name="date">
            <i className="fa fa-calendar"></i> {date}
          </Card.Text>
        </Card.Body>
        <Card.Body className="mx-auto">
          <Button variant="primary" size="sm">
            Attend
          </Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted" name="location">
            {location}
            <i className="ml-1 fa fa-map-pin"></i>
          </small>
        </Card.Footer>
      </Card>
    );
  }
}
