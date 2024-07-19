import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiFigma,
} from "react-icons/si";


function renderTooltip(props, message) {
  return <Tooltip {...props}>{message}</Tooltip>;
}

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={(props) => renderTooltip(props, "Figma")}
        >
          <div><SiFigma /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={(props) => renderTooltip(props, "Visual Studio Code")}
        >
          <div><SiVisualstudiocode /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={(props) => renderTooltip(props, "Postman")}
        >
          <div><SiPostman /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={(props) => renderTooltip(props, "Slack")}
        >
          <div><SiSlack /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={(props) => renderTooltip(props, "Vercel")}
        >
          <div><SiVercel /></div>
        </OverlayTrigger>
      </Col>
    </Row>
  );
}

export default Toolstack;
