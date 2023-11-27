import React from "react";
import "./Footer.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { ImTwitter } from "react-icons/im";
import { Link } from "react-router-dom";

const NewFooter = () => {
  return (
    <div>
      <div className="main-footer">
        <div className="footer-pt-1">
          <div className="footer-part1-head">
            CERTON
            <h3>Inspiring you to Grow</h3>
          </div>
          <div className="footer-icon-list">
            <div className="footer-icon">
              <Link to="https://www.facebook.com/CertonTech/">
                <FaFacebookF style={{ color: "#000" }} />
              </Link>
            </div>
            <div className="footer-icon">
              <Link to="https://www.instagram.com/certon_tech/">
                <BsInstagram style={{ color: "#000" }} />
              </Link>
            </div>
            <div className="footer-icon">
              <Link to="https://twitter.com/certonT">
                <ImTwitter style={{ color: "#000" }} />
              </Link>
            </div>
            <div className="footer-icon">
              <Link to="https://in.linkedin.com/company/certon-technologies">
                <FaLinkedinIn style={{ color: "#000" }} />
              </Link>
            </div>
          </div>
          <div className="footer-text">
            <p>Legal</p>
            <p>
              Term & <br /> Condition
            </p>
            <p>
              Privacy & <br /> Policy
            </p>
            <Link to="/Faq">
              <p>FAQ</p>
            </Link>
          </div>
        </div>
        <div className="footer-content">
          <div className="footer-pt-2">
            <div className="footer-Brand">
              <div className="footer-content-head">Our Brands</div>
            </div>
            <Link to="/Hitechmart">
              <p> HiTec Mart</p>
            </Link>
            <Link to="/FranchiseTank">
              <p>Franchise Tanks</p>
            </Link>
            <Link to="/Heaven">
              <p>Grand heavens</p>
            </Link>
            <Link to="/Exports">
              <p>Certon exports</p>
            </Link>
            <Link to="/Grand">
              <p>Job Tanks</p>
            </Link>
          </div>
          <div className="footer-pt-3">
            <div className="footer-service">
              <div className="footer-content-head">Our Services</div>
            </div>
            <p>IT Services</p>
            <p> HR Services</p>
            <p>Sales & Marketing</p>
            <p>Digital Marketing</p>
          </div>
          <div className="footer-pt-4">
            <div className="footer-Touch">
              <div className="footer-content-head">Get In Touch</div>
            </div>
            <div className="footer-number">080-68507663</div>

            <p>
              {" "}
              Plot No: 128-P2, Ground Floor, EPIP Zone Whitefield Rd, near
              Ginger Hotel, Whitefield, EPIP Zone, Bengaluru, Karnataka 560066
            </p>
            <div className="footer-email">
              <p>info@certontech.com</p>
            </div>
          </div>
        </div>
       
      </div>
      <div className="copyright">
        <div style={{textAlign:"center"}}>Certon © 2023, All Right Reserved.</div>
        </div>
    </div>
  );
};

export default NewFooter;
