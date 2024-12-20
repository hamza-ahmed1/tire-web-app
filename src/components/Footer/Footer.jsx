import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css"; // Your custom styles

const quickLinks = [
  {
    path: "/about",
    display: "About Us",
  },
  {
    path: "/tires",
    display: "Tire Catalog",
  },


  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* Logo and Description */}
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i className="ri-tire-line"></i>
                  <span>
                    Tire Shop <br /> Services
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              We offer a wide selection of high-quality tires for all vehicle types. Whether you need tires for your car, truck, or motorcycle, we have the perfect fit for you. Our services include tire installation, balancing, and repairs.
            </p>
          </Col>

          {/* Quick Links */}
          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          {/* Head Office Info */}
          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">711, NORTH FAIRVIEW STREET, SANTA ANA CARLIFORNIA, USA95ra76 3</p>
              <p className="office__info">Phone: +714 981 9749</p>
              <p className="office__info">Email: betagroup711@gmail.com</p>
              <p className="office__info">Office Hours: Sun - Fri: 10am - 7pm</p>
            </div>
          </Col>

          {/* Newsletter Subscription */}
          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Stay updated with our latest tire offers and news!</p>
              <div className="newsletter">
                <input type="email" placeholder="Your Email" />
                <span>
                  <i className="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          {/* Footer Bottom */}
          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Copyright {year}, Developed by Tire Shop Services. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
