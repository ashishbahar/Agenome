import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import many_phone from "../assets/images/png/many_phone.png";
import desktopscreen from "../assets/images/png/desktopscreen.png";
import arrow from "../assets/images/png/SpecialIcon.png";
import blackcircle from "../assets/images/png/black_gola.png";
import black_2 from "../assets/images/png/black_2.png";

const OurProject = () => {
  const [first, setfirst] = useState(0);
  return (
    <section className="project_bg pb-md-5 position-relative z_index_2">
      <img
        className=" position-absolute top-0 start-0 z_index_1"
        src={blackcircle}
        alt="blackcircle"
      />
      <img
        className=" position-absolute bottom-0 end-0 z_index_1"
        src={black_2}
        alt="black_2"
      />
      <Container className="pt-lg-5 pb-5">
        <h2 className="fw_700 fs_4xl clr_white text-center pt-5 ">
          Our Project Have Been
          <span className=" green_linear_text_bg">Done</span>
        </h2>
        <p className=" fw_500 fs_lg clr_lightgrey text-center">
          Take a look at some of our recent projects and see how we've helped
          other businesses elevate their brand and drive business growth.
        </p>
        <div className="d-none d-md-block width_modify m-auto  d-flex justify-content-center py-5 overflow_scroll example">
          <span className="d-flex project_box_modify  p-2 justify-content-center  overflow_scroll example ">
            <button
              onClick={() => {
                setfirst(0);
              }}
              className={
                first === 0
                  ? "project_btn_modify fw_500 fs_sm clr_normalgrey me-3 ms-3 btn_color "
                  : "project_btn_modify fw_500 fs_sm clr_normalgrey me-3 ms-3  "
              }
            >
              UI/UX Design
            </button>
            <button
              onClick={() => {
                setfirst(1);
              }}
              className={
                first === 1
                  ? "project_btn_modify fw_500 fs_sm clr_normalgrey me-3 btn_color"
                  : "project_btn_modify fw_500 fs_sm clr_normalgrey me-3  "
              }
            >
              Digital Marketing
            </button>
            <button
              onClick={() => {
                setfirst(2);
              }}
              className={
                first === 2
                  ? "project_btn_modify fw_500 fs_sm clr_normalgrey me-3 btn_color"
                  : "project_btn_modify fw_500 fs_sm clr_normalgrey me-3  "
              }
            >
              Sosmed Management
            </button>
            <button
              onClick={() => {
                setfirst(3);
              }}
              className={
                first === 3
                  ? "project_btn_modify fw_500 fs_sm clr_normalgrey me-3 btn_color"
                  : "project_btn_modify fw_500 fs_sm clr_normalgrey me-3  "
              }
            >
              Development
            </button>
          </span>
        </div>{" "}
        <div className=" d-md-none width_modify m-auto  d-flex justify-content-center py-5 overflow_scroll example">
          <span className="d-flex project_box_modify  p-2 justify-content-center ">
            <button
              onClick={() => {
                setfirst(0);
              }}
              className={
                first === 0
                  ? "project_btn_modify_2 fw_500 fs_sm clr_normalgrey btn_color "
                  : "project_btn_modify_2 fw_500 fs_sm clr_normalgrey   "
              }
            >
              UI/UX
            </button>
            <button
              onClick={() => {
                setfirst(1);
              }}
              className={
                first === 1
                  ? "project_btn_modify_2 fw_500 fs_sm clr_normalgrey  btn_color"
                  : "project_btn_modify_2 fw_500 fs_sm clr_normalgrey   "
              }
            >
              Digital
            </button>
            <button
              onClick={() => {
                setfirst(2);
              }}
              className={
                first === 2
                  ? "project_btn_modify_2 fw_500 fs_sm clr_normalgrey  btn_color"
                  : "project_btn_modify_2 fw_500 fs_sm clr_normalgrey   "
              }
            >
              SMM
            </button>
            <button
              onClick={() => {
                setfirst(3);
              }}
              className={
                first === 3
                  ? "project_btn_modify_2 fw_500 fs_sm clr_normalgrey  btn_color"
                  : "project_btn_modify_2 fw_500 fs_sm clr_normalgrey   "
              }
            >
              Dev
            </button>
          </span>
        </div>
        <div className={first === 0 ? "d-block" : "d-none"}>
          {" "}
          <Row>
            <Col md={6} className="mt-4 mt-md-0">
              <div className="img_box_modify c_pointer">
                <div className=" position-relative">
                  <img
                    className="w-100 p-2 rounded-5 opacity_5"
                    src={many_phone}
                    alt="manyphone"
                  />
                  <div className=" position-absolute arrow_position">
                    <img className="rotate w-100" src={arrow} alt="arrow" />
                  </div>
                </div>
                <p className=" fw_700 fs_xxl clr_white p-2 mb-0">Title</p>
                <p className=" fw_400 fs_lg clr_lightgrey ps-2 pe-5  pb-3 me-4 ">
                  We are designed to help your business thrive in the online
                  world.
                </p>
              </div>
            </Col>
            <Col md={6} className="mt-4 mt-md-0">
              <div className="img_box_modify c_pointer">
                <div className=" position-relative">
                  <img
                    className="w-100 p-2 rounded-5 opacity_5"
                    src={desktopscreen}
                    alt="desktopscreen"
                  />
                  <div className=" position-absolute arrow_position">
                    <img className="rotate w-100" src={arrow} alt="arrow" />
                  </div>
                </div>
                <p className=" fw_700 fs_xxl clr_white p-2 mb-0">Title</p>
                <p className=" fw_400 fs_lg clr_lightgrey ps-2 pe-5  pb-3 me-4 ">
                  We are designed to help your business thrive in the online
                  world.
                </p>
              </div>
            </Col>
          </Row>
        </div>{" "}
        <div className={first === 1 ? "d-block" : "d-none"}>
          {" "}
          <Row>
            <Col md={6} className="mt-4 mt-md-0">
              <div className="img_box_modify c_pointer">
                <div className=" position-relative">
                  <img
                    className="w-100 p-2 rounded-5 opacity_5"
                    src={desktopscreen}
                    alt="desktopscreen"
                  />
                  <div className=" position-absolute arrow_position">
                    <img className="rotate w-100" src={arrow} alt="arrow" />
                  </div>
                </div>
                <p className=" fw_700 fs_xxl clr_white p-2 mb-0">Title</p>
                <p className=" fw_400 fs_lg clr_lightgrey ps-2 pe-5  pb-3 me-4 ">
                  We are designed to help your business thrive in the online
                  world.
                </p>
              </div>
            </Col>{" "}
            <Col md={6} className="mt-4 mt-md-0">
              <div className="img_box_modify c_pointer">
                <div className=" position-relative">
                  <img
                    className="w-100 p-2 rounded-5 opacity_5"
                    src={many_phone}
                    alt="manyphone"
                  />
                  <div className=" position-absolute arrow_position">
                    <img className="rotate w-100" src={arrow} alt="arrow" />
                  </div>
                </div>
                <p className=" fw_700 fs_xxl clr_white p-2 mb-0">Title</p>
                <p className=" fw_400 fs_lg clr_lightgrey ps-2 pe-5  pb-3 me-4 ">
                  We are designed to help your business thrive in the online
                  world.
                </p>
              </div>
            </Col>
          </Row>
        </div>{" "}
        <div className={first === 2 ? "d-block" : "d-none"}>
          {" "}
          <Row>
            <Col md={6} className="mt-4 mt-md-0">
              <div className="img_box_modify c_pointer">
                <div className=" position-relative">
                  <img
                    className="w-100 p-2 rounded-5 opacity_5"
                    src={many_phone}
                    alt="manyphone"
                  />
                  <div className=" position-absolute arrow_position">
                    <img className="rotate w-100" src={arrow} alt="arrow" />
                  </div>
                </div>
                <p className=" fw_700 fs_xxl clr_white p-2 mb-0">Title</p>
                <p className=" fw_400 fs_lg clr_lightgrey ps-2 pe-5  pb-3 me-4 ">
                  We are designed to help your business thrive in the online
                  world.
                </p>
              </div>
            </Col>{" "}
            <Col md={6} className="mt-4 mt-md-0">
              <div className="img_box_modify c_pointer">
                <div className=" position-relative">
                  <img
                    className="w-100 p-2 rounded-5 opacity_5"
                    src={desktopscreen}
                    alt="desktopscreen"
                  />
                  <div className=" position-absolute arrow_position">
                    <img className="rotate w-100" src={arrow} alt="arrow" />
                  </div>
                </div>
                <p className=" fw_700 fs_xxl clr_white p-2 mb-0">Title</p>
                <p className=" fw_400 fs_lg clr_lightgrey ps-2 pe-5  pb-3 me-4 ">
                  We are designed to help your business thrive in the online
                  world.
                </p>
              </div>
            </Col>{" "}
          </Row>
        </div>{" "}
        <div className={first === 3 ? "d-block" : "d-none"}>
          {" "}
          <Row>
            <Col md={6} className="mt-4 mt-md-0">
              <div className="img_box_modify c_pointer">
                <div className=" position-relative">
                  <img
                    className="w-100 p-2 rounded-5 opacity_5"
                    src={desktopscreen}
                    alt="desktopscreen"
                  />
                  <div className=" position-absolute arrow_position">
                    <img className="rotate w-100" src={arrow} alt="arrow" />
                  </div>
                </div>
                <p className=" fw_700 fs_xxl clr_white p-2 mb-0">Title</p>
                <p className=" fw_400 fs_lg clr_lightgrey ps-2 pe-5  pb-3 me-4 ">
                  We are designed to help your business thrive in the online
                  world.
                </p>
              </div>
            </Col>{" "}
            <Col md={6} className="mt-4 mt-md-0">
              <div className="img_box_modify c_pointer">
                <div className=" position-relative">
                  <img
                    className="w-100 p-2 rounded-5 opacity_5"
                    src={many_phone}
                    alt="manyphone"
                  />
                  <div className=" position-absolute arrow_position">
                    <img className="rotate w-100" src={arrow} alt="arrow" />
                  </div>
                </div>
                <p className=" fw_700 fs_xxl clr_white p-2 mb-0">Title</p>
                <p className=" fw_400 fs_lg clr_lightgrey ps-2 pe-5  pb-3 me-4 ">
                  We are designed to help your business thrive in the online
                  world.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default OurProject;
