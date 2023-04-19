import React from 'react';
import './ClassIcon.css';
import image from "../Navigation/athenalogo.png";
import { socket } from '../../socket';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

socket.on("class and role", (role, class_code, class_name) => {
  console.log(role);
  overall_role = role;
  //const navigate = useNavigate();
  if (role === "teacher") {
    socket.emit("need class QS info", class_name, class_code);
    //navigate("/class questions");
  } else {
    socket.emit("need student info", class_name, class_code);
    //navigate("/nosession");
  }
});

let overall_role = null;

function ClassComponent(props) {

  const auth = getAuth();
  const user = auth.currentUser;
  let uid = null;
  if (user !== null) {
    uid = user.uid;
  };


  const ClassIconHandler = async (event) => {
    event.preventDefault();
    socket.emit("clicked on class", uid, props.name);
    console.log("asked back end for clases");
  };




  return (
    <div className="class-component">
      <button className="class-button">
        <div className="class-icon" onClick = {ClassIconHandler} style={{ backgroundImage: `url(${image})` }}>
          {props.iconText}
        </div>
        <div className="class-name">{props.name}</div>
        {/* <div className="class-code">{props.code}</div> */}
      </button>
    </div>
  );
}



export default ClassComponent;