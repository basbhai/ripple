import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styleAbout.css";
import ME from "../../assets/me-about.jpg";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { FaAward } from "react-icons/fa";
import { VscOrganization } from "react-icons/vsc";
import { MdOutlineWork } from "react-icons/md";

const About = () => {
  return (
    <div className="about_box">
      <Container className="container-lg">
        <Stack gap={1} className="col-md-8 mx-auto">
          <div className="p-2">
            <h1>About Me</h1>
          </div>

          <Row className="gy-4">
            <Col sm={1} md={1} lg={1} xl={4} className="d-flex justify-content-center align-items-center">
              <div className="aboutMe_img">
                <img src={ME} alt="me" />
              </div>
            </Col>
            <Col sm={11} md={11} lg={8} xl={8}>
              <Row>
                <Col>
                  <Row>
                    <Col className="about__card">
                      <FaAward className="about__icon" />
                      <h5>Experiences</h5>
                      <small>12+ of Banking Career</small>
                    </Col>
                    <Col className="about__card">
                      <VscOrganization className="about__icon" />
                      <h5>Organization & Departments</h5>
                      <small></small>
                    </Col>
                    <Col className="about__card">
                      <MdOutlineWork className="about__icon" />
                      <h5>Projects</h5>
                      <small></small>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>

          <p>
            Highly experienced banker with over a decade of expertise in credit
            management, branch management, and MIS seeking a challenging
            position where I can leverage my strong analytical skills and
            financial acumen. Additionally, as a versatile Javascript and
            Node.js developer, I bring a unique blend of technical proficiency
            and banking knowledge to deliver innovative solutions.
          </p>
        </Stack>
      </Container>
    </div>
  );
};

export default About;
