import React from "react";
import "./LogoSlider.css";
import Slider from "react-infinite-logo-slider";
import slider1 from "../../../Images/slider1.png";
import slider2 from "../../../Images/slider2.png";
import slider3 from "../../../Images/slider3.png";
import slider4 from "../../../Images/slider4.png";
import slider5 from "../../../Images/slider5.png";

const LogoSlider = () => {
  return (
    <div>
      <div className="main-slider">
        <div className="main-header">
          <h2>We Branch Out to</h2>
        </div>
        <div className="slider-logo">
          <Slider
            // width="300px"
            duration={30}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={"#fff"}
 
            style={{ gap: "3rem",  margin: "50px"}}
          >
            <Slider.Slide>
              <div className="slider">
                <img src={slider1} alt="" />
              </div>
            </Slider.Slide>

            <Slider.Slide>
              <div className="slider">
                <img src={slider2} alt="" />
              </div>
            </Slider.Slide>

            <Slider.Slide>
              <div className="slider">
                <img src={slider3} alt="" />
              </div>
            </Slider.Slide>

            <Slider.Slide>
              <div className="slider">
                <img src={slider4} alt="" />
              </div>
            </Slider.Slide>

            <Slider.Slide>
              <div className="slider">
                <img src={slider5} alt="" />
              </div>
            </Slider.Slide>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
