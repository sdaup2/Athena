import React from "react";
import { socket } from "../../socket";
import Footer from "../Navigation/Footer";
import Header from "../Navigation/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Waiting() {

  const navigate = useNavigate();
  const [class_name, setClassName] = useState([]);

  socket
    .off("nav to waitroom")
    .on("nav to waitroom", (class_object) => {
      setClassName(class_object.Name);
    });

  socket
    .on("teacher started questions", () => {
      console.log("got message")
      navigate("/displayquestion")
    });

  return (
    <div>
      <Header />
      <div className="classes-page">
        <h1>{class_name}</h1>
        <div className="join-create-class">
          <p>Waiting for teacher to start questions...</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Waiting;
