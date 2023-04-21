import React from "react";
import { socket } from "../../socket";
import Footer from "../Navigation/Footer";
import Header from "../Navigation/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Waiting() {

  return (
    <div>
      <Header />
      <div className="classes_page">
        <h1>{"Hard Coded"}</h1>
        <div className="join-create-class">
          <p>Waiting for Teacher...</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Waiting;
