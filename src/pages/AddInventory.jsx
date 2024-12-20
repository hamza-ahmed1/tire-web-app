import React, { useState } from 'react';
import './InventoryForm.css'; // Import the CSS for styling

const InventoryForm = () => {
  const [formData, setFormData] = useState({
    brand: '',
    tyreSize: '',
    quantity: '',
    rackNumber: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    // Here you can send the data to the backend or save it locally
    alert('Inventory item added!');
    setFormData({ brand: '', tyreSize: '', quantity: '', rackNumber: '' });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add New Tire Inventory</h2>
      <form className="inventory-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="brand">Brand</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder="Enter tire brand"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="tyreSize">Tire Size</label>
          <input
            type="text"
            id="tyreSize"
            name="tyreSize"
            value={formData.tyreSize}
            onChange={handleChange}
            placeholder="Enter tire size (e.g., 225/45R17)"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Enter quantity"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rackNumber">Rack Number</label>
          <input
            type="text"
            id="rackNumber"
            name="rackNumber"
            value={formData.rackNumber}
            onChange={handleChange}
            placeholder="Enter rack number"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Add Tire</button>
      </form>
    </div>
  );
};

export default InventoryForm;
