import React, { Component } from "react";

import { Row, Col, Card, Button } from "react-bootstrap";
import ReactTooltip from "react-tooltip";

import "./epaInfo.css";

export default class EpaInfo extends Component {
  render() {
    return (
      <Row>
        <Col md={12} id="wrapper" className="mx-auto mt-3">
          <Row>
            <Col id="title" md={12}>
              <h2 className="text-center">EPA Envirofact Tools</h2>
            </Col>
          </Row>
          <Row className="mx-auto mt-3" id="tileRow">
            <Col
              sm={12}
              md={12}
              lg={6}
              className="mx-auto d-flex justify-content-center"
            >
              <Card
                className="mx-auto mt-3 mb-3"
                style={{ width: "20rem", borderRadius: "10px" }}
                id="epaCard"
              >
                <Card.Header id="epaCardHeader">
                  <Card.Title
                    className="text-center mt-2"
                    style={{ fontSize: "24px" }}
                  >
                    Safe Drinking Water Information
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <iframe
                    src="//www.epa.gov/sites/production/files/widgets/ef-sdwis.html"
                    id="sdwis"
                    width="225"
                    height="200"
                    scrolling="no"
                    frameborder="0"
                    marginwidth="0"
                    marginheight="0"
                  ></iframe>
                </Card.Body>
                <Card.Footer
                  id="epaCardFooter"
                  className="text-body text-center"
                >
                  <Button id="info" data-tip data-for="sdwisInfo">
                    Info
                  </Button>
                  <ReactTooltip
                    id="sdwisInfo"
                    className="opaque"
                    border="white"
                    type="dark"
                    place="bottom"
                    effect="solid"
                  >
                    <Card
                      className="p-2"
                      style={{
                        width: "22rem",
                        color: "#000",
                        fontSize: "18px",
                      }}
                    >
                      The Safe Drinking Water Information System (SDWIS)
                      contains information about public water systems and their
                      violations of EPA's drinking water regulations. These
                      statutes and accompanying regulations establish maximum
                      contaminant levels, treatment techniques, and monitoring
                      and reporting requirements to ensure that water provided
                      to customers is safe for human consumption.
                    </Card>
                  </ReactTooltip>
                </Card.Footer>
              </Card>
            </Col>
            <Col
              sm={12}
              md={12}
              lg={6}
              className="mx-auto d-flex justify-content-center"
            >
              <Card
                className="mx-auto mt-3 mb-3"
                style={{ width: "20rem", borderRadius: "10px" }}
                id="epaCard"
              >
                <Card.Header id="epaCardHeader">
                  <Card.Title
                    className="text-center mt-2"
                    style={{ fontSize: "24px" }}
                  >
                    Enforcement and Compliance History
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <iframe
                    src="//www.epa.gov/sites/production/files/widgets/ef-echo.html"
                    id="echo"
                    width="225"
                    height="200"
                    scrolling="no"
                    frameborder="0"
                    marginwidth="0"
                    marginheight="0"
                  ></iframe>
                </Card.Body>
                <Card.Footer
                  id="epaCardFooter"
                  className="text-body text-center"
                >
                  <Button id="info" data-tip data-for="echoInfo">
                    Info
                  </Button>
                  <ReactTooltip
                    id="echoInfo"
                    className="opaque"
                    border="white"
                    type="dark"
                    place="bottom"
                    effect="solid"
                  >
                    <Card
                      className="p-2"
                      style={{
                        width: "22rem",
                        color: "#000",
                        fontSize: "18px",
                      }}
                    >
                      The Enforcement and Compliance History Online search tool
                      delivers a map with marked nearby facilities (ex. stores,
                      gas-stations, schools) based on the entered location and
                      lists out if they are EPA compliant and whether or not
                      they have had any significant violations.
                    </Card>
                  </ReactTooltip>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
          <Row className="mx-auto mt-3" id="tileRow">
            <Col
              sm={12}
              md={12}
              lg={6}
              className="mx-auto d-flex justify-content-center"
            >
              <Card
                className="mx-auto mt-3 mb-3"
                style={{ width: "20rem", borderRadius: "10px" }}
                id="epaCard"
              >
                <Card.Header id="epaCardHeader">
                  <Card.Title
                    className="text-center mt-2"
                    style={{ fontSize: "24px" }}
                  >
                    Community Cleanups
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <iframe
                    src="//www.epa.gov/sites/production/files/widgets/ef-cleanups.html"
                    id="cleanups"
                    width="225"
                    height="200"
                    scrolling="no"
                    frameborder="0"
                    marginwidth="0"
                    marginheight="0"
                  ></iframe>
                </Card.Body>
                <Card.Footer
                  id="epaCardFooter"
                  className="text-body text-center"
                >
                  <Button id="info" data-tip data-for="cleanupInfo">
                    Info
                  </Button>
                  <ReactTooltip
                    id="cleanupInfo"
                    className="opaque"
                    border="white"
                    type="dark"
                    place="bottom"
                    effect="solid"
                  >
                    <Card
                      className="p-2"
                      style={{
                        width: "22rem",
                        color: "#000",
                        fontSize: "18px",
                      }}
                    >
                      Cleanups in My Community is intended to provide
                      information about sites that might need to be cleaned up,
                      are being cleaned up, or have been cleaned up, in your
                      community or anywhere in the United States. The
                      information can help people understand what is happening
                      in their community, what has happened, and, with the
                      contextual information provided, what could happen if
                      certain events take place.
                    </Card>
                  </ReactTooltip>
                </Card.Footer>
              </Card>
            </Col>
            <Col
              sm={12}
              md={12}
              lg={6}
              className="mx-auto d-flex justify-content-center"
            >
              <Card
                className="mx-auto mt-3 mb-3"
                style={{
                  width: "20rem",
                  borderRadius: "10px",
                }}
                id="epaCard"
              >
                <Card.Header id="epaCardHeader">
                  <Card.Title
                    className="text-center mt-2"
                    style={{
                      fontSize: "24px",
                    }}
                  >
                    Discharge Information
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <iframe
                    src="//www.epa.gov/sites/production/files/widgets/ef-pcsicis.html"
                    id="PCS"
                    width="225"
                    height="200"
                    scrolling="no"
                    frameborder="0"
                    marginwidth="0"
                    marginheight="0"
                  ></iframe>
                </Card.Body>
                <Card.Footer
                  id="epaCardFooter"
                  className="text-body text-center"
                >
                  <Button id="info" data-tip data-for="pcsInfo">
                    Info
                  </Button>
                  <ReactTooltip
                    id="pcsInfo"
                    className="opaque"
                    border="white"
                    type="dark"
                    place="bottom"
                    effect="solid"
                  >
                    <Card
                      className="p-2"
                      style={{
                        width: "22rem",
                        color: "#000",
                        fontSize: "18px",
                      }}
                    >
                      The Permit Compliance System (PCS) provides information on
                      companies which have been issued permits to discharge
                      waste water into rivers. You can review information on
                      when a permit was issued and expires, how much the company
                      is permitted to discharge, and the actual monitoring data
                      showing what the company has discharged.
                    </Card>
                  </ReactTooltip>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

{
  /* <iframe
src="//www.epa.gov/sites/production/files/widgets/ef-sdwis.html"
id="sdwis"
width="225"
height="200"
scrolling="no"
frameborder="0"
marginwidth="0"
marginheight="0"
></iframe> */
}

{
  /* <iframe
src="//www.epa.gov/sites/production/files/widgets/ef-echo.html"
id="echo"
width="225"
height="200"
scrolling="no"
frameborder="0"
marginwidth="0"
marginheight="0"
></iframe>

<iframe
src="//www.epa.gov/sites/production/files/widgets/ef-cleanups.html"
id="cleanups"
width="225"
height="200"
scrolling="no"
frameborder="0"
marginwidth="0"
marginheight="0"
></iframe>

<iframe
                    src="//www.epa.gov/sites/production/files/widgets/ef-pcsicis.html"
                    id="PCS"
                    width="225"
                    height="200"
                    scrolling="no"
                    frameborder="0"
                    marginwidth="0"
                    marginheight="0"
                  ></iframe> */
}
