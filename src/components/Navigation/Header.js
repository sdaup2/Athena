import React from "react";
import athenalogo from "./athenalogo.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={athenalogo} alt="Athena logo" />
      </div>
      <nav>
        <ul>
          <li>
            <p>Home</p>
            {/* <a href="/">Home</a> */}
          </li>
          <li>
            <p>Classes</p>

            {/* <a href="/classes">Classes</a> */}
          </li>
          <li>
            <p>Question Sets</p>

            {/* <a href="/question-sets">Question Sets</a> */}
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
