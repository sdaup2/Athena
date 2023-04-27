import React from "react";
import { socket } from "../../socket";
import Footer from "../Navigation/Footer";
import Header from "../Navigation/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function NoSession() {
  const navigate = useNavigate();
  const [class_name, setClassName] = useState([]);
  let overall_class_code = null;

  socket.on("sending for student nav", (class_name, class_code) => {
    setClassName(class_name);
    overall_class_code = class_code
  });

  socket
    .off("teacher started session")
    .on("teacher started session", (class_code) => {
      console.log("teacher started session");
      if (overall_class_code === class_code) {
        socket.emit("need to join room", class_code);
        navigate("/waiting");
      }
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
