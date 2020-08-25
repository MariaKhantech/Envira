import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class index extends Component {
  render() {
    const { showModal } = this.props.state;

    const { handleHideModal, postNewEvent } = this.props;

    return (
      <>
        <Modal show={showModal} onHide={handleHideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Enter Event Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Event Name</Form.Label>
                <Form.Control type="text" placeholder="Clean Up" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Event Date</Form.Label>
                <Form.Control type="text" placeholder="Enter Date" />
                <Form.Label>Event Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" />
                <Form.Label>Contact Person</Form.Label>
                <Form.Control type="text" placeholder="John Doe" />
                <Form.Label>Contact Number</Form.Label>
                <Form.Control type="text" placeholder="1800" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Event Description</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleHideModal}>
              Close
            </Button>
            <Button variant="primary" onClick={postNewEvent}>
              Create Event
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
