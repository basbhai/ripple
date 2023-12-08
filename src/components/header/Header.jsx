import React, { useEffect } from "react";
import "./Header.css";
import { Container, Row, Col } from "react-bootstrap";
//import Image from "../assets/test.png";
import $ from "jquery";
import "jquery.ripples";

const Header = () => {
  useEffect(() => {
    $(".overlay").ripples({
      dropRadius: 10,
      perturbance: 0.04,
      resolution: 420,
    });
  }, []);

  return (
    <>
      <div className="card_box">
        <Container></Container>
        <div className="blank"></div>
        <Col className="imageDiv">{/* <img src={Image} alt="Image" /> */}</Col>
        <Col className="text">
          <p>Hi, I am Basanta Shrestha New developer in town</p>
        </Col>
      </div>
      <div className="overlay"></div>
    </>
  );
};

export default Header;
