import React from 'react';
import "./StudentAnswersDisplay.css"

// to return map of whether or not the student answered correctly
function checkAnswers(answerMap, correctAnswer) {
  const result = {};
  Object.keys(answerMap).forEach((student) => {
    result[student] = answerMap[student] === correctAnswer;
  });
  return result;
}

function StudentAnswersDisplay({ question, answerMap, correctAnswer }) {
  const answerResults = checkAnswers(answerMap,correctAnswer);

  return (
    <div>
      <h2 className="question-asked">{question}</h2>
      <div className="question-answer-container" data-testid="question-answer-container">
        {Object.keys(answerMap).map((student, index) => (
          <div key={index} className={answerMap[student] === correctAnswer ? 'correct-answer' : 'incorrect-answer'}>
          <strong>{student}: </strong>
          {answerMap[student]}
          </div>
        ))}
      </div>
    </div>
  );
}
export {StudentAnswersDisplay, checkAnswers};
