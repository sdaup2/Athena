import React from "react";
import athenalogo from "./athenalogo.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/"><img src={athenalogo} alt="Athena logo" /></Link>
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
            {/* Endpoint to route to Question Sets component */}
            <Link to="/questionsets">Questions Sets</Link>
          </li>
          <li>
            {/* Endpoint to route to Contact Us component */}
            <Link to="/class questions">Class Questions</Link>
          </li>
          
          <li>
            {/* Endpoint to route to Contact Us component */}
            <Link to="/view">Class Q View</Link>
          </li>
          <li>
            {/* Endpoint to route to Contact Us component */}
            <Link to="/waitroom">Waitroom</Link>
          </li>
        </ul>
      </nav>
      <form>
        <input type="text" placeholder="Search classes and question sets" />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export default Header;
