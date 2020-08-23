import React, { Component } from "react";
import EventCard from "../EventCard/index";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardDeck from "react-bootstrap/CardDeck";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import "./style.css";

export default class Carousel extends Component {
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
                  <EventCard state={this.props.state} />
                  {/* CARD 2 */}
                  <EventCard state={this.props.state} />
                  {/* CARD 3 */}
                  <EventCard state={this.props.state} />
                </CardDeck>
              </Slide>
              <Slide index={1}>
                {/* CARDDECK 2 */}
                <CardDeck>
                  {/* CARD 1 */}
                  <EventCard state={this.props.state} />
                  {/* CARD 2 */}
                  <EventCard state={this.props.state} />
                  {/* CARD 3 */}
                  <EventCard state={this.props.state} />
                </CardDeck>
              </Slide>
              <Slide index={2}>
                {/* CARDDeck 3 */}
                <CardDeck>
                  {/* CARD 1 */}
                  <EventCard state={this.props.state} />
                  {/* CARD 2 */}
                  <EventCard state={this.props.state} />
                  {/* CARD 3 */}
                  <EventCard state={this.props.state} />
                </CardDeck>
              </Slide>
            </Slider>
            <ButtonBack className="carouselButtonLeft btn-outline-dark">
              <i className="fa fa-chevron-left"></i>
            </ButtonBack>

            <ButtonNext className="carouselButtonRight btn-outline-dark">
              <i className="fa fa-chevron-right"></i>
            </ButtonNext>
            <DotGroup className="carouselControl" />
          </CarouselProvider>
        </Col>
      </Row>
    );
  }
}
