import React, { Component } from "react";

import { Row, Col, Button } from "react-bootstrap";

import Axios from "axios";

import "./style.css";

export default class Articles extends Component {
  state = {
    nytData: [],
  };

  componentDidMount() {
    let currentState = Axios.get(
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q='climate change'&api-key=19vvAaE2PFZaDIcKKKJMoVc6K9QurvYU"
    ).then((response) =>
      this.setState({ nytData: response.data.response.docs })
    );
  }
  render() {
    console.log(this.state.nytData);

    const renderArticles = this.state.nytData.map((data) => (
      <Row className="mb-2  p-2 bg-light">
        <Row>
          <h4 className="" style={{ margin: "0px 0px 10px 42px" }}>
            {data.headline.main}
          </h4>
        </Row>

        <Row>
          <Col md={5} className="" style={{ marginLeft: "30px" }}>
            <img
              className="img-fluid img-thumbnail"
              src={`http://static01.nyt.com/${data.multimedia[38].url}`}
            />
          </Col>

          <Col md={6} className="" style={{ margin: "-10px 0px 0px 10px" }}>
            <p className="text-right">{data.lead_paragraph}</p>
            <Button
              variant="primary"
              className="float-right"
              href={data.web_url}
              target="_blank"
            >
              Read more
            </Button>
          </Col>
        </Row>
      </Row>
    ));

    return (
      <Row className="mt-2">
        <Col
          md={12}
          className="mx-auto p-3"
          style={{
            overflow: "scroll",
            maxWidth: "650px",
            maxHeight: "500px",
          }}
        >
          {renderArticles}
        </Col>
      </Row>
    );
  }
}
