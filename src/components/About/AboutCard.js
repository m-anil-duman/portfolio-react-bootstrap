import React from "react";
import Card from "react-bootstrap/Card";
import { BsArrowRight } from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I come from  Antalya, Turkey where I graduated from the Akdeniz University.
            <br />

            <br />I hold a Bachelor's degree in Electrical Engineering.
            <br />
            <br />
            Since I've always been passionate about computers, I was drawn into becoming an intern and later a Software Developer.
            <br />
            <br /> I worked in a start-up for 2 years and then I decided to become a Full Stack Developer.
            <br /><br />I have been working as a Freelancer over a year.
            <br /><br />
            In a constant search for new opportunities, challenges and ways to enchance my performace and upgrade my skills.
            <br />
            <br />
            Apart from coding, some other activities that I love to do include Traveling, which has become my lifestyle.
            <br /> <br />  I am a digital nomad, who has become a passionate explorer of the world, and visited 6 countries in the last year, all while working remotely with a motivation and focus.
            <br /> <br /> On a daily basis, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <BsArrowRight /> Doing Sports
            </li>
            <li className="about-activity">
              <BsArrowRight /> Reading Books
            </li>
            <li className="about-activity">
              <BsArrowRight />  Fitness
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
