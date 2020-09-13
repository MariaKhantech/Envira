import React, { Component } from "react";

import { Modal, Spinner } from "react-bootstrap";

import "./loadModal.css";

export default class index extends Component {
  render() {
    const { loadModalShow, loadModalHide } = this.props.state;

    const spinner1 = {
      width: "3rem",
      height: "3rem",
      color: "#5e72e4",
    };

    const spinner2 = {
      width: "3rem",
      height: "3rem",
      color: "#17a2b8",
    };

    return (
      <Modal
        size="lg"
        className="p-3"
        centered
        show={loadModalShow}
        onHide={loadModalHide}
      >
        <Modal.Header>
          <Modal.Title className="mx-auto" style={{ fontSize: "35px" }}>
            LOADING...
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="mx-auto">
          <Spinner animation="grow" style={spinner1} />
          <Spinner animation="grow" style={spinner2} />
          <Spinner animation="grow" style={spinner1} />
          <Spinner animation="grow" style={spinner2} />
          <Spinner animation="grow" style={spinner1} />
          <Spinner animation="grow" style={spinner2} />
          <Spinner animation="grow" style={spinner1} />
          <Spinner animation="grow" style={spinner2} />
        </Modal.Body>
        <Modal.Footer>
          <h4 className="mx-auto">One Sec!</h4>
        </Modal.Footer>
      </Modal>
    );
  }
}
