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
// export default checkAnswers;

function StudentAnswersDisplay({ question, answerMap, correctAnswer }) {
  const answerResults = checkAnswers(answerMap,correctAnswer);

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
// to fix this, changed this just to "StudentAnswerDisplay" instead of both? idk though
// export {StudentAnswersDisplay, checkAnswers};
export default StudentAnswersDisplay;