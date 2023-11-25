import React from "react";
import idea from "./Whoweare.module.css";
import Fade from "react-reveal/Fade";
import Homebg3 from "../../../img/service/Homebg3.jpg"
export const WhoWeAre = () => {
  return (
    <div className={idea["image-container"]}>
      <div className={idea["imggg-cont"]}>
        <div style={{ opacity: "0.5" }}>
          <img src={Homebg3} alt="cover" className={idea.image} />
        </div>

        <div className={idea["image-shadow"]} />
      </div>
      <Fade  >

      <div className={idea["text-overlay-container"]}>
        {" "}
        {/* Container for text overlay */}
        
        <h1 className={idea["text-overlay"]}>Who We Are</h1>
        <div className={idea.content} >
          Certon Technologies is one of the top IT consulting companies in
          India, headquartered in Pune, and a corporate office in Bangalore. We
          operate with high standards of refinement and advanced technology to
          serve our clients in the best possible way.We, as a reputed IT
          services company in Bangalore, offer other various services such as
          HR, Sales & Marketing, and Digital Marketing. Our professional team is
          skilled enough to serve you to achieve the best possible result to
          flourish your business.
        </div>
        {/* <button className={idea["text-overlay2"]}>Join Us Now</button> */}
        <button className={idea.button}> Join us Now</button>
      </div>
      </Fade>
    </div>
  );
};
