import React from "react";
import MyNav from "./MyNav";
import { Col, Container, Row } from "react-bootstrap";
import special1 from "../assets/images/svg/Special1.svg";
import special2 from "../assets/images/svg/Special2.svg";
import special3 from "../assets/images/svg/Special3.svg";
import special4 from "../assets/images/svg/Special4.svg";
import Slider from "react-slick";
import Ornament from "../assets/images/png/Ornament.png";
import Ornament1 from "../assets/images/png/Ornament1.png";

const Header = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <header className="bg_img">
      <MyNav />
      <Container className="py-lg-5 pb-4">
        <div className="text-center pt-5 mt-lg-4">
          <span className="fw_500 clr_white fs_xsm bg_fade py-2 px-3">
            NUMBER ONE CREATIVE DIGITAL AGENCY{" "}
          </span>
          <h1 className=" fw_700 fs_4xl linear_text mt-4">Smart Choices</h1>
          <p className="clr_white  fw_700 fs_4xl pt-0 mt-0 line_height">
            For Your Business Growth
          </p>
          <p className="   m-auto clr_lightgrey fw_500 fs_lg mt-4 pera_width_1 m-auto">
            We're a team of experienced designers, developers, and marketers,
            passionate about delivering exceptional digital solutions.
          </p>
          <button className=" fw_500 fs_md clr_white hero_btn_modify bg_green_linear border-0 mt-5 mb-lg-4">
            Contact Us <span className="add_margin_hover">&rarr;</span>
          </button>
        </div>
        <div className="bg_shape_img mt-5 text-center position-relative overflow-hidden ">
          <img
            className="position-absolute   Ornament"
            src={Ornament}
            alt="Ornament"
          />{" "}
          <img
            className="position-absolute end-0 bottom-0 d-none d-sm-block "
            src={Ornament1}
            alt="Ornament1"
          />
          <p className="fw_600 fs_xxl clr_white pt-3 pera_width m-auto">
            Benefit of improving your business
          </p>
          <Slider {...settings}>
            <Col lg={3} className="text-center py-5">
              <img
                className=" m-auto c_pointer hover_scale"
                src={special1}
                alt="special_1"
              />
              <p className=" c_pointer fw_500 fs_xl clr_white mt-2">
                Expanding the Market
              </p>
            </Col>{" "}
            <Col lg={3} className="text-center py-5 ">
              <img
                className=" m-auto c_pointer hover_scale"
                src={special2}
                alt="special_2"
              />
              <p className=" c_pointer fw_500 fs_xl clr_white mt-2">
                Cost-Effective
              </p>
            </Col>{" "}
            <Col lg={3} className="text-center py-5">
              <img
                className=" m-auto c_pointer hover_scale"
                src={special3}
                alt="special_3"
              />
              <p className=" c_pointer fw_500 fs_xl clr_white mt-2">
                More Professional
              </p>
            </Col>{" "}
            <Col lg={3} className="text-center py-5">
              <img
                className=" m-auto c_pointer hover_scale"
                src={special4}
                alt="special_4"
              />
              <p className=" c_pointer fw_500 fs_xl clr_white mt-2">
                Attract Client
              </p>
            </Col>{" "}
          </Slider>
        </div>
      </Container>
    </header>
  );
};

export default Header;
