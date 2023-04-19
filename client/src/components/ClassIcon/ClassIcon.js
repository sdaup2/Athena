import React from 'react';
import './ClassIcon.css';
import image from "../Navigation/athenalogo.png";
import { socket } from '../../socket';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';



function ClassComponent(props) {

  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();
  let uid = null;
  if (user !== null) {
    uid = user.uid;
  }

  function ClassIconHandler() {
    socket.emit("clicked on class", uid, props.name);
    console.log("asked back end for clases");
    navigate("/");
  }



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