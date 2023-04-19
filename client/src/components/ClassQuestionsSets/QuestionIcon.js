import React from "react";
import "./QuestionIcon.css";

const QuestionSet = ({ questionSet }) => {
  return (
    <div>
      <div className="display-box">
        <p>{questionSet.name}</p>
        <button>View</button>
        <button>Start</button>
      </div>
    </div>
  );
};

export default QuestionSet;