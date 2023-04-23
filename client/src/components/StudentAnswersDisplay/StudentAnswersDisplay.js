import React from 'react';
import "./StudentAnswersDisplay.css"

function StudentAnswersDisplay({ question, answerMap }) {
  return (
    <div>
      <h2 className="question-asked">{question}</h2>
      <div className="question-answer-container">
        {Object.keys(answerMap).map((student, index) => (
          <div key={index}>
            <strong>{student}: </strong>
            {answerMap[student]}
          </div>
        ))}
      </div>
    </div>
  );
}
export default StudentAnswersDisplay;