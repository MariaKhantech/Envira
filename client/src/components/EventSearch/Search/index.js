import React, { Component } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default class Search extends Component {
  render() {
    return (
      <Row>
        <Col md={6} className="mx-auto mt-5">
          <InputGroup>
            <FormControl placeholder="Search for Events" />
            <InputGroup.Append>
              <ButtonGroup>
                <DropdownButton
                  as={ButtonGroup}
                  id="nested-dropdown"
                  alignRight
                >
                  <Dropdown.Item eventKey="1">
                    <Form>
                      <Form.Group controlId="formGroupLocation">
                        <InputGroup>
                          <Form.Label>Search by Location</Form.Label>
                          <FormControl type="text" placeholder="Portsmouth" />
                          <InputGroup.Append>
                            <Button></Button>
                          </InputGroup.Append>
                        </InputGroup>
                        <Form.Label>Show All Events</Form.Label>
                        <Button variant="primary" size="sm" block></Button>
                      </Form.Group>
                    </Form>
                  </Dropdown.Item>
                </DropdownButton>
                <Button></Button>
              </ButtonGroup>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    );
  }
}
