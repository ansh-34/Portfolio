import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate Full Stack Developer who loves building
              modern web applications and solving complex problems through code.
              Over time, I've explored various technologies and found my passion
              in creating scalable, user-friendly applications.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, C/C++, JavaScript, and TypeScript{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Full Stack Web Applications, REST APIs,{" "}
                </b>
              </i>
              and building responsive, interactive user interfaces with modern frameworks.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> React.js, Next.js, </b> and{" "}
              <i>
                <b className="purple">Node.js</b> with{" "}
                <b className="purple">Express.js</b>
              </i>
              , along with databases like <b className="purple">MongoDB</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
