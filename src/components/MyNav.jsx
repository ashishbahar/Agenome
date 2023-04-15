import React, { useState } from "react";
import { Container } from "react-bootstrap";
import navlogo from "../assets/images/svg/navlogo.svg";
import cross from "../assets/images/svg/cross.svg";

const MyNav = () => {
  const [first, setfirst] = useState(true);
  if (first) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }
  return (
    <nav className="">
      <Container>
        <div className="d-flex justify-content-between py-3 align-items-center">
          <ul className="d-flex p-0 m-0">
            <li>
              <a href="#">
                <img src={navlogo} alt="navlogo" />
              </a>{" "}
            </li>
            <li>
              <a
                href="#"
                className=" fw_700 fs_xl clr_white font-italic logo_hover"
              >
                Agenone
              </a>
            </li>
          </ul>
          <ul
            className={
              first
                ? "d-flex m-0 p-0 hide mobile_view flex-lg-row position-realtive "
                : "d-flex m-0 p-0 show  mobile_view flex-lg-row position-realtive "
            }
          >
            <li>
              <a
                href="#"
                onClick={() => {
                  setfirst(true);
                }}
                className=" fw_500 fs_md clr_white link "
              >
                Home
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                onClick={() => {
                  setfirst(true);
                }}
                className=" fw_500 fs_md clr_white ms-lg-5 link "
              >
                Services
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                onClick={() => {
                  setfirst(true);
                }}
                className=" fw_500 fs_md clr_white ms-lg-5 link "
              >
                Project
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                onClick={() => {
                  setfirst(true);
                }}
                className=" fw_500 fs_md clr_white ms-lg-5 link "
              >
                About Us
              </a>
            </li>
            <img
              onClick={() => {
                setfirst(true);
              }}
              className="d-lg-none position-absolute cross_position"
              src={cross}
              alt="cross"
            />
          </ul>
          <div className="d-flex d-lg-block d-none">
            <button className=" fw_500 fs_md clr_white nav_btn_modify bg_green_linear border-0">
              Contact Us
            </button>
          </div>
          <div
            className=" mobile_icon d-lg-none"
            onClick={() => {
              setfirst(false);
            }}
          >
            <div className="icon_line"></div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default MyNav;
