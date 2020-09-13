import React, { Component } from "react";

import { Row, Col, Button } from "react-bootstrap";

import Axios from "axios";

import "./articles.css";

export default class Articles extends Component {
  state = {
    nytData: [],
  };
  componentDidMount() {
    Axios.get(
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q='climate change'&api-key=19vvAaE2PFZaDIcKKKJMoVc6K9QurvYU"
    )
      .then((response) => {
        this.setState({
          nytData: response.data.response.docs,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Row className="mt-3">
        <Col
          md={12}
          id="wrapper"
          className="mx-auto p-3"
          style={{
            overflow: "scroll",
            maxWidth: "850px",
            maxHeight: "600px",
          }}
        >
          {this.state.nytData.slice(0, 6).map((data, index) => (
            <Row className="mb-2 ml-1 mr-2 p-3" id="articleBox" key={index}>
              <Row className="ml-2 mt-2 mb-2 mx-auto" id="headline">
                <h3>{data.headline.main}</h3>
              </Row>

              <Row className="mx-auto mb-3">
                <Col md={4} className="mx-auto mt-1" id="imgCol">
                  <img
                    className="d-block mx-auto img-fluid img-thumbnail"
                    src={`http://static01.nyt.com/${data.multimedia[4].url}`}
                  />
                </Col>

                <Col md={8} className="mt-3 mx-auto">
                  <p className="text-left" style={{ fontSize: "16px" }}>
                    {data.lead_paragraph}
                  </p>
                  <Button
                    style={{ backgroundColor: "#41b3a3", border: "none" }}
                    className="float-left"
                    href={data.web_url}
                    target="_blank"
                  >
                    Read more
                  </Button>
                </Col>
              </Row>
            </Row>
          ))}
        </Col>
      </Row>
    );
  }
}
