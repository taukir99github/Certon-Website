import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { CiViewTimeline } from "react-icons/ci";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import navlogo from "../../Images/navlogo.png";
import navnew from "../../Images/Navnew.svg";
function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDropdownVisible1, setDropdownVisible1] = useState(false);
  const [isDropdownVisiblemob, setDropdownVisiblemob] = useState(false);
  const [isDropdownVisiblemob1, setDropdownVisiblemob1] = useState(false);
  const [mobNav, setmobNav] = useState(false);
  const [itmouse, setitmouse] = useState(false);
  const [hrmouse, sethrmouse] = useState(false);
  const [salesmouse, setsalesmouse] = useState(false);
  const [digitalmouse, setdigitalmouse] = useState(false);
  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  const handleMouseEnter1 = () => {
    setDropdownVisible1(true);
  };

  const handleMouseLeave1 = () => {
    setDropdownVisible1(false);
  };
  const handleMouseEntermob = () => {
    setDropdownVisiblemob(true);
  };

  const handleMouseLeavemob = () => {
    setDropdownVisiblemob(false);
  };
  const handleMouseEntermob1 = () => {
    setDropdownVisiblemob1(true);
  };

  const handleMouseLeavemob1 = () => {
    setDropdownVisiblemob1(false);
  };
  const handlemobNav = () => {
    setmobNav(!mobNav);
  };

  const itmouseEnter = () => {
    setitmouse(!itmouse);
    sethrmouse(false);
    setsalesmouse(false);
    setdigitalmouse(false);
  };
  const hrmouseEnter = () => {
    sethrmouse(!hrmouse);
    setitmouse(false);
    setsalesmouse(false);
    setdigitalmouse(false);
  };

  const salesmouseEnter = () => {
    setsalesmouse(!salesmouse);
    setitmouse(false);
    sethrmouse(false);
    setdigitalmouse(false);
  };
  const digitalmouseEnter = () => {
    setdigitalmouse(!digitalmouse);
    setitmouse(false);
    sethrmouse(false);
    setsalesmouse(false);
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrollPosition(scrollY);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <nav>
        <div className="nav-pt-1">
          <img src={navnew} alt="" />
        </div>
        <div className="nav-pt-2">
          <div>Home</div>
          <div>About</div>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            Our Brand
            <div
              style={
                isDropdownVisible ? { display: "block" } : { display: "none" }
              }
            >
              <ul className="list">
                {/* <Link to="Hitecmart"> */}
                <li>Hitecmart</li>
                {/* </Link> */}
                {/* <Link to="franchisetank"> */}
                <li>FranchiseTank</li>
                {/* </Link> */}
                {/* <Link to="grandheavens"> */}
                <li>Grand heavens</li>
                {/* </Link> */}
                {/* <Link to="jobtank"> */}
                <li>Job Tanks</li>
                {/* </Link> */}
                {/* <Link to="certonExports"> */}
                <li>Certon exports</li>
                {/* </Link> */}
              </ul>
            </div>
          </div>

          <div
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          >
            Our Service
            <div
              style={
                isDropdownVisible1 ? { display: "block" } : { display: "none" }
              }
            >
              <ul className="list">
                <li>
                  <div onClick={itmouseEnter}>
                    IT Services
                    <div
                      style={
                        itmouse ? { display: "flex" } : { display: "none" }
                      }
                    >
                      <ul className="list2">
                        {/* <Link to="softwareDevelopment"> */}
                        <li>Software Development</li>
                        {/* </Link> */}
                        {/* <Link to="webdevelopment"> */}
                        <li>Web Development </li>
                        {/* </Link> */}
                        {/* <Link to="appdevelopment"> */}
                        <li>App Development</li>
                        {/* </Link> */}
                      </ul>
                    </div>
                  </div>
                </li>
                <div onClick={hrmouseEnter}>
                  <li>
                    HR Services
                    <Fade>
                      <div
                        style={
                          hrmouse ? { display: "flex" } : { display: "none" }
                        }
                      >
                        <ul className="list2">
                          {/* <Link to="Talentacquisition"> */}
                          <li>Talent Acquisition/Recruitment</li>
                          {/* </Link> */}
                          {/* <Link to="Performancemanagement"> */}
                          <li>Performance Management</li>
                          {/* </Link> */}
                          {/* <Link to="employeetraining"> */}
                          <li>Employee Training/Development</li>
                          {/* </Link> */}
                          {/* <Link to="organisationdevelopment"> */}
                          <li>Organizational Development</li>
                          {/* </Link> */}
                        </ul>
                      </div>
                    </Fade>
                  </li>
                </div>
                <div onClick={salesmouseEnter}>
                  <li>
                    Sales and Marketing
                    <div
                      style={
                        salesmouse ? { display: "flex" } : { display: "none" }
                      }
                    >
                      <ul className="list2">
                        {/* <Link to="brndingandPosition"> */}
                        <li>Branding & Position</li>
                        {/* </Link> */}
                        {/* <Link to="marketResearch"> */}
                        <li>Market Research & Analysis</li>
                        {/* </Link> */}
                        {/* <Link to="crm"> */}
                        <li>CRM</li>
                        {/* </Link> */}
                        {/* <Link to="salesandSupport"> */}
                        <li>Sales Support</li>
                        {/* </Link> */}
                      </ul>
                    </div>
                  </li>
                </div>
                <div onClick={digitalmouseEnter}>
                  <li>
                    Digital Marketing
                    <div>
                      <Fade>
                        <div
                          style={
                            digitalmouse
                              ? { display: "flex" }
                              : { display: "none" }
                          }
                        >
                          <ul className="list2">
                            {/* <Link to="searchEngOpt"> */}
                            <li>Search Engine Optimization</li>
                            {/* </Link> */}
                            {/* <Link to="payperclick"> */}
                            <li>pay Per Click Advertising</li>
                            {/* </Link> */}
                            {/* <Link to="socialmedia"> */}
                            <li>Social Media Marketing</li>
                            {/* </Link> */}
                            {/* <Link to="emailMarketing" x> */}
                            <li>E-mail Marketing</li>
                            {/* </Link> */}
                          </ul>
                        </div>
                      </Fade>
                    </div>
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div>Carrers</div>
          <div>Contact Us</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
