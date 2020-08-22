import React, { Component } from "react";
import EventSearch from "../components/EventSearch/index";
import Container from "react-bootstrap/Container";

export default class Events extends Component {
  state = {
    searchByTitle: "",
    searchByLocation: "",
    searchByKeyword: "",
  };

  render() {
    return (
      <Container>
        <EventSearch />
      </Container>
    );
  }
}
