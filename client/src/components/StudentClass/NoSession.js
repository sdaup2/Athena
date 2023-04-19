import React from "react";
import { socket } from "../../socket";
import Footer from "../Navigation/Footer";
import Header from "../Navigation/Header";
// import { useNavigate } from "react-router-dom";

function NoSession() {
  //   const navigate = useNavigate();
  const className = "Software Engineering";
  socket.on(/* 
        brooke dooes harry potter magic here

        navigate("/waiting");
    */);

  return (
    <div>
      <Header />
      <div className="classes-page">
        <h1>{className}</h1>
        <div className="join-create-class">
          <p>No session open right now</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NoSession;
