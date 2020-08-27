import React, { Component } from "react";
import EventsSearch from "../components/EventsSearch/index";
import Container from "react-bootstrap/Container";

export default class EventSearch extends Component {
  render() {
    return (
      <Container>
        <EventsSearch />
      </Container>
    );
  }
}
