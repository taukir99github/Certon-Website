import React from "react";
import "./Contact.css";
import { FaRegMessage } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import Roll from "react-reveal/Roll";
import RubberBand from "react-reveal/RubberBand";
import Wobble from "react-reveal/Wobble";

const Contact = () => {
  return (
    <>
      <div className="main-contact">
        <div className="contact-content">
          <RubberBand>
            <h1>We'd Love to Hear From You!</h1>
          </RubberBand>
          <div className="contact-para">
            <p>
              Share Your Needs with Us Below, and Let's Establish a Connection
            </p>
            <div className="heading-Get">
              <Roll Top>
                <p>Get in Touch!</p>
              </Roll>
            </div>
          </div>
        </div>

        <div className="hero-section">
          <div className="message">
            <FaRegMessage style={{ fontSize: "30px", color: "#5CE1E6" }} />
            <p>info@certontech.com</p>
          </div>
          <div className="phone">
            <BsTelephone style={{ fontSize: "30px", color: "#5CE1E6" }} />
            080-68507663
          </div>
          <div className="address">
            <SlLocationPin style={{ fontSize: "30px", color: "#5CE1E6" }} />
            <p>
              Plot No: 128-P2, Ground Floor, EPIP Zone Whitefield Rd,near Ginger
              Hotel, Whitefield, EPIP Zone,<p> Bengaluru, Karnataka 560066</p>
            </p>
          </div>
        </div>

        <div className="form-section">
          <div className="Form">
            <form action="">
              <div className="upper-section">
                <input type="text" placeholder="Your Name" />
                <input type="Email" placeholder="Your Email" />
              </div>
              <div className="lower-section">
                <input type="number" placeholder="Your Phone" />
                <input type="text" placeholder="Your Place" />
              </div>
              <div className="message-section">
                <textarea
                  type="text"
                  rows="8"
                  cols="70"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-btn">
                <Wobble>
                  <button>Submit</button>
                </Wobble>
              </div>
            </form>
          </div>
          <div className="location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9267422206726!2d77.71582437392395!3d12.976537314772326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11a235ad9125%3A0xc51d9bf3915e2ae5!2sCerton%20Technologies!5e0!3m2!1sen!2sin!4v1701077927542!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
