import React, { Component } from "react";

import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";

import Axios from "axios";

import "./style.css";

export default class AirQualitySearch extends Component {
  state = {
    aqiData: [],
    cityInput: "",
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleInputSubmit = (event) => {
    event.preventDefault();
    if (this.state.cityInput === "") {
      alert("please enter a city");
    } else {
      Axios.get(
        `https://api.waqi.info/feed/${this.state.cityInput}/?token=e76fff504230a5ff145917055b7138ef3159918d`
      ).then((response) => this.setState({ aqiData: [response.data] }));

      this.setState({ cityInput: "" });
    }
  };
  render() {
    const { aqiData } = this.state;
    console.log(aqiData);

    const aqiBox = {
      backgroundColor: "green",
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
        <Col md={8} className="mx-auto mt-3">
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
              <h1 style={{ marginLeft: "15px" }}>Boston AQI</h1>
              <Col md={12}>
                <Row>
                  <Col md={3}>
                    <h1 id="aqiBox" className="mt-0 d-inline" style={aqiBox}>
                      30
                    </h1>
                  </Col>
                  <Col md={9}>
                    <ul style={status}>
                      <li>
                        <h2>Good</h2>
                      </li>
                      <li>
                        <h4>
                          Air quality is considered satisfactory, and air
                          pollution poses little or no risk
                        </h4>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          {/* /* {aqiData.map((city) => (
            <p>{city.data.aqi}</p> 
          ))} */}
        </Col>
      </Row>
    );
  }
}
