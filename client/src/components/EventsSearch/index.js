import React, { Component } from "react";
import Axios from "axios";
import { Storage } from "aws-amplify";
import Search from "./Search/index";
import Carousel from "./Carousel/index";

import { Row, Col } from "react-bootstrap";

import "./eventSearch.css";

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
    images: [],
    imagePreviewUrl: [],
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
        const image = this.state.eventData.map((data) => data.image);
        this.setState({ images: image });
        console.log(this.state.images);

        this.getImageUrl();
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
      slidesToShow: 1,
      slidesToScroll: 1,
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

  getImageUrl = () => {
    for (let i = 0; i < this.state.images.length; i++) {
      Storage.get(this.state.images[i])
        .then((data) => {
          // console.log(data);
          this.state.imagePreviewUrl.push(data);
          console.log(this.state.imagePreviewUrl);
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    let renderCarousel = null;
    if (this.state.showCarousel === true) {
      renderCarousel = (
        <Carousel
          state={this.state}
          handleViewEvent={this.handleViewEvent}
          getImageUrl={this.state.getImageUrl}
        />
      );
    } else if (this.state.showCarousel === "") {
      renderCarousel = null;
    }

    const image = this.state.imagePreviewUrl.map((data, i) => (
      <img alt="image" src={data} key={i} />
    ));

    console.log(image);

    console.log(this.state.imagePreviewUrl);

    return (
      <>
        {image}
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
