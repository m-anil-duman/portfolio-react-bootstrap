import React from "react";
import Card from "react-bootstrap/Card";
import { BsArrowBarRight } from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="cyan">Anil Duman </span>
            from <span className="cyan"> Antalya, Turkey.</span>
            <br />
            I am currently looking for Job opportunities
            <br />
            I have completed Electrical and Electronics Engineering at Akdeniz University,Antalya
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <BsArrowBarRight /> Travelling
            </li>
            <li className="about-activity">
              <BsArrowBarRight /> Reading Books
            </li>
            <li className="about-activity">
              <BsArrowBarRight />  Working Out
            </li>
          </ul>

          <p style={{ color: "rgb(80, 244, 165)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">DUMAN</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
