import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";

import TyreImg from "../../assets/all-images/need-help-tyre.png"; 
import { useNavigate } from "react-router-dom";
const ContactUsSection = () => {
  const navigate =useNavigate();
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={TyreImg} alt=""  className="Find-help-img"/>
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Have Questions? We're Here to Help!
            </h2>

            <button className="btn become__driver-btn mt-4" onClick={()=>{navigate('/contact')}}>
              Contact Us
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUsSection;
