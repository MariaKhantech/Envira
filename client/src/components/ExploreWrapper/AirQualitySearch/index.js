import React, { Component } from "react";

import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";

import Axios from "axios";

import "./style.css";

export default class AirQualitySearch extends Component {
  state = {
    aqiData: [],
    cityInput: "",
    showCity: false,
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
      this.setState({ showCity: true });
      this.setState({ cityInput: "" });
    }
  };
  render() {
    const { aqiData } = this.state;
    console.log(aqiData);

    // let renderCity = null;
    // if (this.state.showCity === true) {
    //   renderCity = this.state.aqiData.map((city) => <p>{city.data.aqi}</p>);
    // } else if (this.state.showCity === "") {
    //   renderCity = null;
    // }

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
        </Col>
        <Row>
          <Col md={12}>
            {aqiData.map((city) => (
              <p>{city.data.aqi}</p>
            ))}
          </Col>
        </Row>
      </Row>
    );
  }
}
