import React from "react";
import { socket } from "../../socket";
import Footer from "../Navigation/Footer";
import Header from "../Navigation/Header";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";

function NoSession() {
  //   const navigate = useNavigate();
  const [class_name, setClassName] = useState([]);

  socket.on("sending for student nav", (class_name, class_code) => {
    setClassName(class_name);
  });

  return (
    <div>
      <Header />
      <div className="classes-page">
        <h1>{class_name}</h1>
        <div className="join-create-class">
          <p>No session open right now!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NoSession;
