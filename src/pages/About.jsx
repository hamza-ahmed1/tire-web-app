import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/ContactUsSection";

import driveImg from "../assets/all-images/drive.jpg"; // This could be an image of tires or a customer service team
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About Us">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="Tire installation or service" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                 Your Trusted Source for Quality Tires Across the USA
                </h2>

                <p className="section__description">
                  We are committed to providing top-quality tires at affordable prices, delivered directly to your door, anywhere in the USA. Our extensive range includes tires for all vehicle types, from cars to trucks, and everything in between.
                </p>

                <p className="section__description">
                  With years of experience in the tire industry, our team is dedicated to offering expert advice, unmatched customer service, and fast delivery. We help you find the perfect tire for your needs and ensure a smooth purchasing experience from start to finish.
                </p>

                <div className="d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i className="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+1 714-486-1047</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      {/* <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Meet Our Team</h6>
              <h2 className="section__title">Our Experts</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section> */}
    </Helmet>
  );
};

export default About;
