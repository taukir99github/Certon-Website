import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

import { CiViewTimeline } from "react-icons/ci";
import navnew from "../../Images/Navnew.svg";
export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const [mobNav, setmobNav] = useState(false);
  const handlemobNav = () => {
    setmobNav(!mobNav);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 600);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
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

  return (
    <>
    <nav
      className={styles.navbar}
      style={{
        backgroundColor: scrollPosition > 0 ? "#183865" : "transparent",
      }}
    >
      <li>
        <Link to="/" onClick={closeMenu} className={styles.heading}>
          <img
            src={navnew}
            alt=""
            className={`rounded-circle ${styles.imgcircle}`}
          />
        </Link>
      </li>
      {!isMobile ? (<div>
      <div className={styles["navbar-toggle"]} onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
      <ul className={`${styles["navbar-menu"]} ${showMenu ? styles.show : ""}`}>
        <li className="text-white">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/About" onClick={closeMenu}>
            About Us
          </Link>
        </li>
        <li>
          <div className={styles.dropdown1}>
            <span style={{ fontSize: "18px", fontWeight: "500" }}>
              Our Brand
            </span>
            <div className={styles["dropdown-content1"]}>
              <p className="text-hover">
                {" "}
                <Link to="/Hitechmart" onClick={closeMenu}>
                  HiTec Mart
                </Link>
              </p>
              <p>
                {" "}
                <Link to="/FranchiseTank" onClick={closeMenu}>
                  Franchise Tanks
                </Link>
              </p>
              <p>
                {" "}
                <Link to="/Heaven" onClick={closeMenu}>
                  Grand Havens
                </Link>
              </p>
              <p>
                <Link to="/Grand" onClick={closeMenu}>
                  Job Tanks
                </Link>
              </p>
              <p>
                {" "}
                <Link to="/Exports" onClick={closeMenu}>
                  Certon Exports
                </Link>
              </p>
            </div>
          </div>
        </li>

        <li className={styles.dropdown2}>
          <span>Our Services</span>
          <div className={styles["dropdown-content2"]}>
            <div className={styles.dropdown3}>
              <span>IT Services</span>
              <div className={styles["dropdown-content3"]}>
                <div className="para-nav">
                  <p onClick={closeMenu}>
                    <Link to="/ServiceUpperPart">Software Development</Link>
                  </p>
                </div>
                <p>
                  <Link to="/WebDevelopment" onClick={closeMenu}>
                    Web Development
                  </Link>
                </p>
                <p>
                  <Link to="/AppDevelopment" onClick={closeMenu}>
                    App Development
                  </Link>
                </p>
              </div>
            </div>

            <div className={styles.dropdown3}>
              <span>HR Services</span>
              <div className={styles["dropdown-content3"]}>
                <p>
                  <Link to="/Hr" onClick={closeMenu}>
                    Talent Acquisition/Recruitment
                  </Link>
                </p>
                <p>
                  <Link to="/PerformanceManagement" onClick={closeMenu}>
                    Performance Management
                  </Link>
                </p>
                <p>
                  <Link to="/TrainingAndDevelopment" onClick={closeMenu}>
                    Employee Training/Development
                  </Link>
                </p>
                <p>
                  <Link to="/Development" onClick={closeMenu}>
                    Organizational Development
                  </Link>
                </p>
              </div>
            </div>

            <div className={styles.dropdown3}>
              <span>Sales & Marketing</span>
              <div className={styles["dropdown-content3"]}>
                <p>
                  <Link to="/Branding" onClick={closeMenu}>
                    Branding & Position
                  </Link>
                </p>
                <p>
                  <Link to="/Market" onClick={closeMenu}>
                    Market Research & Analysis
                  </Link>
                </p>
                <p>
                  <Link to="/Crm" onClick={closeMenu}>
                    CRM
                  </Link>
                </p>
                <p>
                  <Link to="/SalesSupport" onClick={closeMenu}>
                    Sales Support
                  </Link>
                </p>
              </div>
            </div>
            <div className={styles.dropdown3}>
              <span>Digital Marketing</span>
              <div className={styles["dropdown-content3"]}>
                <p>
                  <Link to="/SearchEngine" onClick={closeMenu}>
                    Search Engine Optimization
                  </Link>
                </p>
                <p>
                  <Link to="/Pay" onClick={closeMenu}>
                    pay Per Click Advertising
                  </Link>
                </p>
                <p>
                  <Link to="/Media" onClick={closeMenu}>
                    Social Media Marketing
                  </Link>
                </p>
                <p>
                  <Link to="/Email" onClick={closeMenu}>
                    E-Mail Marketing
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <Link to="/Carrer" onClick={closeMenu}>
            Carrer
          </Link>
        </li>
        <li>
          <Link to="/Contact" onClick={closeMenu}>
            Contat Us
          </Link>
        </li>
      </ul>
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
          // onMouseEnter={handleMouseEntermob}
          // onMouseLeave={handleMouseLeavemob}
        >
          <h3>Our Brand</h3>
          <ul
            className="listMob"
            // style={
            //   isDropdownVisiblemob
            //     ? { display: "flex" }
            //     : { display: "none" }
            // }
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
          // onMouseEnter={handleMouseEntermob1}
          // onMouseLeave={handleMouseLeavemob1}
        >
          <h3>Our Service</h3>
          <ul
            className="listMob1"
            // style={
            //   isDropdownVisiblemob1
            //     ? { display: "flex" }
            //     : { display: "none" }
            // }
          >
            <div >
              IT Services
              <div
                // style={itmouse ? { display: "flex" } : { display: "none" }}
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
            <div >
              <li>
                HR Services
                <Fade>
                  <div
                    // style={
                    //   hrmouse ? { display: "flex" } : { display: "none" }
                    // }
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
            <div >
              <li>
                Sales and Marketing
                <div
                  
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
            <div >
              <li>
                Digital Marketing
                <div>
                  <Fade>
                    <div
                      
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
};
