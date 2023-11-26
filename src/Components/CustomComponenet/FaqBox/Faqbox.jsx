import React from "react";
import faqimage from "../../../Images/Faq.svg"
import "./faqbox.css";

const Faqbox = () => {
  return (
    <div>
      <div className="faq-box">
        <div className="faq-box-image">
          <img src={faqimage} alt="" />
        </div>
        <div className="faq-box-content">
          <p>Talent Acquisition and Recruitment</p>
        </div>
      </div>
    </div>
  );
};

export default Faqbox;
