import React from "react";
import "./QuestionIcon.css";
import { socket } from "../../socket";
import { useNavigate } from "react-router-dom";

const QuestionSet = ({ questionSet }) => {

  const navigate = useNavigate();

  const handleView = () => {
    socket.emit("need all questions in set", questionSet.name);
    navigate("/view")
  };

  const handleStart = () => {
    socket.emit("starting session", questionSet.name)
  }

  return (
    <div>
      <div className="display-box">
        <p>{questionSet.name}</p>
        <button onClick = {handleView}>View</button>
        <button onClick = {handleStart}>Start</button>
      </div>
    </div>
  );
};

export default QuestionSet;