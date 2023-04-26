import React from "react";
import QuestionIcon from "./QuestionIcon";
import { socket } from "../../socket";



const ClassComponent = ({ className, classCode, questionSets }) => {
  return (
    <div>
      <h1>{className}</h1>
      <h2>{classCode}</h2>
      <div style={{ height: "300px", overflowY: "scroll" }}>
        {questionSets.map((questionSet) => (
          <QuestionIcon key={questionSet.id} questionSet={questionSet} />
        ))}
      </div>
    </div>
  );
};

export default ClassComponent;