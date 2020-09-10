import React, { Component } from "react";
import AirQualitySearch from "./AirQualitySearch/index";
import EpaInfo from "./EpaInfo/index";
import Articles from "./Articles/index";

import { Row, Col, Tabs, Tab, Jumbotron, Container } from "react-bootstrap";

import "./exploreWrapper.css";

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
      <>
        <Jumbotron id="jumbo">
          <Container fluid>
            <h1 class="display-4 text-white">Pollution Information</h1>
          </Container>
        </Jumbotron>
        <Row>
          <Col md={8} className="mx-auto mt-2" id="tabs">
            <Tabs
              activeKey={this.state.activeTab}
              fill
              className="justify-content-center"
              onSelect={this.handleSelect}
              id="aqi"
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
      </>
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
