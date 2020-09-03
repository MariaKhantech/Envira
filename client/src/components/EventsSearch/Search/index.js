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

import "./style.css";

export default class Search extends Component {
  render() {
    const { filter, disabled, searchInput } = this.props.state;
    const {
      handleFilterOption,
      onChange,
      handleFilterSubmit,
      handleShowAll,
    } = this.props;

    return (
      <Row>
        <Col md={8} className="mx-auto mt-5">
          <InputGroup>
            <InputGroup.Prepend>
              <DropdownButton
                style={{}}
                title={filter}
                id="dropdown"
                data-tip
                data-for="filterTip"
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

              <ReactTooltip id="filterTip" place="top" effect="solid">
                Select a Filter
              </ReactTooltip>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Search for Events"
              id="searchInput"
              name="searchInput"
              value={searchInput}
              onChange={onChange}
              disabled={disabled}
            />
            <InputGroup.Append>
              <Button
                onClick={handleFilterSubmit}
                style={{ backgroundColor: "#c38d9e", border: "none" }}
                id="search"
                data-tip
                data-for="searchTip"
              >
                <i className="fa fa-search"></i>
              </Button>
              <ReactTooltip id="searchTip" place="top" effect="solid">
                Search
              </ReactTooltip>
              <Button
                data-tip
                data-for="addTip"
                id="addEvent"
                href="/eventCreate"
              >
                <i className="fa fa-plus" style={{ marginTop: "7px" }}></i>
              </Button>
              <ReactTooltip id="addTip" place="top" effect="solid">
                Add new event
              </ReactTooltip>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    );
  }
}
