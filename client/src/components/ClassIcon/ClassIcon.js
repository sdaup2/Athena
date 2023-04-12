import React from 'react';
import './ClassIcon.css';
import image from "../Navigation/athenalogo.png";

function ClassComponent(props) {
  return (
    <div className="class-component">
      <button className="class-button">
        <div className="class-icon" style={{ backgroundImage: `url(${image})` }}>
          {props.iconText}
        </div>
        <div className="class-name">{props.name}</div>
        <div className="class-code">{props.code}</div>
      </button>
    </div>
  );
}

export default ClassComponent;