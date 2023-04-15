import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import content from "../assets/images/png/content.png";
import adobe from "../assets/images/png/adobe.png";
import airbmb from "../assets/images/png/airbnb.png";
import google from "../assets/images/png/google.png";
import netflix from "../assets/images/png/netflix'.png";
import micro from "../assets/images/png/micro.png";
const SocialIcon = () => {
  return (
    <section className="bg_black border_top">
      <Container className="pt-lg-5 pb-4">
        <Row>
          <Col xs={6} sm={6} md={4} lg={2} className="mt-3 px-3 py-3 pt-lg-0 px-xl-5  mt-lg-0">
            <img className="hover_scale w-100 c_pointer" src={content} alt="content" />
          </Col>{" "}
          <Col xs={6} sm={6} md={4} lg={2} className="mt-3 px-3 py-3 pt-lg-0 px-xl-5  mt-lg-0">
            <img className="hover_scale w-100 c_pointer" src={google} alt="google" />
          </Col>{" "}
          <Col xs={6} sm={6} md={4} lg={2} className="mt-3 px-3 py-3 pt-lg-0 px-xl-5  mt-lg-0">
            <img className="hover_scale w-100 c_pointer" src={netflix} alt="netflix" />
          </Col>{" "}
          <Col xs={6} sm={6} md={4} lg={2} className="mt-3 px-3 py-3 pt-lg-0 px-xl-5  mt-lg-0">
            <img className="hover_scale w-100 c_pointer" src={airbmb} alt="airbmb" />
          </Col>{" "}
          <Col xs={6} sm={6} md={4} lg={2} className="mt-3 px-3 py-3 pt-lg-0 px-xl-5  mt-lg-0">
            <img className="hover_scale w-100 c_pointer" src={adobe} alt="adobe" />
          </Col>{" "}
          <Col xs={6} sm={6} md={4} lg={2} className="mt-3 px-3 py-3 pt-lg-0 px-xl-5  mt-lg-0">
            <img className="hover_scale w-100 c_pointer" src={micro} alt="micro" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SocialIcon;
