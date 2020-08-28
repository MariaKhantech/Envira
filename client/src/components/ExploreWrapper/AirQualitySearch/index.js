import React, { Component } from "react";

import Axios from "axios";

import "./style.css";

export default class AirQualitySearch extends Component {
  state = {
    aqiData: [],
  };

  componentDidMount() {
    Axios.get(
      "https://api.waqi.info/feed/boston/?token=e76fff504230a5ff145917055b7138ef3159918d"
    ).then((response) => this.setState({ aqiData: response.data }));
  }
  render() {
    console.log(this.state.aqiData);
    return <div>Air Quality Search</div>;
  }
}
