import React, { useState, useRef } from "react";
import "./CarrersForm.css";

import emailjs from "@emailjs/browser";
import { useParams } from "react-router-dom";

const CarrersForm = () => {
  const params = useParams();
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    yearsOfExp: "",
    currentCtc: "",
    expectedCtc: "",
    currentLocation: "",
    resume: "",
    position: params.position,
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6p6tclb",
        "template_4ozpbne",
        form.current,
        "8-XJo6lFLXtQ1sz3e"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="yearsOfExp">Years of Experience:</label>
        <input
          type="number"
          id="yearsOfExp"
          name="yearsOfExp"
          value={formData.yearsOfExp}
          onChange={handleChange}
          required
        />

        <label htmlFor="currentCtc">Current CTC:</label>
        <input
          type="text"
          id="currentCtc"
          name="currentCtc"
          value={formData.currentCtc}
          onChange={handleChange}
          required
        />

        <label htmlFor="expectedCtc">Expected CTC:</label>
        <input
          type="text"
          id="expectedCtc"
          name="expectedCtc"
          value={formData.expectedCtc}
          onChange={handleChange}
          required
        />

        <label htmlFor="currentLocation">Current Location:</label>
        <input
          type="text"
          id="currentLocation"
          name="currentLocation"
          value={formData.currentLocation}
          onChange={handleChange}
          required
        />

        {/* <label htmlFor="resume">Resume Upload:</label>
        <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} required /> */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CarrersForm;
