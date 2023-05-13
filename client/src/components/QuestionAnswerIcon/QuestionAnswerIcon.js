import React, { useState } from "react";
import "./QuestionAnswerIcon.css";

const ListOfQuestions = ({ questionList }) => {

  return (
    <div className="show-box">
        <p>{questionList.name}</p>
        {questionList.answers.map((option) => (
            <label style={{paddingLeft: '15px'}}>
              <b>Answer:</b> {option}
            </label>
        ))}
    </div>
  );
};

export default ListOfQuestions;