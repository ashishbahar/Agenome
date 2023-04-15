import React from "react";
import { Accordion, Container } from "react-bootstrap";
import uiux from "../assets/images/png/Img.png";

const Accordian = () => {
  return (
    <section>
      <Container className="pb-5 mb-5">
        <div>
          <p className="fw_700 fs_4xl text-center pt-5 mt-sm-3 ">
            The Services We Offer
            <span className="green_linear_text_bg"> For You</span>
          </p>
          <div>
            <Accordion defaultActiveKey="0">
              <Accordion.Item
                eventKey="0"
                className="p-lg-4 bg_off_white border-0 mt-5"
              >
                <div className=" w-100 bg_off_white ">
                  <Accordion.Header className=" d-flex align-item-center ">
                    <h2 className=" fw_600 fs_xxl">01</h2>
                    <h2 className="ps-sm-5 ps-2 fw_600 fs_xxl ">
                      {" "}
                      UI/UX Design
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body className=" ms-sm-5 ps-sm-5">
                    <p className="fw_400 fs_md max_width_700  clr_grey">
                      Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi
                      ac eu. Ultricies nisl enim lacus id aliquam montes euismod
                      urna sem.
                    </p>
                    <img src={uiux} alt="uiux" className="w-100" />
                  </Accordion.Body>
                </div>
              </Accordion.Item>
              <Accordion.Item
                eventKey="1"
                className="p-lg-4 bg_off_white  border-0 mt-4"
              >
                <div className=" w-100 ">
                  <Accordion.Header className=" d-flex align-item-center">
                    <h2 className="fw_600 fs_xxl">02</h2>
                    <h2 className="ps-sm-5 ps-2 fw_600 fs_xxl ">
                      {" "}
                      Digital Marketing
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body className="ms-sm-5 ps-sm-5">
                    <p className="fw_400 fs_md max_width_700 clr_grey">
                      Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi
                      ac eu. Ultricies nisl enim lacus id aliquam montes euismod
                      urna sem.
                    </p>
                    <img src={uiux} alt="uiux" className="w-100" />
                  </Accordion.Body>
                </div>
              </Accordion.Item>
              <Accordion.Item
                eventKey="2"
                className="p-lg-4 bg_off_white  border-0 mt-4"
              >
                <div className=" w-100 ">
                  <Accordion.Header className="">
                    <h2 className="fw_600 fs_xxl">03</h2>
                    <h2 className="ps-sm-5 ps-2 fw_600 fs_xxl ">
                      Social Media Management
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body className="ms-sm-5 ps-sm-5">
                    <p className="max_width_700 clr_grey">
                      Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi
                      ac eu. Ultricies nisl enim lacus id aliquam montes euismod
                      urna sem.
                    </p>
                    <img src={uiux} alt="uiux" className="w-100" />
                  </Accordion.Body>
                </div>
              </Accordion.Item>
              <Accordion.Item
                eventKey="3"
                className="p-lg-4 bg_off_white  border-0 mt-4"
              >
                <div className=" w-100 ">
                  <Accordion.Header className="">
                    <h2 className="fw_600 fs_xxl">04</h2>
                    <h2 className="ps-sm-5 ps-2 fw_600 fs_xxl ">
                      {" "}
                      Development
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body className="ms-sm-5 ps-sm-5">
                    <p className="max_width_700 clr_grey">
                      Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi
                      ac eu. Ultricies nisl enim lacus id aliquam montes euismod
                      urna sem.
                    </p>
                    <img src={uiux} alt="uiux" className="w-100" />
                  </Accordion.Body>
                </div>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Accordian;
