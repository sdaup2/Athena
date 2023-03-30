import React from "react";
import athenaweb from "./Images/athenaview.jpg";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Athena</h1>
        <p>
          Athena is an interactive learning platform that allows teachers to
          create classes and question sets and students to respond to them in
          real time.
        </p>
        <div className="call-to-action">
          <Link to="/logsig" className="button">
            Sign Up
          </Link>

          <Link to="/logsig" className="button">
            Log In
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <img src={athenaweb} alt="Athena in action" />
      </div>
    </section>
  );
}

export default Hero;
