import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dashboard from "../../Assets/Projects/Dashboard.png";
import chatApp from "../../Assets/Projects/Chat-App.png";
import jobHunt from "../../Assets/Projects/Job-Hunt.png";
import contactManager from "../../Assets/Projects/TodoList.png";
import crave from "../../Assets/Projects/Crave.png";
import todoList from "../../Assets/Projects/Art-table.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Data Visualization Dashboard"
              description="An interactive data visualization dashboard built with modern JavaScript frameworks. Features comprehensive data analytics, real-time updates, and intuitive user interface for analyzing complex datasets."
              ghLink="https://github.com/ansh-34/Data-Visualization-Dashboard"
              demoLink="https://data-visualization-dashboard-ibu4.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatApp}
              isBlog={false}
              title="Chat App"
              description="Real-time chat application built with JavaScript. Features include instant messaging, user authentication, and responsive design for seamless communication across devices."
              ghLink="https://github.com/ansh-34/chat_app"
              demoLink="https://chat-app-three-iota-50.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobHunt}
              isBlog={false}
              title="Job Hunt"
              description="A comprehensive job search and application tracking platform. Built with JavaScript to help users manage their job search process efficiently with features like application tracking, job listings, and career resources."
              ghLink="https://github.com/ansh-34/Job-Hunt"
              demoLink="https://job-hunt-zeta-peach.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contactManager}
              isBlog={false}
              title="Contact Manager"
              description="A full-featured contact management application built with JavaScript. Organize and manage contacts efficiently with features for adding, editing, deleting, and searching contacts with an intuitive interface."
              ghLink="https://github.com/ansh-34/contact-manager"
              demoLink="https://contact-manager-nu-hazel.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crave}
              isBlog={false}
              title="Crave"
              description="A food ordering and delivery platform built with JavaScript. Features include menu browsing, cart management, order tracking, and seamless user experience for food enthusiasts."
              ghLink="https://github.com/ansh-34/Crave"
              demoLink="https://crave-1.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoList}
              isBlog={false}
              title="TodoList"
              description="A simple yet powerful todo list application. Manage your daily tasks efficiently with add, delete, edit, and mark complete features. Built with JavaScript for quick and responsive user experience."
              ghLink="https://github.com/ansh-34/todoList"
              demoLink="https://tourmaline-monstera-cf728c.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
