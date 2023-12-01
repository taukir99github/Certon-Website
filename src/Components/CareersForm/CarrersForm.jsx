import React, { useState } from 'react';
import './CarrersForm.css'; 

const CarrersForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    yearsOfExp: '',
    currentCtc: '',
    expectedCtc: '',
    currentLocation: '',
    resume: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />

        <label htmlFor="yearsOfExp">Years of Experience:</label>
        <input type="number" id="yearsOfExp" name="yearsOfExp" value={formData.yearsOfExp} onChange={handleChange} required />

        <label htmlFor="currentCtc">Current CTC:</label>
        <input type="text" id="currentCtc" name="currentCtc" value={formData.currentCtc} onChange={handleChange} required />

        <label htmlFor="expectedCtc">Expected CTC:</label>
        <input type="text" id="expectedCtc" name="expectedCtc" value={formData.expectedCtc} onChange={handleChange} required />

        <label htmlFor="currentLocation">Current Location:</label>
        <input type="text" id="currentLocation" name="currentLocation" value={formData.currentLocation} onChange={handleChange} required />

        <label htmlFor="resume">Resume Upload:</label>
        <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CarrersForm;
