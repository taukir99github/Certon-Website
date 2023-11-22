import React from "react";
import "./About.css";
import hitechimage from "../../src/Images/Hitech.svg";
import star1 from "../Images/star1.svg";
import star2 from "../Images/star2.svg";
import star3 from "../Images/star3.svg";
import star4 from "../Images/star4.svg";
import star5 from "../Images/star5.svg";
// import star from "../../src/Assests/Star.svg";

const About = () => {
  return (
    <>
      <div className="service-container">
        <div className="image-container">
          <div className="image-container-text">
            <h1> Quality, Service & Diversity are Assured</h1>
          </div>
        </div>

        <div className="service-container-hero">
          <div className="service-container-hero-image">
            <img src={hitechimage} alt="" />
          </div>
          <div className="hitech-text">
            <h1>Hitech Mart</h1>
          </div>
          <div className="service-container-hero-text">
            <p>
              HiTec Mart is a wholesale B2B marketplace in India that offers a
              bulk supply of different categories of various garments and
              footwear for men, women, and kids.HiTec Mart provides all the
              categories associated with men's, women's, and kid's fashion. It
              also provides Wholesale, Retail, and Delivery Franchise
              opportunities to individuals and one can choose these based on
              their budget.
            </p>
          </div>
        </div>
        <div className="service-container-lower">
          <div className="service-container-lower-h1">
            <h1>What makes HiTec Mart different</h1>
            <p>
              HiTec Mart stands as a unique platform for growth and success,
              setting us apart in the dynamic business landscape. <br />
              Our strong support system for franchise partners ensures a
              collaborative and thriving environment.
            </p>
          </div>
          <div className="service-container-lower-card">
            <div className="service-container-lower-card-1 card-design"></div>
            <div className="service-container-lower-card-2 card-design"></div>
            <div className="service-container-lower-card-3 card-design"></div>
            <div className="service-container-lower-card-4 card-design"></div>
            <div className="service-container-lower-card-5 card-design"></div>
          </div>
        </div>
        <div className="service-container-lower-pt-2">
          <div className="service-container-lower-pt-2-h1">
            <h1>Why Hitech Mart ?</h1>
          </div>
          <div className="service-container-lower-pt-2-small-card">
            <div className="image-star">
              {" "}
              <img src={star1} alt="" />
            </div>

            <div className="image-star">
              {" "}
              <img src={star2} alt="" />
            </div>
            <div className="image-star">
              <img src={star3} alt="" />
            </div>
            <div className="image-star">
              {" "}
              <img src={star4} alt="" />
            </div>
            <div className="image-star">
              <img src={star5} alt="" />
            </div>
          </div>
        </div>

        <div className="service-container-lower-pt-3">
          <div className="service-container-lower-pt-3-image">
            <div className="service-container-lower-pt-3-text">
              <p>
                Our deep focus on collaboration, reliability, and continuous
                improvement is what truly makes HiTec Mart stand out as a leader
                in the industry. Discover the HiTec Mart difference and
                transform your business journey today.
              </p>
              <div className="service-container-button">
                <button>To know More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
