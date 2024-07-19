import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiRedux,
} from "react-icons/si";

function renderTooltip(props, message) {
  return <Tooltip {...props}>{message}</Tooltip>;
}


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={(props) => renderTooltip(props, "JavaScript")}
        >
          <div><DiJavascript1 /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={(props) => renderTooltip(props, "Node.js")}
        >
          <div><DiNodejs /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={(props) => renderTooltip(props, "React")}
        >
          <div><DiReact /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={(props) => renderTooltip(props, "MongoDB")}
        >
          <div><DiMongodb /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={(props) => renderTooltip(props, "Next.js")}
        >
          <div><SiNextdotjs /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={(props) => renderTooltip(props, "Git")}
        >
          <div><DiGit /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={(props) => renderTooltip(props, "Firebase")}
        >
          <div><SiFirebase /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={(props) => renderTooltip(props, "PostgreSQL")}
        >
          <div><SiPostgresql /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={(props) => renderTooltip(props, "Python")}
        >
          <div><DiPython /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={(props) => renderTooltip(props, "Redux")}
        >
          <div><SiRedux /></div>
        </OverlayTrigger>
      </Col>
    </Row>
  );
}

export default Techstack;

