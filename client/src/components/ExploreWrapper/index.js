import React, { Component } from "react";
import AirQualitySearch from "./AirQualitySearch/index";
import EpaInfo from "./EpaInfo/index";
import Articles from "./Articles/index";

import Axios from "axios";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import "./style.css";

export default class ExploreWrapper extends Component {
  constructor(props) {
    super();
    this.state = {
      // Takes active tab from props if it is defined there
      activeTab: props.activeTab || 1,
    };

    // Bind the handleSelect function already here (not in the render function)
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    Axios.get(
      "https://api.waqi.info/feed/boston/?token=e76fff504230a5ff145917055b7138ef3159918d"
    ).then((response) => this.setState({ aqiData: response.data }));
  }

  render() {
    return (
      <Row>
        <Col md={8} className="mx-auto mt-5">
          <Tabs
            activeKey={this.state.activeTab}
            fill
            className="justify-content-center"
            onSelect={this.handleSelect}
          >
            <Tab eventKey={1} title="Air Quality Index Search">
              <AirQualitySearch />
            </Tab>
            <Tab eventKey={2} title="EPA Information">
              <EpaInfo />
            </Tab>
            <Tab eventKey={3} title="Articles">
              <Articles />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    );
  }
  handleSelect(selectedTab) {
    // The active tab must be set into the state so that
    // the Tabs component knows about the change and re-renders.
    this.setState({
      activeTab: selectedTab,
    });
  }
}
