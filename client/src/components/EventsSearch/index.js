import React, { Component } from "react";
import Axios from "axios";

import Search from "./Search/index";
import Carousel from "./Carousel/index";

import { Row, Col } from "react-bootstrap";

import "./style.css";

export default class EventsSearch extends Component {
  state = {
    filter: "Filter",
    disabled: true,
    searchInput: "",
    introTitle: "Find and event",
    introText:
      " Select a filter using the filter drop down above to search for an event by city, location, event name, or conversely select 'Show All Events'",
    showCarousel: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    eventData: [],
    madeRequest: false,
  };

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handleFilterOption = (event) => {
    this.setState({ filter: event.target.innerHTML, disabled: false });
  };

  handleFilterSubmit = (event) => {
    event.preventDefault();
    Axios.get("/api/create/eventcreate").then(
      (response) => {
        this.setState({
          eventData: response.data,
          madeRequest: true,
        });

        if (
          this.state.filter === "Location" &&
          this.state.madeRequest === true
        ) {
          const filteredLocation = this.state.eventData.filter(
            (detail) => detail.city === this.state.searchInput
          );
          this.setState({
            eventData: filteredLocation,

            introTitle: "",
            introText: "",
            showCarousel: true,
            slidesToShow: filteredLocation.length,
            slidesToScroll: filteredLocation.length,
            madeRequest: false,
            searchInput: "",
          });
        }
        if (
          this.state.filter === "Event Name" &&
          this.state.madeRequest === true
        ) {
          const filteredEv = this.state.eventData.filter(
            (detail) => detail.event_name === this.state.searchInput
          );
          this.setState({
            eventData: filteredEv,
            showCarousel: true,
            introTitle: "",
            introText: "",
            slidesToShow: filteredEv.length,
            slidesToScroll: filteredEv.length,
            madeRequest: false,
            searchInput: "",
          });
        }
      },
      (error) => {
        this.setState({
          error,
        });
      },
      this.setState({ madeRequest: false, showCarousel: false, open: false })
    );
  };

  handleShowAll = (event) => {
    event.preventDefault();
    Axios.get("/api/create/eventcreate").then(
      (response) => {
        this.setState({
          eventData: response.data,
          madeRequest: true,
        });
        console.log(this.state.eventData);
      },
      (error) => {
        this.setState({
          error,
        });
      },
      this.setState({ madeRequest: false })
    );
    this.setState({
      introTitle: "",
      introText: "",
      showCarousel: true,
      slidesToShow: 3,
      slidesToScroll: 3,
    });
  };

  handleViewEvent = (event) => {
    event.preventDefault();
    let selectedEvent = {
      id: event.target.value,
    };
    console.log(selectedEvent);
    localStorage.setItem("eventId", JSON.stringify(selectedEvent));
    window.location = "/eventspage";
  };

  render() {
    let renderCarousel = null;
    if (this.state.showCarousel === true) {
      renderCarousel = (
        <Carousel state={this.state} handleViewEvent={this.handleViewEvent} />
      );
    } else if (this.state.showCarousel === "") {
      renderCarousel = null;
    }
    console.log(this.state.eventData);

    return (
      <>
        <Search
          onChange={this.onChange}
          handleFilterOption={this.handleFilterOption}
          handleFilterSubmit={this.handleFilterSubmit}
          handleShowAll={this.handleShowAll}
          postNewEvent={this.postNewEvent}
          state={this.state}
        />

        <Row>
          <Col md={9} id="carouselWrap" className="mx-auto mt-3">
            <div>
              <h1 className="text-center">{this.state.introTitle}</h1>
              <p>{this.state.introText}</p>
            </div>
            {renderCarousel}
          </Col>
        </Row>
      </>
    );
  }
}
