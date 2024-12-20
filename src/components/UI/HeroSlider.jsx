import React from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hero-slider.css"; // Ensure your styles are in place for these classes

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 5000,
    autoplaySpeed: 5000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings} className="hero__slider">
      {/* Slide 1 */}
      <div className="slider__item slider__item-01 mt0">
        <Container>
        <div className="slider__content">
  <h4 className="text-light mb-3">Get 25% Off Your First Tire Order</h4>
  <h1 className="text-light mb-4">40+ Years of Experience</h1>
  <p className="text-light mb-4">Shop now for premium quality tires delivered anywhere in the USA.</p>
  <button className="btn reserve__btn mt-4">
    <Link to="/tires">Shop Tires</Link>
  </button>
</div>
        </Container>
      </div>

      {/* Slide 2 */}
      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content">
            <h4 className="text-light mb-3">Free Shipping on All Orders</h4>
            <h1 className="text-light mb-4">Order Tires Today and Save Big!</h1>
            <p className="text-light mb-4">Take advantage of our free shipping offer and find the perfect tires for your car, truck, or SUV.</p>
            <button className="btn reserve__btn mt-4">
              <Link to="/tires">Browse Tires</Link>
            </button>
          </div>
        </Container>
      </div>


    </Slider>
  );
};

export default HeroSlider;
