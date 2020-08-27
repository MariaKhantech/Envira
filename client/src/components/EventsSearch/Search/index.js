import React, { Component } from "react";
import Modal from "../Modal/index";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import Button from "react-bootstrap/Button";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import ReactTooltip from "react-tooltip";

export default class Search extends Component {
  render() {
    const { filter, disabled, searchInput } = this.props.state;
    const {
      handleFilterOption,
      onChange,
      handleFilterSubmit,
      handleShowAll,
      handleShowModal,
      handleHideModal,
      postNewEvent,
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
                  Organizer
                </Dropdown.Item>
                <Dropdown.Item onClick={handleFilterOption}>
                  Location
                </Dropdown.Item>
                <Dropdown.Item onClick={handleFilterOption}>
                  Keyword
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
                onClick={handleShowModal}
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
        <Modal
          handleHideModal={handleHideModal}
          postNewEvent={postNewEvent}
          state={this.props.state}
        />
      </Row>
    );
  }
}
