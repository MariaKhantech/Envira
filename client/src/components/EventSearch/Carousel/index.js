import React, { Component } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faEnvelope,
  faGlobe,
  faCalendarDay,
  faMapMarkerAlt,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";

export default class Carousel extends Component {
  leftIcon = (<FontAwesomeIcon icon={faChevronLeft} />);
  rightIcon = (<FontAwesomeIcon icon={faChevronRight} />);
  envelopeIcon = (<FontAwesomeIcon icon={faEnvelope} />);
  globeIcon = (<FontAwesomeIcon icon={faGlobe} />);
  calendarIcon = (<FontAwesomeIcon icon={faCalendarDay} />);
  mapIcon = (<FontAwesomeIcon icon={faMapMarkerAlt} />);
  infoIcon = (<FontAwesomeIcon icon={faInfo} size="1x" />);

  render() {
    return (
      <Row>
        <Col md={10} className="mx-auto mt-5">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={150}
            totalSlides={3}
          >
            <Slider>
              <Slide index={0}>
                {/* CARDDECK 1 */}
                <CardDeck>
                  {/* CARD 1 */}
                  <Card className="p-2">
                    <Card.Header>Company </Card.Header>
                    <Card.Img variant="top" src="http://placehold.it/250x200" />
                    <Card.Body>
                      <Card.Title className="text-center">
                        Event title
                      </Card.Title>
                      <Card.Text className="text-center">
                        <i>{this.envelopeIcon}</i> myemail@email.com
                      </Card.Text>
                      <Card.Text className="text-center">
                        <i>{this.globeIcon}</i> www.myWebsite.com
                      </Card.Text>
                      <Card.Text className="text-center">
                        <i>{this.calendarIcon}</i> September 1st, 2020
                      </Card.Text>
                    </Card.Body>
                    <Card.Body className="mx-auto">
                      <Button variant="primary" size="sm">
                        Attend
                      </Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Portsmouth <i>{this.mapIcon}</i>
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
                  {/* CARD 2 */}
                  <Card className="p-2">
                    <Card.Header>Company </Card.Header>
                    <Card.Img variant="top" src="http://placehold.it/250x200" />
                    <Card.Body>
                      <Card.Title className="text-center">
                        Event title
                      </Card.Title>
                      <Card.Text className="text-center">
                        <i>{this.envelopeIcon}</i> myemail@email.com
                      </Card.Text>
                      <Card.Text className="text-center">
                        <i>{this.globeIcon}</i> www.myWebsite.com
                      </Card.Text>
                      <Card.Text className="text-center">
                        <i>{this.calendarIcon}</i> September 1st, 2020
                      </Card.Text>
                    </Card.Body>
                    <Card.Body className="mx-auto">
                      <Button variant="primary" size="sm">
                        Attend
                      </Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Portsmouth <i>{this.mapIcon}</i>
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
                  {/* CARD 3 */}
                  <Card className="p-2">
                    <Card.Header>Company </Card.Header>
                    <Card.Img variant="top" src="http://placehold.it/250x200" />
                    <Card.Body>
                      <Card.Title className="text-center">
                        Event title
                      </Card.Title>
                      <Card.Text className="text-center">
                        <i>{this.envelopeIcon}</i> myemail@email.com
                      </Card.Text>
                      <Card.Text className="text-center">
                        <i>{this.globeIcon}</i> www.myWebsite.com
                      </Card.Text>
                      <Card.Text className="text-center">
                        <i>{this.calendarIcon}</i> September 1st, 2020
                      </Card.Text>
                    </Card.Body>
                    <Card.Body className="mx-auto">
                      <Button variant="primary" size="sm">
                        Attend
                      </Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Portsmouth <i>{this.mapIcon}</i>
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
                </CardDeck>
              </Slide>
              <Slide index={1}>
                {/* CARDDECK 2 */}
                <CardDeck>
                  {/* CARDDECK 1 */}
                  <Card className="p-2">
                    <Card.Header>Company </Card.Header>
                    <Card.Img variant="top" src="http://placehold.it/250x200" />
                    <Card.Body>
                      <Card.Title className="text-center">
                        Event title
                      </Card.Title>
                      <Card.Text className="text-center">
                        <i>{this.envelopeIcon}</i> myemail@email.com
                      </Card.Text>
                      <Card.Text className="text-center">
                        <i>{this.globeIcon}</i> www.myWebsite.com
                      </Card.Text>
                      <Card.Text className="text-center">
                        <i>{this.calendarIcon}</i> September 1st, 2020
                      </Card.Text>
                    </Card.Body>
                    <Card.Body className="mx-auto">
                      <Button variant="primary" size="sm">
                        Attend
                      </Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Portsmouth <i>{this.mapIcon}</i>
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
                  {/* CARD 2 */}
                  <Card className="p-2">
                    <Card.Header>Company </Card.Header>
                    <Card.Img variant="top" src="http://placehold.it/250x200" />
                    <Card.Body>
                      <Card.Title className="text-center">
                        Event title
                      </Card.Title>
                      <Card.Text className="text-center">
                        <i>{this.envelopeIcon}</i> myemail@email.com
                      </Card.Text>
                      <Card.Text className="text-center">
                        <i>{this.globeIcon}</i> www.myWebsite.com
                      </Card.Text>
                      <Card.Text className="text-center">
                        <i>{this.calendarIcon}</i> September 1st, 2020
                      </Card.Text>
                    </Card.Body>
                    <Card.Body className="mx-auto">
                      <Button variant="primary" size="sm">
                        Attend
                      </Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Portsmouth <i>{this.mapIcon}</i>
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
                  {/* CARD 3 */}
                  <Card className="p-2">
                    <Card.Header>Company </Card.Header>
                    <Card.Img variant="top" src="http://placehold.it/250x200" />
                    <Card.Body>
                      <Card.Title className="text-center">
                        Event title
                      </Card.Title>
                      <Card.Text className="text-center">
                        <i>{this.envelopeIcon}</i> myemail@email.com
                      </Card.Text>
                      <Card.Text className="text-center">
                        <i>{this.globeIcon}</i> www.myWebsite.com
                      </Card.Text>
                      <Card.Text className="text-center">
                        <i>{this.calendarIcon}</i> September 1st, 2020
                      </Card.Text>
                    </Card.Body>
                    <Card.Body className="mx-auto">
                      <Button variant="primary" size="sm">
                        Attend
                      </Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Portsmouth <i>{this.mapIcon}</i>
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
                </CardDeck>
              </Slide>
              <Slide index={2}>
                {/* CARDDeck 3 */}
                <CardDeck>
                  {/* CARD 1 */}
                  <Card className="p-2">
                    <Card.Header>Company </Card.Header>
                    <Card.Img variant="top" src="http://placehold.it/250x200" />
                    <Card.Body>
                      <Card.Title className="text-center">
                        Event title
                      </Card.Title>
                      <Card.Text className="text-center">
                        <i>{this.envelopeIcon}</i> myemail@email.com
                      </Card.Text>
                      <Card.Text className="text-center">
                        <i>{this.globeIcon}</i> www.myWebsite.com
                      </Card.Text>
                      <Card.Text className="text-center">
                        <i>{this.calendarIcon}</i> September 1st, 2020
                      </Card.Text>
                    </Card.Body>
                    <Card.Body className="mx-auto">
                      <Button variant="primary" size="sm">
                        Attend
                      </Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Portsmouth <i>{this.mapIcon}</i>
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
                  {/* CARD 2 */}
                  <Card className="p-2">
                    <Card.Header>Company </Card.Header>
                    <Card.Img variant="top" src="http://placehold.it/250x200" />
                    <Card.Body>
                      <Card.Title className="text-center">
                        Event title
                      </Card.Title>
                      <Card.Text className="text-center">
                        <i>{this.envelopeIcon}</i> myemail@email.com
                      </Card.Text>
                      <Card.Text className="text-center">
                        <i>{this.globeIcon}</i> www.myWebsite.com
                      </Card.Text>
                      <Card.Text className="text-center">
                        <i>{this.calendarIcon}</i> September 1st, 2020
                      </Card.Text>
                    </Card.Body>
                    <Card.Body className="mx-auto">
                      <Button variant="primary" size="sm">
                        Attend
                      </Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Portsmouth <i>{this.mapIcon}</i>
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
                  {/* CARD 3 */}
                  <Card className="p-2">
                    <Card.Header>Company </Card.Header>
                    <Card.Img variant="top" src="http://placehold.it/250x200" />
                    <Card.Body>
                      <Card.Title className="text-center">
                        Event title
                      </Card.Title>
                      <Card.Text className="text-center">
                        <i>{this.envelopeIcon}</i> myemail@email.com
                      </Card.Text>
                      <Card.Text className="text-center">
                        <i>{this.globeIcon}</i> www.myWebsite.com
                      </Card.Text>
                      <Card.Text className="text-center">
                        <i>{this.calendarIcon}</i> September 1st, 2020
                      </Card.Text>
                    </Card.Body>
                    <Card.Body className="mx-auto">
                      <Button variant="primary" size="sm">
                        Attend
                      </Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Portsmouth <i>{this.mapIcon}</i>
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
                </CardDeck>
              </Slide>
            </Slider>
            <ButtonBack className="carouselButtonLeft btn-outline-dark">
              {this.leftIcon}
            </ButtonBack>

            <ButtonNext className="carouselButtonRight btn-outline-dark">
              {this.rightIcon}
            </ButtonNext>
            <DotGroup className="carouselControl" />
          </CarouselProvider>
        </Col>
      </Row>
    );
  }
}
