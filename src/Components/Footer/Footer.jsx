// import React from "react";
// import styles from "./footer.module.css";
// import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
// import { BsInstagram } from "react-icons/bs";
// import { ImTwitter } from "react-icons/im";
// import { Link } from "react-router-dom";
// export const Footer = () => {
//   return (
//     <footer>
//       <div className={styles.main}>
//         <div className={styles.two}>
//           <div className={styles.twoOne}>
//             <h2 className={styles.twoheading}>CERTON</h2>
//             <p className={styles.twoheading1}>
//               Inspiring you to Grow <br />
//             </p>
//             <div className={styles.iconsmain}>
//               <div className={styles.icon}>
//                 {" "}
//                 <FaFacebookF />
//               </div>
//               <div className={styles.icon}>
//                 <BsInstagram />
//               </div>
//               <div className={styles.icon}>
//                 <ImTwitter />
//               </div>
//               <div className={styles.icon}>
//                 <FaLinkedinIn />
//               </div>
//             </div>
//           </div>
//           <div className={styles.twoTwo}>
//             <div className={styles.listmain}>

//               <div className={styles.list}>
//                 <ul className={styles.listul}>

//                  <li> <Link className={styles.listhead}>Our Brands</Link></li>
//                  <li> <Link to="/Hitec" className={styles.links}>HiTec Mart</Link></li>
//                  <li> <Link to="/ftank" className={styles.links}>Franchise Tanks</Link></li>
//                  <li> <Link to="/grandHeav" className={styles.links}>Grand Havens</Link></li>
//                  <li> <Link to="/certonExp" className={styles.links}>Certon Exports</Link></li>
//                  <li> <Link to="/jtank" className={styles.links}>Job Tanks</Link>
//                  </li>

//                 </ul>
//               </div>
//               <div className={styles.list}>
//                 <ul className={styles.listul1}>
//                  <li> <Link  className={styles.listhead}>Our Services</Link></li>
//                  <li> <Link to="/soft" className={styles.links}>IT Services </Link></li>
//                  <li> <Link to="/talent" className={styles.links}>HR Services</Link></li>
//                  <li> <Link to="/brndPos" className={styles.links}>Sales & Marketing</Link></li>
//                  <li> <Link to="/searchEngOpt" className={styles.links}>Digital Marketing</Link></li>
//                 </ul>
//               </div>
//               <div className={styles.list}>
//                 <ul className={styles.listul2}>
//                 <li>  <Link className={styles.listhead}>Get In Touch</Link></li>
//                 <li>  <Link className={styles.links}> 080-68507663 </Link></li>
//                 <li>  <Link className={styles.links}>
//                     5th Floor, Pune Tech Centre, Plot No 30, Phase 1, Hinjewadi
//                     Rajiv Gandhi Infotech Park, Pune, Maharashtra 411057, India
//                   </Link></li>
//                   <li> <Link className={styles.links}>info@certontech.com</Link></li>
//                 </ul>
//               </div>
//               {/* <div className={styles.list1}>
//                 <ul className={styles.listul2}>
//                 <li>  <Link className={styles.listhead}>Legal</Link></li>
//                 <li>  <Link className={styles.links}>Terms & Condition</Link></li>
//                 </ul>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

import React from "react";
import styles from "./footer.module.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { ImTwitter } from "react-icons/im";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer>
      <div className={styles.main}>
        <div className={styles.two}>
          <div className={styles.twoOne}>
            <h2 className={styles.twoheading}>CERTON</h2>
            <p className={styles.twoheading1}>Inspiring you to Grow</p>
            <div className={styles.iconsmain}>
              <div className={styles.icon}>
                {" "}
                <Link to="https://www.facebook.com/CertonTech/">
                  <FaFacebookF />
                </Link>
              </div>
              <div className={styles.icon}>
                <Link to="https://www.instagram.com/certon_tech/">
                  {" "}
                  <BsInstagram />
                </Link>
              </div>
              <div className={styles.icon}>
                <Link to="https://twitter.com/certonT">
                  <ImTwitter />
                </Link>
              </div>
              <div className={styles.icon}>
                <Link to="https://in.linkedin.com/company/certon-technologies">
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
            <div className={styles.list12}>
              <ul className={styles.listul111}>
                <Link to="/Hitec" className={styles.listhead1}>
                  Legal
                </Link>
                <Link to="/certonExp" className={styles.links11}>
                  Terms & Conditions
                </Link>
                <Link to="/jtank" className={styles.links11}>
                  Privacy & Policy
                </Link>
              </ul>
            </div>
          </div>
          <div className={styles.twoTwo}>
            <div className={styles.listmain}>
              <div className={styles.list11}>
                <ul className={styles.listul}>
                  <Link className={styles.listhead}>Our Brands</Link>
                  <Link to="/Hitec" className={styles.linkss}>
                    HiTec Mart
                  </Link>
                  <Link to="/ftank" className={styles.linkss}>
                    Franchise Tanks
                  </Link>
                  <Link to="/grandHeav" className={styles.linkss}>
                    Grand Havens
                  </Link>
                  <Link to="/certonExp" className={styles.linkss}>
                    Certon Exports
                  </Link>
                  <Link to="/jtank" className={styles.linkss}>
                    Job Tanks
                  </Link>
                </ul>
              </div>
              <div className={styles.list}>
                <ul className={styles.listul}>
                  <Link className={styles.listhead}>Our Services</Link>
                  <Link to="/soft" className={styles.linkss}>
                    IT Services
                  </Link>
                  <Link to="/talent" className={styles.linkss}>
                    HR Services
                  </Link>
                  <Link to="/brndPos" className={styles.linkss}>
                    Sales & Marketing
                  </Link>
                  <Link to="/searchEngOpt" className={styles.linkss}>
                    Digital Marketing
                  </Link>
                </ul>
              </div>
              <div className={styles.list1}>
                <ul className={styles.listul}>
                  <Link className={styles.listhead}>Get In Touch</Link>
                  <Link className={styles.links}>080-68507663 </Link>
                  <Link className={styles.links}>
                    {" "}
                    Plot No: 128-P2, Ground Floor, EPIP Zone Whitefield Rd, near
                    Ginger Hotel, Whitefield, EPIP Zone, Bengaluru, Karnataka
                    560066
                  </Link>
                  <Link className={styles.links}>info@certontech.com </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.hhhhh}>Certon © 2023, All Right Reserved.</p>
    </footer>
  );
};
