import React from "react";
import Card from "react-bootstrap/Card";
import { BsArrowBarRight } from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I come from  Antalya, Turkey where I graduated from the Akdeniz University.  
            <br />
             I hold a Bachelor's degree in Electrical Engineering.
            <br />
            Since I've always been passionate about computers, I was drawn into becoming an intern and later a Software Developer. 
            <br/> I worked in a start-up for 2 years and currently am freelancing.
            <br /><br />
            In a constant search for new opportunities, challenges and ways to enchance my performace and upgrade my skills.
            <br />
            <br />
            Apart from coding, some other activities that I love to do include Traveling, which has become my lifestyie. <br /> One can say that I am fully remote digital nomad. <br /> <br /> On a daily basis, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <BsArrowBarRight /> Doing Sports
            </li>
            <li className="about-activity">
              <BsArrowBarRight /> Reading Books
            </li>
            <li className="about-activity">
              <BsArrowBarRight />  Fitness
            </li>
          </ul>

          <p style={{ color: "rgb(80, 244, 165)" }}>
            "Strive to create things that make a difference!"
          </p>
          <footer className="blockquote-footer">DUMAN</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
