import React from "react";
import "./QuestionIcon.css";
import { socket } from "../../socket";

// This is the page that has the box with "view" and "start" and the question set names 
const QuestionSet = ({ questionSet }) => {
  let class_code = null;
  socket.on("QS info", (qsNames, spef_class_code, class_name) => {
    class_code = spef_class_code
  });

  const handleView = () => {
    socket.emit("need all questions in set", questionSet.name);
  };

  const handleStart = () => {
    socket.emit("starting session", questionSet.name, class_code)
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