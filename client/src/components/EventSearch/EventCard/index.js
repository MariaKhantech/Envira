import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class EventCard extends Component {
  render() {
    return (
      <Card className="p-2">
        <Card.Header name="company">Company </Card.Header>
        <Card.Img variant="top" src="http://placehold.it/250x200" />
        <Card.Body>
          <Card.Title className="text-center" name="eventTitle">
            Event Title
          </Card.Title>
          <Card.Text className="text-center" name="email">
            <i></i>email@email.com
          </Card.Text>
          <Card.Text className="text-center" name="website">
            <i></i>wwww.website.com
          </Card.Text>
          <Card.Text className="text-center" name="date">
            <i></i>
          </Card.Text>
        </Card.Body>
        <Card.Body className="mx-auto">
          <Button variant="primary" size="sm">
            Attend
          </Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted" name="location">
            <i></i>portsmouth
          </small>
          <Button
            variant="outline-dark"
            size="sm"
            className="rounded-circle float-right"
          ></Button>
        </Card.Footer>
      </Card>
    );
  }
}
