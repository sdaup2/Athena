import React from "react";
import { socket } from "../../socket";
import Footer from "../Navigation/Footer";
import Header from "../Navigation/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function NoSession() {
  const navigate = useNavigate();
  const [class_name, setClassName] = useState([]);
  const [overall_class_code, setClassCode] = useState([]);

  socket.on("sending for student nav", (class_name, class_code) => {
    setClassName(class_name);
    console.log(class_code);
    setClassCode(class_code);
  });

  socket
    .off("teacher started session")
    .on("teacher started session", (class_code) => {
      console.log("teacher started session");
      console.log(overall_class_code);
      console.log(class_code);
      socket.emit("teacher started session");
      if (overall_class_code === class_code) {
        navigate("/waiting");
      }
  });

  socket
    .off("student joined room")
    .on("student joined room", () => {
      console.log("student joined room");
      navigate("/waiting");
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
