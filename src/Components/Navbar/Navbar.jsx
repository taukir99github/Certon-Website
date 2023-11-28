import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { CiViewTimeline } from "react-icons/ci";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 600);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    setitmouse(true);
    sethrmouse(false);
    setsalesmouse(false);
    setdigitalmouse(false);
  };

  const hrmouseEnter = () => {
    sethrmouse(true);
    setitmouse(false);
    setsalesmouse(false);
    setdigitalmouse(false);
  };

  const salesmouseEnter = () => {
    setsalesmouse(true);
    setitmouse(false);
    sethrmouse(false);
    setdigitalmouse(false);
  };

  const digitalmouseEnter = () => {
    setdigitalmouse(true);
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
      <nav className={scrollPosition > 0 ? "navbar" : "respoNav"}>
        <div className="nav-pt-1">
          <Link to="/">
            <img src={navnew} alt="" />
          </Link>
        </div>
        {!isMobile ? (
          <div className="nav-pt-2">
            <Link to="/">
              <div>Home</div>
            </Link>
            <Link to="/About">
              <div>About</div>
            </Link>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Our Brand
              <div
                style={
                  isDropdownVisible ? { display: "block" } : { display: "none" }
                }
              >
                <ul className="list">
                  <Link to="/Hitechmart">
                    <li>Hitecmart</li>
                  </Link>
                  <Link to="/FranchiseTank">
                    <li>FranchiseTank</li>
                  </Link>
                  <Link to="/Heaven">
                    <li>Grand heavens</li>
                  </Link>
                  <Link to="/Grand">
                    <li>Job Tanks</li>
                  </Link>
                  <Link to="/Exports">
                    <li>Certon exports</li>
                  </Link>
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
                  isDropdownVisible1
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <ul className="list">
                  <li>
                    <div onMouseEnter={itmouseEnter}>
                      IT Services
                      <div
                        style={
                          itmouse ? { display: "flex" } : { display: "none" }
                        }
                      >
                        <ul className="list2">
                          <Link to="/ServiceUpperPart">
                            <li>Software Development</li>
                          </Link>
                          <Link to="/WebDevelopment">
                            <li>Web Development </li>
                          </Link>
                          <Link to="/AppDevelopment">
                            <li>App Development</li>
                          </Link>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <div onMouseEnter={hrmouseEnter}>
                    <li>
                      HR Services
                      <Fade>
                        <div
                          style={
                            hrmouse ? { display: "flex" } : { display: "none" }
                          }
                        >
                          <ul className="list2">
                            <Link to="/Hr">
                              <li>Talent Acquisition/Recruitment</li>
                            </Link>
                            <Link to="/PerformanceManagement">
                              <li>Performance Management</li>
                            </Link>
                            <Link to="/TrainingAndDevelopment">
                              <li>Employee Training/Development</li>
                            </Link>
                            <Link to="/Development">
                              <li>Organizational Development</li>
                            </Link>
                          </ul>
                        </div>
                      </Fade>
                    </li>
                  </div>
                  <div onMouseEnter={salesmouseEnter}>
                    <li>
                      Sales and Marketing
                      <div
                        style={
                          salesmouse ? { display: "flex" } : { display: "none" }
                        }
                      >
                        <ul className="list2">
                          <Link to="/Branding">
                            <li>Branding & Position</li>
                          </Link>
                          <Link to="/Market">
                            <li>Market Research & Analysis</li>
                          </Link>
                          <Link to="/Crm">
                            <li>CRM</li>
                          </Link>
                          <Link to="/SalesSupport">
                            <li>Sales Support</li>
                          </Link>
                        </ul>
                      </div>
                    </li>
                  </div>
                  <div onMouseEnter={digitalmouseEnter}>
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
                              <Link to="/SearchEngine">
                                <li>Search Engine Optimization</li>
                              </Link>
                              <Link to="/Pay">
                                <li>pay Per Click Advertising</li>
                              </Link>
                              <Link to="/Media">
                                <li>Social Media Marketing</li>
                              </Link>
                              <Link to="/Email">
                                <li>E-mail Marketing</li>
                              </Link>
                            </ul>
                          </div>
                        </Fade>
                      </div>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            <Link to="/Carrer">
              <div>Careers</div>
            </Link>
            <Link to="/Contact">
              <div>Contact Us</div>
            </Link>
          </div>
        ) : (
          <CiViewTimeline className="toggler" onClick={handlemobNav} />
        )}
      </nav>
      {mobNav ? (
        <Slide top>
          <div className="mobNavbar">
            <div>
              <Link to="/">
                <div>Home</div>
              </Link>
            </div>
            <div>
              <Link to="/About">
                <div>About</div>
              </Link>
            </div>
            <div
              onMouseEnter={handleMouseEntermob}
              onMouseLeave={handleMouseLeavemob}
            >
              <h3>Our Brand</h3>
              <ul
                className="listMob"
                style={
                  isDropdownVisiblemob
                    ? { display: "flex" }
                    : { display: "none" }
                }
              >
                <Link to="/Hitechmart">
                  <li>Hitecmart</li>
                </Link>
                <Link to="/FranchiseTank">
                  <li>FranchiseTank</li>
                </Link>
                <Link to="/Heaven">
                  <li>Grand havens</li>
                </Link>
                <Link to="/Grand">
                  <li>Job Tanks</li>
                </Link>
                <Link to="/Exports">
                  <li>Certon exports</li>
                </Link>
              </ul>
            </div>
            <div
              onMouseEnter={handleMouseEntermob1}
              onMouseLeave={handleMouseLeavemob1}
            >
              <h3>Our Service</h3>
              <ul
                className="listMob1"
                style={
                  isDropdownVisiblemob1
                    ? { display: "flex" }
                    : { display: "none" }
                }
              >
                <div onMouseEnter={itmouseEnter}>
                  IT Services
                  <div
                    style={itmouse ? { display: "flex" } : { display: "none" }}
                  >
                    <ul className="list2">
                      <Link to="/ServiceUpperPart">
                        <li>Software Development</li>
                      </Link>
                      <Link to="/WebDevelopment">
                        <li>Web Development </li>
                      </Link>
                      <Link to="/AppDevelopment">
                        <li>App Development</li>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div onMouseEnter={hrmouseEnter}>
                  <li>
                    HR Services
                    <Fade>
                      <div
                        style={
                          hrmouse ? { display: "flex" } : { display: "none" }
                        }
                      >
                        <ul className="list2">
                          <Link to="/Hr">
                            <li>Talent Acquisition/Recruitment</li>
                          </Link>
                          <Link to="/PerformanceManagement">
                            <li>Performance Management</li>
                          </Link>
                          <Link to="/TrainingAndDevelopment">
                            <li>Employee Training/Development</li>
                          </Link>
                          <Link to="/Development">
                            <li>Organizational Development</li>
                          </Link>
                        </ul>
                      </div>
                    </Fade>
                  </li>
                </div>
                <div onMouseEnter={salesmouseEnter}>
                  <li>
                    Sales and Marketing
                    <div
                      style={
                        salesmouse ? { display: "flex" } : { display: "none" }
                      }
                    >
                      <ul className="list2">
                        <Link to="/Branding">
                          <li>Branding & Position</li>
                        </Link>
                        <Link to="/Market">
                          <li>Market Research & Analysis</li>
                        </Link>
                        <Link to="/Crm">
                          <li>CRM</li>
                        </Link>
                        <Link to="/SalesSupport">
                          <li>Sales Support</li>
                        </Link>
                      </ul>
                    </div>
                  </li>
                </div>
                <div onMouseEnter={digitalmouseEnter}>
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
                            <Link to="/SearchEngine">
                              <li>Search Engine Optimization</li>
                            </Link>
                            <Link to="/Pay">
                              <li>pay Per Click Advertising</li>
                            </Link>
                            <Link to="/Media">
                              <li>Social Media Marketing</li>
                            </Link>
                            <Link to="/Email">
                              <li>E-mail Marketing</li>
                            </Link>
                          </ul>
                        </div>
                      </Fade>
                    </div>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </Slide>
      ) : null}
    </>
  );
}

export default Navbar;
