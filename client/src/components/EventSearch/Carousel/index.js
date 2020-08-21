import React, { Component } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";

export default class index extends Component {
  leftIcon = (<FontAwesomeIcon icon={faChevronLeft} />);
  rightIcon = (<FontAwesomeIcon icon={faChevronRight} />);

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
                <CardDeck>
                  <Card>
                    <Card.Img variant="top" src="http://placehold.it/250x200" />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="http://placehold.it/250x200" />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This card has supporting text below as a natural lead-in
                        to additional content.{" "}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="http://placehold.it/250x200" />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This card has
                        even longer content than the first to show that equal
                        height action.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </Card.Footer>
                  </Card>
                </CardDeck>
              </Slide>
              <Slide index={1}>Slide 2</Slide>
              <Slide index={2}>Slide 3</Slide>
            </Slider>
            <ButtonBack className="carouselButtonLeft btn-outline-dark">
              {this.leftIcon}
            </ButtonBack>

            <ButtonNext className="carouselButtonRight btn-outline-dark">
              {this.rightIcon}
            </ButtonNext>
          </CarouselProvider>
        </Col>
      </Row>
    );
  }
}
