import React from "react";
import athenalogo from "../../assets/athenalogo.png";
import "./Header.css";
import { Link } from "react-router-dom";

// controls the navigation to and between different pages in the header
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
          <li>
            {/* Endpoint to route to Sandbox component */}
            <Link to="/questionsets">SandBox</Link>
          </li>
          <li>
            {/* Endpoint to route to Class Questions component */}
            <Link to="/class questions">Class Questions</Link>
          </li>

          <li>
            {/* Endpoint to route to Class Question View component */}
            <Link to="/view">Class Q View</Link>
          </li>
          <li>
            {/* Endpoint to route to Waitroom component */}
            <Link to="/waitroom">Waitroom</Link>
          </li>
          <li>
            {/* Endpoint to route to the User Settings component */}
            <Link to="/usersettings">Settings</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
