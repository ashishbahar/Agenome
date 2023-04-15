import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import lehar from "../assets/images/png/lehar.png";
const Passionate = () => {
  return (
    <section className="bg_passionate position-relative pb-4">
      <div className="circle position-absolute"></div>
      <img className="position-absolute end-0 bottom-0 z_index_1" src={lehar} alt="lehar" />
      <Container className="pt-3 pb-5">
        <p className="fw_500 fs_xxxl clr_lightblue py-5 mb-0 ">
          We are passionate about helping businesses grow and succeed in the
          digital age. We take pride in our work and strive to exceed your
          expectations every time.
        </p>
        <div className=" bg_green_linear b_radius_20">
          <Row className="justify-content-center">
            <Col lg={3} md={4} sm={6} className="text-center">
              <p className=" fw_700 fs_4xl clr_white mb-0">10+</p>
              <p className="clr_off_white fs_xl fw_500 pb-2">
                Years of Experiences
              </p>
            </Col>{" "}
            <Col lg={3} md={4} sm={6} className="text-center">
              <p className=" fw_700 fs_4xl clr_white mb-0">666+</p>
              <p className="clr_off_white fs_xl fw_500 pb-2">
                Project Completed
              </p>
            </Col>{" "}
            <Col lg={3} md={4} sm={6} className="text-center">
              <p className=" fw_700 fs_4xl clr_white mb-0">555+</p>
              <p className="clr_off_white fs_xl fw_500 pb-2">
                Satisfied Client
              </p>
            </Col>{" "}
            <Col lg={3} md={4} sm={6} className="text-center">
              <p className=" fw_700 fs_4xl clr_white mb-0">10+</p>
              <p className="clr_off_white fs_xl fw_500 pb-2">Awards Achieved</p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Passionate;
