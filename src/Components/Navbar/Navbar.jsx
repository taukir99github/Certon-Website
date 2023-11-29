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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 600);
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
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
    function isMobileScreen() {
      console.log(window.innerWidth <= 800);
      return window.innerWidth <= 800;
    }
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrollPosition(scrollY);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  // const screenSizeIsMobile = isMobileScreen();

  return (
    <>
      <nav className={scrollPosition > 0 ? "navbar" : "respoNav"}>
        <div className="nav-pt-1">
          <img src={navnew} alt="" />
        </div>
        {!isMobile ? (
          <div className="nav-pt-2">
            <Link to="/">
              <div>Home</div>
            </Link>
            <Link to="/AboutUs">
              <div>AboutUs</div>
            </Link>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="dropdown1"
            >
              Our Brand
              <div
                style={
                  isDropdownVisible ? { display: "block" } : { display: "none" }
                }
              >
                <div className="list dropdown-content1">
                  <Link to="/Hitechmart">
                    <div>Hitecmart</div>
                  </Link>
                  <Link to="/FranchiseTank">
                    <div>FranchiseTank</div>
                  </Link>
                  <Link to="/GrandHeaven">
                    <div>Grand heavens</div>
                  </Link>
                  <Link to="/JobTanks">
                    <div>Job Tanks</div>
                  </Link>
                  <Link to="/CertonExports">
                    <div>Certon exports</div>
                  </Link>
                </div>
              </div>
            </div>

            <div
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
              className="dropdown2"
            >
              Our Service
              <div
                style={
                  isDropdownVisible1
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <div className="list">
                  <div className="dropdown-content2">
                    <div onClick={itmouseEnter}>
                      IT Services
                      <div
                        style={
                          itmouse ? { display: "flex" } : { display: "none" }
                        }
                      >
                        <div className="list2 dropdown-content3">
                          <Link to="/SoftwareDevelopment">
                            <div>Software Development</div>
                          </Link>
                          <Link to="/WebDevelopment">
                            <div>Web Development </div>
                          </Link>
                          <Link to="/AppDevelopment">
                            <div>App Development</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div onClick={hrmouseEnter} className="dropdown3">
                    <div >
                      HR Services
                      <Fade>
                        <div
                          style={
                            hrmouse ? { display: "flex" } : { display: "none" }
                          }
                        >
                          <div className="list2 dropdown-content3">
                            <Link to="/TalentAcquisitionandRecruitment">
                              <div>Talent Acquisition/Recruitment</div>
                            </Link>
                            <Link to="/PerformanceManagement">
                              <div>Performance Management</div>
                            </Link>
                            <Link to="/EmployeeTrainingandDevelopment">
                              <div>Employee Training/Development</div>
                            </Link>
                            <Link to="/OrganizationalDevelopment
">
                              <div>Organizational Development</div>
                            </Link>
                          </div>
                        </div>
                      </Fade>
                    </div>
                  </div>
                  <div onClick={salesmouseEnter} className="dropdown3">
                    <div>
                      Sales and Marketing
                      <div
                        style={
                          salesmouse ? { display: "flex" } : { display: "none" }
                        }
                      >
                        <div className="list2 dropdown-content3">
                          <Link to="/BrandingandPositioning">
                            <div>Branding & Position</div>
                          </Link>
                          <Link to="/MarketResearch&Analysis">
                            <div>Market Research & Analysis</div>
                          </Link>
                          <Link to="/Crm">
                            <div>CRM</div>
                          </Link>
                          <Link to="/SalesSupport">
                            <div>Sales Support</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div onClick={digitalmouseEnter} className="dropdown3">
                    <div>
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
                            <div className="list2 dropdown-content3">
                              <Link to="/SearchEngine">
                                <div>Search Engine Optimization</div>
                              </Link>
                              <Link to="/PayPerClickAdvertising">
                                <div>pay Per Click Advertising</div>
                              </Link>
                              <Link to="/SocialMediaMarketing">
                                <div>Social Media Marketing</div>
                              </Link>
                              <Link to="/E-mailMarketing">
                                <div>E-mail Marketing</div>
                              </Link>
                            </div>
                          </div>
                        </Fade>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>Carrers</div>
            <div>Contact Us</div>
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
              <div
                className="listMob"
                style={
                  isDropdownVisiblemob
                    ? { display: "flex" }
                    : { display: "none" }
                }
              >
                <div>Hitecmart</div>
                <div>FranchiseTank</div>
                <div>Grand havens</div>
                <div>Job Tanks</div>
                <div>Certon exports</div>
              </div>
            </div>
            <div
              onMouseEnter={handleMouseEntermob1}
              onMouseLeave={handleMouseLeavemob1}
            >
              <h3>Our Service</h3>
              <div
                className="listMob1"
                style={
                  isDropdownVisiblemob1
                    ? { display: "flex" }
                    : { display: "none" }
                }
              >
                <div onClick={itmouseEnter}>
                  IT Services
                  <div
                    style={itmouse ? { display: "flex" } : { display: "none" }}
                  >
                    <div className="list2">
                      <Link to="/ServiceUpperPart">
                        <div>Software Development</div>
                      </Link>
                      <Link to="/WebDevelopment">
                        <div>Web Development </div>
                      </Link>
                      <Link to="/AppDevelopment">
                        <div>App Development</div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div onClick={hrmouseEnter}>
                  <div>
                    HR Services
                    <Fade>
                      <div
                        style={
                          hrmouse ? { display: "flex" } : { display: "none" }
                        }
                      >
                        <div className="list2">
                          <Link to="/Hr">
                            <div>Talent Acquisition/Recruitment</div>
                          </Link>
                          <Link to="/PerformanceManagement">
                            <div>Performance Management</div>
                          </Link>
                          <Link to="/TrainingAndDevelopment">
                            <div>Employee Training/Development</div>
                          </Link>
                          <Link to="/Development">
                            <div>Organizational Development</div>
                          </Link>
                        </div>
                      </div>
                    </Fade>
                  </div>
                </div>
                <div onClick={salesmouseEnter}>
                  <div>
                    Sales and Marketing
                    <div
                      style={
                        salesmouse ? { display: "flex" } : { display: "none" }
                      }
                    >
                      <div className="list2">
                        <Link to="/Branding">
                          <div>Branding & Position</div>
                        </Link>
                        <Link to="/Market">
                          <div>Market Research & Analysis</div>
                        </Link>
                        <Link to="/Crm">
                          <div>CRM</div>
                        </Link>
                        <Link to="/SalesSupport">
                          <div>Sales Support</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div onClick={digitalmouseEnter}>
                  <div>
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
                          <div className="list2">
                            <Link to="/SearchEngine">
                              <div>Search Engine Optimization</div>
                            </Link>
                            <Link to="/Pay">
                              <div>pay Per Click Advertising</div>
                            </Link>
                            <Link to="/Media">
                              <div>Social Media Marketing</div>
                            </Link>
                            <Link to="/Email">
                              <div>E-mail Marketing</div>
                            </Link>
                          </div>
                        </div>
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      ) : null}
    </>
  );
}

export default Navbar;
