import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle.js";
import dashboard from "../../Assets/Projects/Dashboard-pj.png";
import StockTracker from "../../Assets/Projects/StockTracker-cropped.jpg";
import littleLemon from "../../Assets/Projects/Little Lemon Restaurant Home.png";
import remedy from "../../Assets/Projects/remedy.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="cyan">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} xl={4}className="project-card">
            <ProjectCard
              imgPath={StockTracker}
              isBlog={false}
              title="Stock Tracker"
              description="Stock Tracker app that manages to track live data of stock changes,User can track data in 5 different intervals, add stocks to the favourites to reach it easily. Built with React-Native,Expo Go,GraphQL,Stepzen,PostgreSQL"
              ghLink="https://github.com/m-anil-duman/StocksPriceTracker"
            />
          </Col>

          <Col md={6} xl={4} className="project-card">
            <ProjectCard
              imgPath={littleLemon}
              isBlog={false}
              title="Little Lemon Restaurant"
              description="I built a dynamic and fully responsive website for The Little Lemon Restaurant, a Mediterranean restaurant specializing in Italian, Greek, and Turkish cuisine. The site features comprehensive menus and dishes, reservation , with online shopping and login section currently under construction. The project leverages React.js for the frontend and doesn't have any backend"
              ghLink="https://github.com/m-anil-duman/little-lemon-restaurant"
              demoLink="https://lil-lemon.netlify.app/"
            />
          </Col>

          <Col md={6} xl={4}className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="M-[AD]min Dashboard"
              description="I'm developing a sleek and efficient Admin-Dashboard for my portfolio, utilizing Next.js and MongoDB. This project showcases advanced features such as user management, data analytics, and real-time updates, all within a responsive and intuitive interface. With a focus on performance and scalability, this dashboard demonstrates my ability to create powerful and user-friendly admin tools. Currently under construction"
              ghLink="https://github.com/m-anil-duman/admin-dashboard-project"
            />
          </Col>
          <Col md={6} xl={4}className="project-card">
            <ProjectCard
              imgPath={remedy}
              isBlog={false}
              title="Remedy Social Media Platform"
              description="I built fully responsive social media platform. I used MongoDb for database, For Front-End, React as framework,React-router for navigation,formik + yup for form and form validation,Redux for state management,For Back-End; Node.Js,Express.Js and Mongoose, JWT for authentication,Multer for file uploading. It requires further integration for production stage."
              ghLink="https://github.com/m-anil-duman/social-media-app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
