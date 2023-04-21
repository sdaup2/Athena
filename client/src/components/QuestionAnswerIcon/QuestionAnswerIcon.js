import React, { useState } from "react";
import "./QuestionAnswerIcon.css";

const ListOfQuestions = ({ questionList }) => {
    const [selectedOption, setSelectedOption] = useState(null);
  
    const handleOptionChange = (option) => {
      setSelectedOption(option);
    };

  return (
    <div className="show-box">
        <p>{questionList.name}</p>
        {questionList.answers.map((option) => (
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
              />
              {option}
            </label>
        ))}
    </div>
  );
};

export default ListOfQuestions;