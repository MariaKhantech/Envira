import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class EventCard extends Component {
  render() {
    // const {
    //   company,
    //   eventTitle,
    //   email,
    //   website,
    //   date,
    //   location,
    // } = this.props.state;

    return (
      <Card className="p-2">
        <Card.Header name="company">{data.company} </Card.Header>
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
        <Card.Body className="mx-auto">
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
    );
  }
}
