import React, { Component } from "react";
import AirQualitySearch from "./AirQualitySearch/index";
import EpaInfo from "./EpaInfo/index";
import Articles from "./Articles/index";

import { Row, Col, Tabs, Tab } from "react-bootstrap";

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
            <Tab eventKey={3} title="Air Quality Index Search">
              <AirQualitySearch />
            </Tab>
            <Tab eventKey={2} title="EPA Information">
              <EpaInfo />
            </Tab>
            <Tab eventKey={1} title="Articles">
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
