import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  const selected_tyre = () => {

  }
  return (
    <Form className="form">
            <label>Select Your Brand</label>
 
      <div className=" d-flex align-items-center justify-content-between flex-wrap">






        <FormGroup className="select__group">
        <br/>
        <select>

  <option value="Continental">Continental</option>
  <option value="Cooper">Cooper</option>
  <option value="dunlop">Dunlop</option>
  <option value="Falken">Falken</option>
  <option value="bf-goodrich">General</option>
  <option value="hankook">Hankook</option>
  <option value="Good">Good Year</option>
  <option value="Vredestein">Vredestein</option>
  <option value="Laufenn">Laufenn</option>
 <option value="Michelin">Michelin</option>
</select>

        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn" onClick={selected_tyre}>Find Tyre</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
