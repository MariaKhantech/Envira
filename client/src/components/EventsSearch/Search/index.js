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
                variant="primary"
                title={filter}
                id="input-group-dropdown-1"
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
                  <Button onClick={handleShowAll}>Show All Events</Button>
                </Dropdown.Item>
              </DropdownButton>
              <ReactTooltip id="filterTip" place="top" effect="solid">
                Select a Filter
              </ReactTooltip>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Search for Events"
              name="searchInput"
              value={searchInput}
              onChange={onChange}
              disabled={disabled}
            />
            <InputGroup.Append>
              <Button
                onClick={handleFilterSubmit}
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
                style={{ "background-color": "green" }}
              >
                <i className="fa fa-plus"></i>
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
