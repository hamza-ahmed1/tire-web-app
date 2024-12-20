import React from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

const BookingForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={submitHandler}>
      {/* Customer Name */}
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="First Name" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name" />
      </FormGroup>

      {/* Contact Information */}
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Phone Number" />
      </FormGroup>

      {/* Tire Details */}
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="tireBrand" id="tireBrand">
          <option value="" disabled selected>
            Select Tire Brand
          </option>
          <option value="brand1">Brand 1</option>
          <option value="brand2">Brand 2</option>
          <option value="brand3">Brand 3</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select name="tireSize" id="tireSize">
          <option value="" disabled selected>
            Select Tire Size
          </option>
          <option value="size1">195/65 R15</option>
          <option value="size2">205/55 R16</option>
          <option value="size3">215/45 R17</option>
        </select>
      </FormGroup>

      {/* Quantity */}
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="number" placeholder="Quantity" min="1" />
      </FormGroup>

      {/* Appointment Date */}
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="date" placeholder="Appointment Date" />
      </FormGroup>

      {/* Additional Notes */}
      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Additional Notes (Optional)"
        ></textarea>
      </FormGroup>
    </Form>
  );
};

export default BookingForm;
