import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import pagelogo from "../assets/images/svg/navlogo.svg";
import right from "../assets/images/png/footer_circle.png";
import left from "../assets/images/png/footer_img_2.png";
const Footer = () => {
  return (
    <footer className="footer_bg overflow-hidden position-relative z_index_2">
      <img
        src={right}
        alt="right"
        className=" position-absolute right_circle_position z_index_1"
      />{" "}
      <img
        src={left}
        alt="left"
        className=" position-absolute bottom-0 end-0 z_index_1"
      />
      <Container>
        <Row className=" justify-content-evenly py-4 border_bottom py_40 ">
          <Col xs={9} md={6}>
            <p className="fw_600 fs_xxxl clr_white text-center text-sm-start">
              Let’s discuss and bring your vision to life.
            </p>
          </Col>
          <Col xs={12} md={4} className=" text-sm-end text-center">
            {" "}
            <button className=" fw_500 fs_md clr_white hero_btn_modify bg_green_linear border-0 mt-md-5">
              Let’s Talk <span className="add_margin_hover">&rarr;</span>
            </button>
          </Col>
        </Row>
        <div className="footer_line m-auto"></div>

        <Row className=" justify-content-between py-5 mt-md-5 border_bottom ">
          <Col md={5}>
            <div>
              <div className="d-flex c_pointer ms-3 ms-sm-0">
                <img src={pagelogo} alt="pagelogo" />
                <span className="fw_700 fs_xl font-italic clr_white">
                  Agenone
                </span>
              </div>
              <p className="fw_400 fs_md clr_lightgrey  mt-4 ms-3 ms-sm-0 ">
                We're a team of experienced designers, developers, and
                marketers, passionate about delivering exceptional digital
                solutions.
              </p>
              <p className=" mt-5 ms-4 ms-sm-0 ">
                <a href="#" className="fw_500 fs_md clr_lightgrey hover_line ">
                  {" "}
                  hello@agenone.com
                </a>
              </p>
            </div>
          </Col>
          <Col md={7}>
            <Row className="ms-3 ms-sm-0">
              <Col md={4} sm={6} xs={6}>
                <ul className="mb-0 ps-0">
                  <li className="fw_700 fs_md clr_white">Menu</li>
                  <a href="#">
                    {" "}
                    <li className="fw_400 fs_md  clr_lightgrey  mt-4 hover_line">
                      Home
                    </li>
                  </a>
                  <a href="#">
                    {" "}
                    <li className="fw_400 fs_md  clr_lightgrey  mt-3 hover_line">
                      Services
                    </li>
                  </a>
                  <a href="#">
                    {" "}
                    <li className="fw_400 fs_md  clr_lightgrey  mt-3 hover_line">
                      About Us
                    </li>
                  </a>
                  <a href="#">
                    {" "}
                    <li className="fw_400 fs_md  clr_lightgrey  mt-3 hover_line">
                      Project
                    </li>
                  </a>
                  <a href="#">
                    {" "}
                    <li className="fw_400 fs_md  clr_lightgrey  mt-3 hover_line">
                      Contact
                    </li>
                  </a>
                </ul>
              </Col>
              <Col md={4} sm={6} xs={6}>
                <ul className="mb-0 ps-0   ">
                  <li className="fw_700 fs_md clr_white">Support</li>
                  <a href="#">
                    {" "}
                    <li className="fw_400 fs_md  clr_lightgrey  mt-4 hover_line">
                      FAQ
                    </li>
                  </a>
                  <a href="#">
                    {" "}
                    <li className="fw_400 fs_md  clr_lightgrey  mt-3 hover_line">
                      Privacy Policy
                    </li>
                  </a>
                  <a href="#">
                    {" "}
                    <li className="fw_400 fs_md  clr_lightgrey  mt-3 hover_line">
                      Terms of Service
                    </li>
                  </a>
                </ul>
              </Col>
              <Col md={4} sm={6} xs={6}>
                <ul className="mb-0 ps-0 mt-4 mt-md-0">
                  <li className="fw_700 fs_md clr_white">Social Media</li>
                  <a href="#">
                    {" "}
                    <li className="fw_400 fs_md  clr_lightgrey  mt-4 hover_line">
                      Linked In
                    </li>
                  </a>
                  <a href="#">
                    {" "}
                    <li className="fw_400 fs_md  clr_lightgrey  mt-3 hover_line">
                      Twitter
                    </li>
                  </a>
                  <a href="#">
                    {" "}
                    <li className="fw_400 fs_md  clr_lightgrey  mt-3 hover_line">
                      Instagram
                    </li>
                  </a>
                  <a href="#">
                    {" "}
                    <li className="fw_400 fs_md  clr_lightgrey  mt-3 hover_line">
                      Dribbble
                    </li>
                  </a>
                  <a href="#">
                    {" "}
                    <li className="fw_400 fs_md  clr_lightgrey  mt-3 hover_line">
                      Behance
                    </li>
                  </a>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="footer_line m-auto"></div>
        <p className=" text-sm-center fw_400 fs_md clr_lightgrey  mb-0 py-4 ms-3 ">
          Copyright © 2023 by Agenone. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
