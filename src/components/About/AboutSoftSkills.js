import React from 'react'
import Card from "react-bootstrap/Card";
import { BsArrowRight } from "react-icons/bs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import soft from "../../Assets/Soft-skills.svg"
const AboutSoftSkills = () => {
    return (

        <Card className="quote-card-view">
            <Card.Body>
                <Row>
                    <h1 className="project-heading">
                        Soft <strong className="cyan"> Skills </strong>
                    </h1>
                    <Col md={7}>
                        <blockquote className="blockquote mb-0">
                            <p style={{ textAlign: "start" }}>
                                <span className="cyan"> <BsArrowRight /> Problem-Solving:</span> Breaking down complex problems and finding effective solutions through analytical thinking and creativity.
                                <br />
                                <br />
                                <span className="cyan"> <BsArrowRight /> Communication:</span> Strong communicator, capable of articulating ideas clearly and working collaboratively with cross-functional teams.
                                <br />
                                <br />
                                <span className="cyan"> <BsArrowRight /> Adaptability:</span> Quick learner who embraces new challenges and adapts to changing technologies and project requirements.
                                <br />
                                <br />
                                <span className="cyan"> <BsArrowRight /> Attention to Detail: </span> Detail-oriented approach ensuring high-quality code and user experiences.
                                <br />
                                <br />
                                <span className="cyan"> <BsArrowRight /> Time Management:</span> Efficient in managing time and prioritizing tasks to meet deadlines and deliver successful projects.
                                <br />
                                <br />

                                I am enthusiastic about leveraging my front-end development skills and my soft skills to build impactful applications. <br/> I'm looking forward to growing as a developer and contributing to innovative projects that make a difference.
                            </p>
                        </blockquote>
                    </Col>
                    <Col
            md={5}
            style={{ }}
            className="about-img align-content-center"
          >
            <img src={soft} alt="about-soft-skills" className="img-fluid" />
          </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default AboutSoftSkills