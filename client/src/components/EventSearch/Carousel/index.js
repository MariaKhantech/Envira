import React, { Component } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default class index extends Component {
  render() {
    return (
      <Row>
        <Col md={6} className="mx-auto mt-5">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={150}
            totalSlides={3}
          >
            <Slider>
              <Slide index={0}>Slide 1</Slide>
              <Slide index={1}>Slide 2</Slide>
              <Slide index={2}>Slide 3</Slide>
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
          </CarouselProvider>
        </Col>
      </Row>
    );
  }
}
