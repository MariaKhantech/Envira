import React, { Component } from "react";

import {
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

import ReactTooltip from "react-tooltip";

import "./search.css";

export default class Search extends Component {
  render() {
    const {
      filter,
      href,
      buttonDisabled,
      searchDisabled,
      alertTip1,
      alertTip2,
      searchInput,
    } = this.props.state;
    const {
      handleFilterOption,
      onChange,
      handleFilterSubmit,
      handleShowAll,
    } = this.props;

    return (
      <Row className="mx-auto">
        <Col md={8} className="mx-auto mt-2">
          <InputGroup>
            <InputGroup.Prepend>
              <DropdownButton
                title={filter}
                id="dropdown"
                data-tip
                data-for="filterSelect"
              >
                <Dropdown.Item onClick={handleFilterOption}>
                  Event Name
                </Dropdown.Item>
                <Dropdown.Item onClick={handleFilterOption}>
                  Location
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <Button
                    style={{ backgroundColor: "#c38d9e", border: "none" }}
                    onClick={handleShowAll}
                  >
                    Show All Events
                  </Button>
                </Dropdown.Item>
              </DropdownButton>

              <ReactTooltip id="filterSelect" place="top" effect="solid">
                Select a Filter
              </ReactTooltip>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Search for Events"
              id="searchInput"
              name="searchInput"
              value={searchInput}
              onChange={onChange}
              disabled={searchDisabled}
            />
            <InputGroup.Append>
              <Button
                onClick={handleFilterSubmit}
                style={{ backgroundColor: "#c38d9e", border: "none" }}
                id="search"
              >
                <i className="fa fa-search"></i>
              </Button>

              <Button disabled={buttonDisabled} id="addEvent">
                <a
                  style={{ textDecoration: "none", color: "#fff" }}
                  data-tip
                  data-for="alertTip2"
                  href={href}
                >
                  Create New Event
                </a>
              </Button>

              <ReactTooltip
                disable={alertTip2}
                id="alertTip2"
                place="top"
                effect="solid"
              >
                Please login to create an event
              </ReactTooltip>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    );
  }
}
