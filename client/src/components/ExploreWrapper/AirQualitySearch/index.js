import React, { Component } from "react";
import moment from "moment";

import {
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Card,
  Fade,
  Container,
  ListGroup,
  Modal,
} from "react-bootstrap";

import ReactTooltip from "react-tooltip";

import Axios from "axios";

import "./aqiSearch.css";

export default class AirQualitySearch extends Component {
  state = {
    aqiData: [],
    cityInput: "",
    currentAqi: "",
    currentCity: "Welcome to AQI  Search",
    open: false,
    date: "",
    boxColor: "",
    status: "",
    toolTip: true,
    healthMessage: "",
    cautionMessage: "",
    madeRequest: false,
    showModal: false,
    modalText: "",
    showIntroCard: true,
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleInputSubmit = (event) => {
    event.preventDefault();
    if (this.state.cityInput === "") {
      this.setState({
        showModal: true,
        modalText: "Please enter a search input!",
      });
    } else {
      Axios.get(
        `https://api.waqi.info/feed/${this.state.cityInput}/?token=e6e31a62a9defccb8a38e8f3b7defd42e8d929c6`
      ).then(
        (response) => {
          console.log(response);
          if (response == "") {
            this.setState({
              madeRequest: false,
              showModal: true,
              modalText: `No results found for ${this.state.cityInput}, please enter a valid city and try again`,
              cityInput: "",
              showIntroCard: true,
            });
          } else {
            this.setState({
              aqiData: [response.data],
              madeRequest: true,
              date: moment(response.data.data.time.s).format(
                "MMMM Do YYYY, h:mm a"
              ),
              currentAqi: response.data.data.aqi,
              currentCity: response.data.data.city.name,
              showIntroCard: false,
              open: true,
            });

            if (this.state.currentAqi >= 0 && this.state.currentAqi <= 50) {
              this.setState({
                boxColor: "#009966",
                status: "Good",
                toolTip: false,
                healthMessage:
                  "Air quality is considered satisfactory, and air pollution poses little or no risk",
                cautionMessage: "None",
              });
            }
            if (this.state.currentAqi >= 51 && this.state.currentAqi <= 100) {
              this.setState({
                boxColor: "#FFDE33",
                status: "Moderate",
                toolTip: false,
                healthMessage:
                  "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.",
                cautionMessage:
                  "Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.",
              });
            }
            if (this.state.currentAqi >= 101 && this.state.currentAqi <= 150) {
              this.setState({
                boxColor: "#FF9933",
                status: "Unhealthy for Sensitive Groups",
                toolTip: false,
                healthMessage:
                  "Members of sensitive groups may experience health effects. The general public is not likely to be affected.",
                cautionMessage:
                  "Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.",
              });
            }
            if (this.state.currentAqi >= 151 && this.state.currentAqi <= 200) {
              this.setState({
                boxColor: "#CC0033",
                status: "Unhealthy",
                toolTip: false,
                healthMessage:
                  "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects",
                cautionMessage:
                  "Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion",
              });
            }
            if (this.state.currentAqi >= 201 && this.state.currentAqi <= 299) {
              this.setState({
                boxColor: "#660099",
                status: "Very Unhealthy",
                toolTip: false,
                healthMessage:
                  "Health warnings of emergency conditions. The entire population is more likely to be affected",
                cautionMessage:
                  "Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.",
              });
            }
            if (this.state.currentAqi >= 300) {
              this.setState({
                boxColor: "#7E0023",
                status: "Hazardous",
                healthMessage:
                  "Health alert: everyone may experience more serious health effects",
                cautionMessage: "Everyone should avoid all outdoor exertion",
              });
            }
          }
        },
        (error) => {
          this.setState({
            error,
          });
        },

        this.setState({
          madeRequest: false,
          cityInput: "",
          date: "",
          status: "",
          healthMessage: "",
          open: false,
        })
      );
    }
  };

  render() {
    let renderIntroCard;

    if (this.state.open === true) {
      renderIntroCard = null;
    } else if (this.state.open === false) {
      renderIntroCard = (
        <Row>
          <Col md={10} className="mx-auto mt-3 mb-3">
            <Card className="mx-auto" id="aqiIntroCard">
              <Card.Header id="aqiIntroCardHeader">
                <Card.Title
                  className="text-center mt-2"
                  style={{ fontSize: "28px" }}
                >
                  What is AQI?
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <ul className="list-group list-group-flush" id="aqiIntro">
                  <li className="list-group list-group-flush ">
                    What is the Air Quality Index (AQI)?
                  </li>
                  <li
                    className="list-group list-group-flush mt-2"
                    style={{ fontSize: "14px" }}
                  >
                    The AQI is EPA’s index for reporting air quality.
                  </li>
                </ul>

                <ul className="list-group list-group-flush mt-2" id="aqiDef">
                  <li className="list-group list-group-flush mt-2">
                    How does the AQI work?
                  </li>
                  <li
                    className="list-group list-group-flush mt-2"
                    style={{ fontSize: "14px" }}
                  >
                    Think of the AQI as a yardstick that runs from 0 to 500. The
                    higher the AQI value, the greater the level of air pollution
                    and the greater the health concern. For example, an AQI
                    value of 50 or below represents good air quality, while an
                    AQI value over 300 represents hazardous air quality.
                  </li>
                  <li
                    className="list-group list-group-flush mt-2"
                    style={{ fontSize: "14px" }}
                  >
                    For each pollutant an AQI value of 100 generally corresponds
                    to an ambient air concentration that equals the level of the
                    short-term national ambient air quality standard for
                    protection of public health. AQI values at or below 100 are
                    generally thought of as satisfactory. When AQI values are
                    above 100, air quality is unhealthy: at first for certain
                    sensitive groups of people, then for everyone as AQI values
                    get higher.
                  </li>
                  <li
                    className="list-group list-group-flush mt-2"
                    style={{ fontSize: "14px" }}
                  >
                    The AQI is divided into six categories. Each category
                    corresponds to a different level of health concern. Each
                    category also has a specific color. The color makes it easy
                    for people to quickly determine whether air quality is
                    reaching unhealthy levels in their communities.
                  </li>
                </ul>
              </Card.Body>
              <Card.Footer
                id="aqiIntroCardFooter"
                className="text-body text-center"
              >
                To use AQI Search, input a city in the search bar above to get
                the latest AQI, health concerns, and caution warnings.
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      );
    }

    const {
      aqiData,
      currentAqi,
      currentCity,
      boxColor,
      healthMessage,
    } = this.state;

    const aqiBox = {
      backgroundColor: boxColor,
      border: "none",
      borderRadius: "10px",
      padding: "5px 15px",
    };

    return (
      <>
        <Row>
          <Col md={12} className="mx-auto mt-3  ">
            <InputGroup className="mb-3">
              <FormControl
                type="text"
                name="cityInput"
                value={this.state.cityInput}
                placeholder="Enter a City"
                onChange={this.onChange}
              />
              <InputGroup.Append>
                <Button onClick={this.handleInputSubmit} id="aqiBtn">
                  <i className="fa fa-search"></i>
                </Button>
              </InputGroup.Append>
            </InputGroup>
            <Col md={12} id="wrapper" className="p-4 mb-3">
              <Container fluid className="px-1 px-md-4 py-5 mx-auto">
                {renderIntroCard}
                <Fade in={this.state.open}>
                  <Row className="d-flex justify-content-center px-3">
                    <Card className="text-white" id="aqiCard">
                      <h2 className="mr-auto ml-4 mt-3 mb-0">
                        City/Station: {currentCity}
                      </h2>
                      <p className="mr-auto ml-4 mb-0" id="med-font">
                        Current Status: {this.state.status}
                      </p>
                      <h1
                        className="mr-auto ml-4 t text-white"
                        id="large-font"
                        data-tip
                        data-for="chartTip"
                        style={aqiBox}
                      >
                        {currentAqi}
                      </h1>
                      <ReactTooltip
                        disable={this.state.toolTip}
                        id="chartTip"
                        className="opaque"
                        border="white"
                        clickable="true"
                        type="dark"
                        place="bottom"
                        effect="solid"
                      >
                        <Card style={{ width: "22rem" }}>
                          <Card.Body>
                            <Card.Title className="text-body ">
                              {this.state.status}
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted ">
                              {healthMessage}
                            </Card.Subtitle>
                            <Card.Text className="text-body">
                              <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-start align-items-center">
                                  <span
                                    className="text-center badge"
                                    style={{
                                      backgroundColor: "#009966",
                                      padding: "5px 10px 5px 10px ",
                                      color: "#fff",
                                      borderRadius: "5px",
                                      margin: "0px 10px 0px 0px",
                                      fontSize: "15px",
                                    }}
                                  >
                                    0-50
                                  </span>
                                  Good
                                </li>
                                <li className="list-group-item d-flex justify-content-start align-items-center">
                                  <span
                                    className="text-center badge"
                                    style={{
                                      backgroundColor: "#FFDE33",
                                      padding: "5px 10px 5px 10px ",
                                      color: "#fff",
                                      borderRadius: "5px",
                                      margin: "0px 10px 0px 0px",
                                      fontSize: "15px",
                                    }}
                                  >
                                    51-100
                                  </span>
                                  Moderate
                                </li>
                                <li className="list-group-item d-flex justify-content-start align-items-center">
                                  <span
                                    className="text-center badge"
                                    style={{
                                      backgroundColor: "#FF9933",
                                      padding: "5px 10px 5px 10px ",
                                      color: "#fff",
                                      borderRadius: "5px",
                                      margin: "0px 10px 0px 0px",
                                      fontSize: "15px",
                                    }}
                                  >
                                    101-150
                                  </span>
                                  Unhealthy for Sensitive Groups
                                </li>
                                <li className="list-group-item d-flex justify-content-start align-items-center">
                                  <span
                                    className="text-center badge"
                                    style={{
                                      backgroundColor: "#CC0033",
                                      padding: "5px 10px 5px 10px ",
                                      color: "#fff",
                                      borderRadius: "5px",
                                      margin: "0px 10px 0px 0px",
                                      fontSize: "15px",
                                    }}
                                  >
                                    151-200
                                  </span>
                                  Unhealthy
                                </li>
                                <li className="list-group-item d-flex justify-content-start align-items-center">
                                  <span
                                    className="text-center badge"
                                    style={{
                                      backgroundColor: "#660099",
                                      padding: "5px 10px 5px 10px ",
                                      color: "#fff",
                                      borderRadius: "5px",
                                      margin: "0px 10px 0px 0px",
                                      fontSize: "15px",
                                    }}
                                  >
                                    201-300
                                  </span>
                                  Very UnHealthy
                                </li>
                                <li className="list-group-item d-flex justify-content-start align-items-center">
                                  <span
                                    className="text-center badge"
                                    style={{
                                      backgroundColor: "#7E0023",
                                      padding: "5px 10px 5px 10px ",
                                      color: "#fff",
                                      borderRadius: "5px",
                                      margin: "0px 10px 0px 0px",
                                      fontSize: "15px",
                                    }}
                                  >
                                    300+
                                  </span>
                                  Hazardous
                                </li>
                              </ul>
                            </Card.Text>
                            <Card.Link
                              href="https://aqicn.org/scale/"
                              target="_blank"
                            >
                              Click for more information on AQI and scale
                            </Card.Link>
                          </Card.Body>
                        </Card>
                      </ReactTooltip>

                      <ListGroup horizontal className=" ml-auto mt-auto">
                        <ListGroup.Item className="message">
                          <p>
                            <i
                              show={this.state.show}
                              data-tip
                              data-for="healthTip"
                              className="fa fa-medkit fa-2x"
                            ></i>
                            <ReactTooltip
                              disable={this.state.toolTip}
                              id="healthTip"
                              className="opaque"
                              border="white"
                              type="dark"
                              place="left"
                              effect="solid"
                            >
                              <strong>Health Implication:</strong>{" "}
                              {this.state.healthMessage}
                            </ReactTooltip>
                          </p>
                        </ListGroup.Item>
                        <ListGroup.Item className="message">
                          <p>
                            <i
                              className="fa fa-exclamation-triangle fa-2x"
                              data-tip
                              data-for="cautionTip"
                            ></i>
                            <ReactTooltip
                              disable={this.state.toolTip}
                              id="cautionTip"
                              className="opaque"
                              type="dark"
                              border="white"
                              place="top"
                              effect="solid"
                              show={this.state.show}
                            >
                              <strong>Caution:</strong>{" "}
                              {this.state.cautionMessage}
                            </ReactTooltip>
                          </p>
                        </ListGroup.Item>
                      </ListGroup>
                      <p className=" mr-4 text-right mb-4" id="date">
                        Last Update: {this.state.date}
                      </p>
                    </Card>
                  </Row>
                </Fade>
              </Container>
            </Col>
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
