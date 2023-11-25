import React from "react";
import idea from  "./OurServiceHome.module.css"
import OurServiceImages from "./OurServiceImages/OurServiceImages";
import CountUp from "react-countup";


export const OurServiceHome=()=>{
return (
  <div>
    <OurServiceImages />
    <div className={idea.bgss12}>
      <div className={idea.container12}>
        <div className={idea.row12}>
          <div className={idea.cont12}>
            <h1 className={idea.hea12}>
              {
                <CountUp
                  enableScrollSpy
                  // className={idea.hea12}
                  start={0}
                  end={100}
                   duration={3}
                />
              }
              +
            </h1>

            {/* <AiOutlineStar className={idea.styt} /> */}
            <p className={idea.styew12}>Project Completed</p>
          </div>
          <div className={idea.cont12}>
            <h1 className={idea.hea12}>
            
              <CountUp enableScrollSpy start={0} end={500}  duration={3} />+
            </h1>

            {/* <AiOutlineStar className={idea.styt} /> */}
            <p className={idea.styew12}>Satisfied Clients</p>
          </div>
          <div className={idea.cont12}>
            <h1 className={idea.hea12}>
           
              <CountUp enableScrollSpy start={0} end={5}  duration={3} />+
            </h1>

            {/* <AiOutlineStar className={idea.styt} /> */}
            <p className={idea.styew12}> Countries Served</p>
          </div>
          <div className={idea.cont12}>
            <h1 className={idea.hea12}>
        
              <CountUp enableScrollSpy start={0} end={100}  duration={3} />+
            </h1>

            {/* <AiOutlineStar className={idea.styt} /> */}
            <p className={idea.styew12}>Soloution Experts</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);    
}