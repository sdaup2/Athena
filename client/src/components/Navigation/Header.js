import React from "react";
import athenalogo from "../../assets/athenalogo.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={athenalogo} alt="Athena logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            {/* Endpoint to route to Home component */}
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* Endpoint to route to Classes component */}
            <Link to="/classes">Classes</Link>
          </li>
        
        </ul>
      </nav>
    </header>
  );
}

export default Header;
