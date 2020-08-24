import React, { Component } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import Button from "react-bootstrap/Button";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

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
              >
                <Dropdown.Item onClick={handleFilterOption}>
                  Title
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
            </InputGroup.Prepend>
            <FormControl
              placeholder="Search for Events"
              name="searchInput"
              value={searchInput}
              onChange={onChange}
              disabled={disabled}
            />
            <InputGroup.Append>
              <Button onClick={handleFilterSubmit}>
                <i className="fa fa-search"></i>
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    );
  }
}
