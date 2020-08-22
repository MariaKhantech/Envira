import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGlobe,
  faCalendarDay,
  faMapMarkerAlt,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";

export default class index extends Component {
  envelopeIcon = (<FontAwesomeIcon icon={faEnvelope} />);
  globeIcon = (<FontAwesomeIcon icon={faGlobe} />);
  calendarIcon = (<FontAwesomeIcon icon={faCalendarDay} />);
  mapIcon = (<FontAwesomeIcon icon={faMapMarkerAlt} />);
  infoIcon = (<FontAwesomeIcon icon={faInfo} size="1x" />);

  render() {
    console.log(this.props.state);
    return (
      <Card className="p-2">
        <Card.Header>{this.props.state.company} </Card.Header>
        <Card.Img variant="top" src="http://placehold.it/250x200" />
        <Card.Body>
          <Card.Title className="text-center">
            {this.props.state.eventTitle}
          </Card.Title>
          <Card.Text className="text-center">
            <i>{this.envelopeIcon}</i>
            {this.props.state.email}
          </Card.Text>
          <Card.Text className="text-center">
            <i>{this.globeIcon}</i>
            {this.props.state.website}
          </Card.Text>
          <Card.Text className="text-center">
            <i>{this.calendarIcon}</i>
            {this.props.state.date}
          </Card.Text>
        </Card.Body>
        <Card.Body className="mx-auto">
          <Button variant="primary" size="sm">
            Attend
          </Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            {this.props.state.location}
            <i>{this.mapIcon}</i>
          </small>
          <Button
            variant="outline-dark"
            size="sm"
            className="rounded-circle float-right"
          >
            {this.infoIcon}
          </Button>
        </Card.Footer>
      </Card>
    );
  }
}
