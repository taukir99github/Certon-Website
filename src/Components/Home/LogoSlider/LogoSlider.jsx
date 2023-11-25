import React, { useRef } from "react";
import logo from "./LogoSlider.module.css";
import Slider from "react-infinite-logo-slider";
import { Link } from "react-router-dom";
import JOBtANK from "../../../img/service/JOBtANK.jpg";
import Ftank from "../../../img/service/Ftank.png";
import gHeav2 from "../../../img/service/gHeav2.jpg";
import certonExpp from "../../../img/service/certonExpp.jpg";
import hitec from "../../../img/service/hitec.jpeg";

export const Logoslider = () => {
  return (
    <div className={logo.container}>
      <h2 className={logo.heading}>We Branch Out to</h2>

      <div className={logo.slider}>
        <Slider
          width="300px"
          duration={30}
          pauseOnHover={true}
          blurBorders={false}
          blurBoderColor={"#fff"}
        >
          <Slider.Slide>
            <div className={logo.slide}>
              <Link to="https://jobtanks.in/">
                {" "}
                <img
                  alt="kk"
                  className={logo.jjjj2}
                  src={JOBtANK}
                  style={{ height: 100, width: "100%" }}
                />
              </Link>
            </div>
          </Slider.Slide>

          <Slider.Slide>
            <div className={logo.slide}>
              <Link to="https://franchisetanks.com/">
                {" "}
                <img
                  className={logo.jjjj1}
                  src={Ftank}
                  alt="kk"
                  style={{ height: 120, width: "100%", borderRadius: "50%" }}
                />
              </Link>
            </div>
          </Slider.Slide>
          <Slider.Slide>
            <div>
              <Link to="https://grandhavens.in/">
                {" "}
                <img
                  src={gHeav2}
                  className={logo.jjjj}
                  alt="kk"
                  style={{ height: 100, width: "400px" }}
                />
              </Link>
            </div>
          </Slider.Slide>
          <Slider.Slide>
            <div className={logo.slide}>
              <Link to="https://certonexports.com/">
                {" "}
                <img
                  src={certonExpp}
                  className={logo.kkkk1}
                  alt="hitecmart"
                  style={{ height: 100, width: "100%" }}
                />
              </Link>
            </div>
          </Slider.Slide>
          <Slider.Slide>
            <div className={logo.slide}>
              <Link to="https://hitecmart.in/">
                {" "}
                <img
                  src={hitec}
                  alt="kk"
                  className={logo.kkkk}
                  style={{ height: 50, width: "70%", left: "10%" }}
                />
              </Link>{" "}
            </div>
          </Slider.Slide>
        </Slider>{" "}
      </div>
    </div>
  );
};

// export default Logoslider;
