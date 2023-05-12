import React from "react";
import "./ClassIcon.css";
import image from "../../assets/athenalogo.png";
import { socket } from "../../socket";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

let overall_role = null;

// handles how classes show up on the "classes" page after being called by the backend 
function ClassComponent(props) {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;
  let uid = null;
  if (user !== null) {
    uid = user.uid;
  }

  const ClassIconHandler = async (event) => {
    event.preventDefault();
    socket.emit("clicked on class", props.name);
    console.log("asked back end for clases");
  };

  socket
    .off("class and role")
    .on("class and role", (role) => {
      console.log(role);
      overall_role = role;
      if (role === "teacher") {
        socket.emit("need class QS info");
        navigate("/class questions");
      } else {
        socket.emit("need student info");
        navigate("/nosession");
      }
    });

  return (
    <div className="class-component">
      <button className="class-button">
        <div
          className="class-icon"
          onClick={ClassIconHandler}
          style={{ backgroundImage: `url(${image})` }}
        >
          {props.iconText}
        </div>
        <div className="class-name">{props.name}</div>
        {/* <div className="class-code">{props.code}</div> */}
      </button>
    </div>
  );
}

export default ClassComponent;
