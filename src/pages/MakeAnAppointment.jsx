import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const MakeAnAppointment = () => {
  return (
    <Helmet title="Make An Appointment">
      <CommonSection title="Make An Appointment" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Schedule Your Appointment</h6>

              <Form>
                <FormGroup className="appointment__form">
                  <Input placeholder="Your Name" type="text" required />
                </FormGroup>
                <FormGroup className="appointment__form">
                  <Input placeholder="Email" type="email" required />
                </FormGroup>
                <FormGroup className="appointment__form">
                  <Input placeholder="Phone Number" type="tel" required />
                </FormGroup>
                <FormGroup className="appointment__form">
  <Input placeholder="Select Meeting Context" type="select">
    <option value="buy_new_tyres">Buy New Tires</option>
    <option value="tyre_services">Tire Services</option>
    <option value="sell_tyres">Sell Tires</option>
    <option value="others">Others</option>
  </Input>
</FormGroup>
                <FormGroup className="appointment__form">
                  <Input placeholder="Preferred Date" type="date" required />
                </FormGroup>
                <FormGroup className="appointment__form">
                  <Input placeholder="Preferred Time" type="time" required />
                </FormGroup>
                <FormGroup className="appointment__form">
                  <textarea
                    rows="4"
                    placeholder="Additional Notes"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className="appointment__btn" type="submit">
                  Submit Appointment
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="appointment__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">
                  711 North Fairview ST, Santa Ana, California
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h3 className="fs-6 mb-0">Phone:</h3>
                  <h3 className="section__description mb-0">714-981-9749</h3>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">
                    betagroup711@gmail.com
                  </p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i className={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default MakeAnAppointment;
