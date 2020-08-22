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
    const {
      company,
      eventTitle,
      email,
      website,
      date,
      location,
    } = this.state.props;
    return (
      <Card className="p-2">
        <Card.Header name="company">{company} </Card.Header>
        <Card.Img variant="top" src="http://placehold.it/250x200" />
        <Card.Body>
          <Card.Title className="text-center" name="eventTitle">
            {eventTitle}
          </Card.Title>
          <Card.Text className="text-center" name="email">
            <i>{this.envelopeIcon}</i>
            {email}
          </Card.Text>
          <Card.Text className="text-center" name="website">
            <i>{this.globeIcon}</i>
            {this.props.state.website}
          </Card.Text>
          <Card.Text className="text-center" name="date">
            <i>{this.calendarIcon}</i>
            {date}
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
