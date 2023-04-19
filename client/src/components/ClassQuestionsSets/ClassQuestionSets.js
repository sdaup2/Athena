import React from "react";
import QuestionIcon from "./QuestionIcon";

const ClassComponent = ({ className, classCode, questionSets }) => {
  return (
    <div>
      <h1>{className}</h1>
      <h2>{classCode}</h2>
      <div style={{ height: "500px", overflowY: "scroll" }}>
        {questionSets.map((questionSet) => (
          <QuestionIcon key={questionSet.id} questionSet={questionSet} />
        ))}
      </div>
    </div>
  );
};

export default ClassComponent;