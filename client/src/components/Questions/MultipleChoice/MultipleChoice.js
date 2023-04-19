import React, { useState } from "react";
import "./MultipleChoice.css";

function MultipleChoiceQuestion(props) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="question-container">
      <img src={props.imageSrc} alt="Question image" />
      <h2>{props.questionText}</h2>
      <ul>
        {props.answerOptions.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </div>
  );
}

export default MultipleChoiceQuestion;
