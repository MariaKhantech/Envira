import React, { Component } from "react";
import { Auth } from "aws-amplify";
import Axios from "axios";
import Search from "./Search/index";
import Carousel from "./Carousel/index";

import {
  Row,
  Col,
  Modal,
  Button,
  Jumbotron,
  Container,
  Card,
} from "react-bootstrap";

import "./eventSearch.css";

export default class EventsSearch extends Component {
  state = {
    profile: [],
    href: "/eventcreate",
    filter: "Filter",
    alertTip2: true,
    searchDisabled: true,
    searchInput: "",
    showModal: false,
    modalText: "",
    showCarousel: false,
    showIntroCard: true,
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
        modalText: "Please enter a search input!",
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
                showIntroCard: true,
              });
            } else {
              this.setState({
                eventData: filteredLocation,
                showIntroCard: false,
                showCarousel: true,
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
                showIntroCard: true,
                modalText: `No results found for ${this.state.searchInput}, please enter a valid event name and try again`,
                searchInput: "",
              });
            } else {
              this.setState({
                eventData: filteredEv,
                showIntroCard: false,
                showCarousel: true,
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

        if (this.state.eventData == "") {
          this.setState({
            showModal: true,
            modalText: `No events to show at this time!`,
            searchInput: "",
            showIntroCard: true,
          });
        } else {
          this.setState({
            introTitle: "",
            introText: "",
            showIntroCard: false,
            showCarousel: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            madeRequest: false,
          });
        }
      },
      (error) => {
        this.setState({
          error,
        });
      }
    );
  };

  render() {
    let renderCarousel = null;
    let renderIntroCard = (
      // <Row>
      //   <Col md={8} className="mx-auto mt-3 mb-3">
      <Card className="mx-auto" id="introCard">
        <Card.Header id="introCardHeader">
          <Card.Title className="text-center mt-2" style={{ fontSize: "28px" }}>
            How to Use Event Search
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <ul className="list-group list-group-flush">
            <li className="list-group-item" id="searchIns">
              Select the <strong>"Filter"</strong> dropdown located next to the
              search bar
            </li>
            <li className="list-group-item" id="searchIns">
              To browse by event name select <strong>"Event Name"</strong>,
              enter the name of the event you wish to view in the search bar,
              and then select the search button
            </li>
            <li className="list-group-item" id="searchIns">
              To browse by location select <strong>"Location"</strong>, enter
              the name of a city in the search bar, and then select the search
              button
            </li>
            <li className="list-group-item" id="searchIns">
              To browse all events select <strong>"Show All Events"</strong>
              and all events will be displayed
            </li>
          </ul>

          <ul className="list-group list-group-flush mt-2">
            <li className="list-group-item" id="otherIns">
              When you find an event you are interested in finding out more
              information on select the <strong>"View"</strong> button located
              on the event preview card and you will be redirected to the
              event's full page.
            </li>
            <li className="list-group-item" id="otherIns">
              If you wish to create an event select the
              <strong>"Create New Event"</strong> button and you will be
              directed to the "event create page";
            </li>
          </ul>
        </Card.Body>
        <Card.Footer id="introCardFooter" className="text-body text-center">
          Please note: You must be logged in to create events!
        </Card.Footer>
      </Card>
      //   </Col>
      // </Row>
    );

    if (this.state.showCarousel === true) {
      renderCarousel = <Carousel state={this.state} />;
      renderIntroCard = null;
    } else if (this.state.showCarousel === "") {
      renderCarousel = null;
    }

    return (
      <>
        <Jumbotron id="jumbo1">
          <Container fluid>
            <h1 className="display-4 text-white">Event Search</h1>
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

        <Row className="mx-auto">
          <Col md={10} id="carouselWrap" className="mx-auto mt-3 mb-5">
            <Row>
              <Col md={8} className="mx-auto mt-3 mb-3">
                {renderIntroCard}
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mx-auto">
                {renderCarousel}
              </Col>
            </Row>
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
