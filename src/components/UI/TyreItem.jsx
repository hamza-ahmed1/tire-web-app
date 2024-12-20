import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const TyreItem = (props) => {
  const {id, imgUrl, model, name, sizes } = props.item; // Updated to match tireData structure

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={imgUrl} alt={name} className="" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{name}</h4> {/* Updated to name */}
          <h6 className="rent__price text-center mt-">
          <div className="sizes-dropdown mt-3">
            <h6 className="text-center">Available Sizes</h6>
            <select className="form-select">
              {sizes.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className="d-flex align-items-center gap-1">
              <i className="ri-roadster-line"></i> {model} {/* Updated icon */}
            </span>
            {/* Removed automatic and speed since they might not be applicable */}
          </div>

          <button className="w-50 car__item-btn car__btn-rent">
            <Link to={`/tires/${id}`}>Buy Now</Link> {/* Updated route */}
          </button>

          <button className="w-50 car__item-btn car__btn-details">
            <Link to={`/tires/${id}`}>Details</Link> {/* Updated route */}
          </button>
        </div>
      </div>
    </Col>
  );
};

export default TyreItem;