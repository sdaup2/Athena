// import React from "react";
// // import { Link } from "react-router-dom";
// // import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
// import "./Footer.css";
// // import Header from "./Header.js";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-3 col-md-6 col-sm-6">
//             <div className="footer-widget">
//               <h4>Useful Links</h4>
//               <ul className="list-unstyled">
//                 <li>
//                   <p>Privacy Policy</p>
//                   {/* <Link to="/privacy-policy">Privacy Policy</Link> */}
//                 </li>
//                 <li>
//                   <p>Terms of Service</p>
//                   {/* <Link to="/terms-of-service">Terms of Service</Link> */}
//                 </li>
//                 <li>
//                   <p>Contact Us</p>
//                   {/* <Link to="/contact-us">Contact Us</Link> */}
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6 col-sm-6">
//             <div className="footer-widget">
//               <h4>Follow Us</h4>
//               <ul className="list-unstyled social-icons">
//                 <li>
//                   <p>Facebook</p>
//                   {/* <FaFacebook /> */}
//                 </li>
//                 <li>
//                   <p>Twitter</p>

//                   {/* <FaTwitter /> */}
//                 </li>
//                 <li>
//                   <p>Instagram</p>

//                   {/* <FaInstagram /> */}
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6 col-sm-6">
//             <div className="footer-widget">
//               <h4>Contact Us</h4>
//               <ul className="list-unstyled contact-info">
//                 <li>
//                   <i className="fa fa-map-marker"></i>123 Main Street, Anytown
//                   USA
//                 </li>
//                 <li>
//                   <i className="fa fa-phone"></i>(123) 456-7890
//                 </li>
//                 <li>
//                   <i className="fa fa-envelope"></i>
//                   <a href="mailto:info@athena.com">info@athena.com</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
// import { Link } from "react-router-dom";
// import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";
// import Header from "./Header.js";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="footer-widget">
              <h4>Useful Links</h4>
              <ul className="list-unstyled">
                <li>
                  <p>Privacy Policy</p>
                  {/* <Link to="/privacy-policy">Privacy Policy</Link> */}
                </li>
                <li>
                  <p>Terms of Service</p>
                  {/* <Link to="/terms-of-service">Terms of Service</Link> */}
                </li>
                <li>
                  <p>Contact Us</p>
                  {/* <Link to="/contact-us">Contact Us</Link> */}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="footer-widget">
              <h4>Follow Us</h4>
              <ul className="list-unstyled social-icons">
                <li>
                  <p>Facebook</p>
                  {/* <FaFacebook /> */}
                </li>
                <li>
                  <p>Twitter</p>

                  {/* <FaTwitter /> */}
                </li>
                <li>
                  <p>Instagram</p>

                  {/* <FaInstagram /> */}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="footer-widget">
              <h4>Contact Us</h4>
              <ul className="list-unstyled contact-info">
                <li>
                  <i className="fa fa-map-marker"></i>123 Main Street, Anytown
                  USA
                </li>
                <li>
                  <i className="fa fa-phone"></i>(123) 456-7890
                </li>
                <li>
                  <i className="fa fa-envelope"></i>
                  <a href="mailto:info@athena.com">info@athena.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
