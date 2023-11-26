import React from "react";
import "./Faq.css";
import { CiSearch } from "react-icons/ci";
import faqimage from "../../Images/Faq.svg";
import Faqbox from "../CustomComponenet/FaqBox/Faqbox";

const Faq = () => {   
  return (
    <>
    <div className="wrapper">
      <div className="main-faq">
        <div className="faq-heading-1">
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="faq-heading">
          <h3>Welcome, How can we help you?</h3>
        </div>
        <div className="input-box">
          <CiSearch className="search-icon" />
          <input type="text" placeholder="Type here to search for answers" />
        </div>

      
      </div>
        <div className="faq-render">
        <Faqbox/>
        <Faqbox/>
        <Faqbox/>
        <Faqbox/>
        <Faqbox/>
        <Faqbox/>
        <Faqbox/>
        <Faqbox/>
        <Faqbox/>
        </div>
        </div>
    </>
  );
};

export default Faq;
