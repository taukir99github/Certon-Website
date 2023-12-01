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
  const [isItDropdown, setIsItDropdown] = useState(false);
  const [isHrDropdown, setIsHrDropdown] = useState(false);
  const [isSalesDropdown, setIsSalesDropdown] = useState(false);
  const [isDigitalDropdown, setIsDigitalDropdown] = useState(false);
  const [mobNav, setmobNav] = useState(false);
  const [itmouse, setitmouse] = useState(false);
  const [hrmouse, sethrmouse] = useState(false);
  const [salesmouse, setsalesmouse] = useState(false);
  const [digitalmouse, setdigitalmouse] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 600);
  };
  const handleLinkClick = () => {
    setmobNav(false);
  };
  const handleNestedLinkClick = () => {
    setmobNav(false);
  };
  const handleDropdownToggle = () => {
    setDropdownVisiblemob(!isDropdownVisiblemob);
  };
  useEffect(() => {
    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleITEnter = () => {
    setIsItDropdown(true);
  };

  const handleITLeave = () => {
    setIsItDropdown(false);
  };
  const handleSalesEnter = () => {
    setIsSalesDropdown(true);
  };

  const handleSalesLeave = () => {
    setIsSalesDropdown(false);
  };
  const handleDigitalEnter = () => {
    setIsDigitalDropdown(true);
  };

  const handleDigitalLeave = () => {
    setIsDigitalDropdown(false);
  };
  const handleHREnter = () => {
    setIsHrDropdown(true);
  };

  const handleHRLeave = () => {
    setIsHrDropdown(false);
  };
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
              <div>About Us</div>
            </Link>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Our Brands
              <div
                style={
                  isDropdownVisible ? { display: "block" } : { display: "none" }
                }
              >
                <ul className="list">
                  <Link to="/Hitechmart" onClick={handleMouseLeave}>
                    <li>HiTec Mart</li>
                  </Link>
                  <Link to="/FranchiseTank" onClick={handleMouseLeave}>
                    <li>Franchise Tank</li>
                  </Link>
                  <Link to="/GrandHeaven" onClick={handleMouseLeave}>
                    <li>Grand Heavens</li>
                  </Link>
                  <Link to="/JobTanks" onClick={handleMouseLeave}>
                    <li>Job Tanks</li>
                  </Link>
                  <Link to="/CertonExports" onClick={handleMouseLeave}>
                    <li>Certon Exports</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            >
              Our Services
              <div
                style={
                  isDropdownVisible1
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <ul className="list">
                  <li>
                    <div
                      onMouseEnter={handleITEnter}
                      onMouseLeave={handleITLeave}
                    >
                      IT Services
                      <div
                        className="list-item-content1"
                        style={
                          isItDropdown
                            ? { display: "block" }
                            : { display: "none" }
                        }
                      >
                        <ul className="list2">
                          <Link
                            to="/SoftwareDevelopment"
                            onClick={() => {
                              handleITLeave();
                              handleMouseLeave1();
                            }}
                          >
                            <li>Software Development</li>
                          </Link>
                          <Link
                            to="/WebDevelopment"
                            onClick={() => {
                              handleITLeave();
                              handleMouseLeave1();
                            }}
                          >
                            <li>Web Development </li>
                          </Link>
                          <Link
                            to="/AppDevelopment"
                            onClick={() => {
                              handleITLeave();
                              handleMouseLeave1();
                            }}
                          >
                            <li>App Development</li>
                          </Link>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <div
                    onMouseEnter={handleHREnter}
                    onMouseLeave={handleHRLeave}
                  >
                    <li>
                      HR Services
                      <div
                        className="list-item-content1"
                        style={
                          isHrDropdown
                            ? { display: "block" }
                            : { display: "none" }
                        }
                      >
                        <ul className="list2">
                          <Link
                            to="/TalentAcquisitionandRecruitment"
                            onClick={() => {
                              handleHRLeave();
                              handleMouseLeave1();
                            }}
                          >
                            <li>Talent Acquisition/Recruitment</li>
                          </Link>
                          <Link
                            to="/PerformanceManagement"
                            onClick={() => {
                              handleHRLeave();
                              handleMouseLeave1();
                            }}
                          >
                            <li>Performance Management</li>
                          </Link>
                          <Link
                            to="/EmployeeTrainingandDevelopment"
                            onClick={() => {
                              handleHRLeave();
                              handleMouseLeave1();
                            }}
                          >
                            <li>Employee Training/Development</li>
                          </Link>
                          <Link
                            to="/OrganizationalDevelopment"
                            onClick={() => {
                              handleHRLeave();
                              handleMouseLeave1();
                            }}
                          >
                            <li>Organizational Development</li>
                          </Link>
                        </ul>
                      </div>
                    </li>
                  </div>
                  <div
                    onMouseEnter={handleSalesEnter}
                    onMouseLeave={handleSalesLeave}
                  >
                    <li>
                      Sales and Marketing
                      <div
                        className="list-item-content1"
                        style={
                          isSalesDropdown
                            ? { display: "flex" }
                            : { display: "none" }
                        }
                      >
                        <ul className="list2">
                          <Link
                            to="/BrandingandPositioning"
                            onClick={() => {
                              handleSalesLeave();
                              handleMouseLeave1();
                            }}
                          >
                            <li>Branding & Position</li>
                          </Link>
                          <Link
                            to="/MarketResearch&Analysis"
                            onClick={() => {
                              handleSalesLeave();
                              handleMouseLeave1();
                            }}
                          >
                            <li>Market Research & Analysis</li>
                          </Link>
                          <Link
                            to="/Crm"
                            onClick={() => {
                              handleSalesLeave();
                              handleMouseLeave1();
                            }}
                          >
                            <li>CRM</li>
                          </Link>
                          <Link
                            to="/SalesSupport"
                            onClick={() => {
                              handleSalesLeave();
                              handleMouseLeave1();
                            }}
                          >
                            <li>Sales Support</li>
                          </Link>
                        </ul>
                      </div>
                    </li>
                  </div>
                  <div
                    onMouseEnter={handleDigitalEnter}
                    onMouseLeave={handleDigitalLeave}
                  >
                    <li>
                      Digital Marketing
                      <div>
                        <div
                          className="list-item-content1"
                          style={
                            isDigitalDropdown
                              ? { display: "flex" }
                              : { display: "none" }
                          }
                        >
                          <ul className="list2">
                            <Link
                              to="/SearchEngineOptimization"
                              onClick={() => {
                                handleDigitalLeave();
                                handleMouseLeave1();
                              }}
                            >
                              <li>Search Engine Optimization</li>
                            </Link>
                            <Link
                              to="/PayPerClickAdvertising"
                              onClick={() => {
                                handleDigitalLeave();
                                handleMouseLeave1();
                              }}
                            >
                              <li>Pay Per Click Advertising</li>
                            </Link>
                            <Link
                              to="/SocialMediaMarketing"
                              onClick={() => {
                                handleDigitalLeave();
                                handleMouseLeave1();
                              }}
                            >
                              <li>Social Media Marketing</li>
                            </Link>
                            <Link
                              to="/E-mailMarketing"
                              onClick={() => {
                                handleDigitalLeave();
                                handleMouseLeave1();
                              }}
                            >
                              <li>E-mail Marketing</li>
                            </Link>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            <Link to="/Careers">
              <div>Careers</div>
            </Link>
            <Link to="/ContactUs">
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
            <div onClick={handleLinkClick}>
              <Link to="/">
                <div>Home</div>
              </Link>
            </div>
            <div onClick={handleLinkClick}>
              <Link to="/AboutUs">
                <div>About</div>
              </Link>
            </div>
            <div
              onMouseEnter={handleMouseEntermob}
              onMouseLeave={handleMouseLeavemob}
              onClick={handleDropdownToggle}
            >
              <h3>Our Brands</h3>
              <ul
                className="listMob"
                style={
                  isDropdownVisiblemob
                    ? { display: "flex" }
                    : { display: "none" }
                }
              >
                <Link to="/Hitechmart" onClick={handleNestedLinkClick}>
                  <li>Hitecmart</li>
                </Link>
                <Link to="/FranchiseTank" onClick={handleNestedLinkClick}>
                  <li>FranchiseTank</li>
                </Link>
                <Link to="/Heaven" onClick={handleNestedLinkClick}>
                  <li>Grand heavens</li>
                </Link>
                <Link to="/Grand" onClick={handleNestedLinkClick}>
                  <li>Job Tanks</li>
                </Link>
                <Link to="/Exports" onClick={handleNestedLinkClick}>
                  <li>Certon exports</li>
                </Link>
              </ul>
            </div>
            <div
              onMouseEnter={handleMouseEntermob1}
              onMouseLeave={handleMouseLeavemob1}
            >
              <h3>Our Services</h3>
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
                      <Link
                        to="/SoftwareDevelopment"
                        onClick={handleNestedLinkClick}
                      >
                        <div>Software Development</div>
                      </Link>
                      <Link
                        to="/WebDevelopment"
                        onClick={handleNestedLinkClick}
                      >
                        <div>Web Development </div>
                      </Link>
                      <Link
                        to="/AppDevelopment"
                        onClick={handleNestedLinkClick}
                      >
                        <div>App Development</div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div onClick={hrmouseEnter}>
                  <li>
                    HR Services
                    <Fade>
                      <div
                        style={
                          hrmouse ? { display: "flex" } : { display: "none" }
                        }
                      >
                        <div className="list2">
                          <Link
                            to="/TalentAcquisitionandRecruitment"
                            onClick={handleNestedLinkClick}
                          >
                            <div>Talent Acquisition/Recruitment</div>
                          </Link>
                          <Link
                            to="/PerformanceManagement"
                            onClick={handleNestedLinkClick}
                          >
                            <div>Performance Management</div>
                          </Link>
                          <Link
                            to="/EmployeeTrainingandDevelopment"
                            onClick={handleNestedLinkClick}
                          >
                            <div>Employee Training/Development</div>
                          </Link>
                          <Link
                            to="/OrganizationalDevelopment"
                            onClick={handleNestedLinkClick}
                          >
                            <div>Organizational Development</div>
                          </Link>
                        </div>
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
                        <Link
                          to="/BrandingandPositioning"
                          onClick={handleNestedLinkClick}
                        >
                          <div>Branding & Positioning</div>
                        </Link>
                        <Link
                          to="/MarketResearch&Analysis"
                          onClick={handleNestedLinkClick}
                        >
                          <div>Market Research & Analysis</div>
                        </Link>
                        <Link to="/Crm" onClick={handleNestedLinkClick}>
                          <div>CRM</div>
                        </Link>
                        <Link
                          to="/SalesSupport"
                          onClick={handleNestedLinkClick}
                        >
                          <div>Sales Support</div>
                        </Link>
                      </ul>
                    </div>
                  </li>
                </div>
                <div onClick={digitalmouseEnter}>
                  <li>
                    Digital Marketing
                    <div>
                      <div
                        style={
                          digitalmouse
                            ? { display: "flex" }
                            : { display: "none" }
                        }
                      >
                        <ul className="list2">
                          <Link
                            to="/SearchEngineOptimization"
                            onClick={handleNestedLinkClick}
                          >
                            <div>Search Engine Optimization</div>
                          </Link>
                          <Link
                            to="/PayPerClickAdvertising"
                            onClick={handleNestedLinkClick}
                          >
                            <div>Pay Per Click Advertising</div>
                          </Link>
                          <Link
                            to="/SocialMediaMarketing"
                            onClick={handleNestedLinkClick}
                          >
                            <div>Social Media Marketing</div>
                          </Link>
                          <Link
                            to="/E-mailMarketing"
                            onClick={handleNestedLinkClick}
                          >
                            <div>E-mail Marketing</div>
                          </Link>
                        </ul>
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </div>
            <Link to="/Careers" onClick={handleLinkClick}>
              <div>Careers</div>
            </Link>
            <Link to="/ContactUs" onClick={handleLinkClick}>
              <div>Contact Us</div>
            </Link>
          </div>
        </Slide>
      ) : null}
    </>
  );
}

export default Navbar;
