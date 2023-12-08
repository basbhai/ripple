import React, { useEffect } from "react";
import "./Header.css";
import { Container, Col } from "react-bootstrap";
//import Image from "../assets/test.png";
import $ from "jquery";
import "jquery.ripples";
import HeaderSocial from "./HeaderSocial";
import { headerPage } from "../../components/data";

const Header = () => {
  useEffect(() => {
    $(".overlay").ripples({
      dropRadius: 10,
      perturbance: 0.07,
      resolution: 1025,
    });
  }, []);

  return (
    <>
      <div className="card_box">
        <Container></Container>
        <div className="blank"></div>
        <Col className="imageDiv">{/* <img src={Image} alt="Image" /> */}</Col>
        <Col className="text">
          <h1>{headerPage.name}</h1>
          <p className="description">{headerPage.Desc}</p>
        </Col>
      </div>
      <div className="overlay"></div>
      <HeaderSocial />
    </>
  );
};

export default Header;
