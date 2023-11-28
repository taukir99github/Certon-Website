import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import navnew from "../../Images/Navnew.svg";
export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
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
            <span style={{fontSize:'18px' ,fontWeight:'500'}}>Our Brand</span>
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
                <p>
                
                  <Link to="/ServiceUpperPart" onClick={closeMenu}>
                    Software Development
                  </Link>
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
            {/* <p>
      <Link to="brandPage4" onClick={closeMenu}>
        Job Tanks
      </Link>
    </p> */}
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
    </nav>
  );
};
