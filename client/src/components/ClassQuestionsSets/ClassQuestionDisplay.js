import React from "react";
import QuestionAnswerIcon from "../QuestionAnswerIcon/QuestionAnswerIcon";

/** The main display for the question pages */
const ClassQuestionDisplay = ({ setName, questions }) => {

  return (
    <div>
      <div style = {{display: "inline", justify: "space-between", align: "center"}}>
        <h1 style={{font: "bold"}}>{setName}</h1>
      </div>
      <div style={{ height: "500px", overflowY: "scroll" }}>
        {questions.map((questionSet) => (
          <QuestionAnswerIcon key={questionSet.id} questionList={questionSet} />
        ))}
      </div>
    </div>
  );
};

export default ClassQuestionDisplay;