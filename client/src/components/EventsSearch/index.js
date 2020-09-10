import React, { Component } from "react";
import { Auth } from "aws-amplify";
import Axios from "axios";
import Search from "./Search/index";
import Carousel from "./Carousel/index";

import { Row, Col, Modal, Button, Jumbotron, Container } from "react-bootstrap";

import "./eventSearch.css";

export default class EventsSearch extends Component {
  state = {
    profile: [],
    href: "/eventcreate",
    filter: "Filter",
    alertTip1: true,
    alertTip2: true,
    buttonDisabled: false,
    searchDisabled: true,
    searchInput: "",
    introTitle: "Find and event",
    introText:
      " Select a filter using the filter drop down above to search for an event by city, location, event name, or conversely select 'Show All Events'",
    showModal: false,
    modalText: "",
    showCarousel: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    eventData: [],
    madeRequest: false,
  };

  async componentDidMount() {
    try {
      // get the current logged in user details
      const user = await Auth.currentAuthenticatedUser();
      // get username from user object
      const userDetail = user.username;
      // get the user details for logged in user from the User table
      Axios.get(`/api/auth/user/${userDetail}`)
        .then((response) => {
          this.setState({
            profile: response.data,
          });
        })
        .catch((err) => console.log(err));
    } catch (error) {
      if (error !== "No current user") {
        console.log(error);
        this.setState({
          buttonDisabled: true,
          alertTip1: false,
          alertTip2: false,
          href: "#",
        });
      }
    }
  }

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handleFilterOption = (event) => {
    this.setState({ filter: event.target.innerHTML, searchDisabled: false });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleFilterSubmit = (event) => {
    event.preventDefault();
    if (this.state.searchInput === "") {
      this.setState({
        showModal: true,
        modalText: "Please Enter a search input!",
        introTitle: "Find and event",
        introText:
          " Select a filter using the filter drop down above to search for an event by city, location, event name, or conversely select 'Show All Events'",
      });
    } else {
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
            if (filteredLocation == "") {
              this.setState({
                madeRequest: false,
                showModal: true,
                modalText: `No results found for ${this.state.searchInput}, please enter a valid location and try again`,
                searchInput: "",
                introTitle: "Find and event",
                introText:
                  " Select a filter using the filter drop down above to search for an event by city, location, event name, or conversely select 'Show All Events'",
              });
            } else {
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
          }
          if (
            this.state.filter === "Event Name" &&
            this.state.madeRequest === true
          ) {
            const filteredEv = this.state.eventData.filter(
              (detail) => detail.event_name === this.state.searchInput
            );
            if (filteredEv == "") {
              this.setState({
                madeRequest: false,
                showModal: true,
                modalText: `No results found for ${this.state.searchInput}, please enter a valid event name and try again`,
                searchInput: "",
                introTitle: "Find and event",
                introText:
                  " Select a filter using the filter drop down above to search for an event by city, location, event name, or conversely select 'Show All Events'",
              });
            } else {
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
          }
        },
        (error) => {
          this.setState({
            error,
          });
        },
        this.setState({ madeRequest: false, showCarousel: false, open: false })
      );
    }
  };

  handleShowAll = (event) => {
    event.preventDefault();
    Axios.get("/api/create/eventcreate").then(
      (response) => {
        this.setState({
          eventData: response.data,
          madeRequest: true,
        });
      },
      (error) => {
        this.setState({
          error,
        });
      },
      this.setState({ madeRequest: false })
    );
    if (this.state.eventData == "") {
      this.setState({
        showModal: true,
        modalText: `No events to show at this time!`,
        searchInput: "",
        introTitle: "Find and event",
        introText:
          " Select a filter using the filter drop down above to search for an event by city, location, event name, or conversely select 'Show All Events'",
      });
    } else {
      this.setState({
        introTitle: "",
        introText: "",
        showCarousel: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    }
  };

  render() {
    let renderCarousel = null;
    if (this.state.showCarousel === true) {
      renderCarousel = <Carousel state={this.state} />;
    } else if (this.state.showCarousel === "") {
      renderCarousel = null;
    }

    return (
      <>
        <Jumbotron id="jumbo1">
          <Container fluid>
            <h1 class="display-4 text-white">Event Search</h1>
          </Container>
        </Jumbotron>

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

        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton id="errorHeader">
            <Modal.Title>ERROR!</Modal.Title>
          </Modal.Header>
          <Modal.Body id="errorBody">{this.state.modalText} </Modal.Body>
          <Modal.Footer id="errorFooter">
            <Button id="errorBtn" onClick={this.handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
