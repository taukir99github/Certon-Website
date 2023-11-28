import React from "react";
import "./Carrer.css";
import CustomUppersection from "../CustomComponenet/CustomUppersection";
import join from "../../Images/Join.jpg";

const Carrer = () => {
  return (
    <>
      <div className="main-career">
        <CustomUppersection
          title={"Start a Promising Career from Certon"}
          image={"career-back"}
        />

        <div className="main-wrapper">
          <div className="career-heading">
            <div className="heading1">
              <h1>Shape Your Future with Certon Technologies!</h1>
            </div>
            <div className="paragraph">
              <p>
                "We believe in fostering a collaborative environment where each
                team member's unique talents and perspectives contribute to our
                collective strength. Together, we aim to not only meet but
                exceed the challenges ahead, and we welcome individuals who
                share our passion for innovation and excellence to be part of
                our dynamic and growing team."
              </p>
            </div>
          </div>

          <div className="lower-heading">
            <div className="lower-heading-1">
              <div className="lower-content">
                <h1>Interested in Joining Our Team?</h1>
              </div>
              <div className="paragraph">
                <p>
                  If you're ready to embark on a rewarding career journey,
                  explore our current openings and apply today.
                </p>
              </div>
            </div>
            <div className="lower-heading-2">
              <img src={join} alt="" />
            </div>
          </div>
        </div>

        {/* our code */}
        <div className="hole-container">
          <h1 className="job-heading">Job Openings</h1>
          <div className="carts">
            <div className="cart1">
              <p></p>

            </div>
            <div className="cart1">
              <p></p> 

            </div>
            <div className="cart1">
              <p></p>

            </div>
            <div className="cart1">
              <p></p>

            </div>
          </div>
        </div>





      </div>
    </>
  );
};

export default Carrer;
