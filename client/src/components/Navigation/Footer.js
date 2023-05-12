import React from "react";
import "./Footer.css";

// simple html formatting for Athena's footer, containing company information
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="footer-widget">
              <center><h4>Contact Us</h4></center>
              <ul className="list-unstyled contact-info">
                <li>
                  <i className="fa fa-map-marker"></i>Kauffman Res. Center,
                  Lincoln, NE
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
