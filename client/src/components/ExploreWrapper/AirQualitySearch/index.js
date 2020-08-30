import React, { Component } from "react";

import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";

import Axios from "axios";

import "./style.css";

export default class AirQualitySearch extends Component {
  state = {
    aqiData: [],
    cityInput: "",
    currentAqi: "",
    currentCity: "",
    boxColor: "",
    status: "",
    message: "",
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handlePollutionStatus = () => {
    if (this.state.currentAqi >= 0 && this.state.currentAqi <= 50) {
      this.setState({
        boxColor: "#009966",
        status: "Good",
        message:
          "Air quality is considered satisfactory, and air pollution poses little or no risk",
      });
    }
    if (this.state.currentAqi >= 51 && this.state.currentAqi <= 100) {
      this.setState({
        boxColor: "#FFDE33",
        status: "Moderate",
        message:
          "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.",
      });
    }
    if (this.state.currentAqi >= 101 && this.state.currentAqi <= 150) {
      this.setState({
        boxColor: "#FF9933",
        status: "Unhealthy for Sensitive Groups",
        message:
          "Members of sensitive groups may experience health effects. The general public is not likely to be affected.",
      });
    }
    if (this.state.currentAqi >= 151 && this.state.currentAqi <= 200) {
      this.setState({
        boxColor: "#CC0033",
        status: "Unhealthy",
        message:
          "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects",
      });
    }
    if (this.state.currentAqi >= 201 && this.state.currentAqi <= 299) {
      this.setState({
        boxColor: "#660099",
        status: "Very Unhealthy",
        message:
          "Health warnings of emergency conditions. The entire population is more likely to be affected",
      });
    }
    if (this.state.currentAqi >= 300) {
      this.setState({
        boxColor: "#7E0023",
        status: "Hazardous",
        message:
          "Health alert: everyone may experience more serious health effects",
      });
    }
  };

  handleInputSubmit = (event) => {
    event.preventDefault();

    if (this.state.cityInput === "") {
      alert("please enter a city");
    } else {
      Axios.get(
        `https://api.waqi.info/feed/${this.state.cityInput}/?token=e76fff504230a5ff145917055b7138ef3159918d`
      ).then((response) =>
        this.setState({
          aqiData: [response.data],
          currentAqi: response.data.data.aqi,
          currentCity: response.data.data.city.name,
        })
      );
      this.handlePollutionStatus();
      this.setState({ cityInput: "" });
    }
  };
  render() {
    const { aqiData, currentAqi, currentCity, boxColor } = this.state;
    console.log(aqiData, currentAqi, boxColor);

    const aqiBox = {
      backgroundColor: boxColor,
      fontSize: "80px",
      color: "#fff",
      border: "none",
      borderRadius: "10px",
      padding: "10px 20px 10px 20px",
    };

    const status = {
      margin: "0px 0px 0px 0px",
      listStyle: "none",
      padding: "0px 0px 0px 20px ",
    };

    return (
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
              <Button variant="primary" onClick={this.handleInputSubmit}>
                Button
              </Button>
            </InputGroup.Append>
          </InputGroup>
          <Col md={12} className=" p-3 mb-3 bg-light">
            <Row>
              <h1 style={{ marginLeft: "15px" }}>{currentCity} AQI</h1>
              <Col md={12}>
                <Row>
                  <Col md={3}>
                    <h1 id="aqiBox" className="mt-0 d-inline" style={aqiBox}>
                      {currentAqi}
                    </h1>
                  </Col>
                  <Col md={9}>
                    <ul style={status}>
                      <li>
                        <h2>{this.state.status}</h2>
                      </li>
                      <li>
                        <h4>{this.state.message}</h4>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
    );
  }
}
