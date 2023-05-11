import React, { useState } from "react";

function CreateQuestion() {
  const [questionType, setQuestionType] = useState("multipleChoice"); // default to multiple choice
  const [questionText, setQuestionText] = useState("");
  const [answerChoices, setAnswerChoices] = useState(["", "", "", ""]);
  const [answerText, setAnswerText] = useState("");

  const handleQuestionTypeChange = (event) => {
    setQuestionType(event.target.value);
  };

  const handleQuestionTextChange = (event) => {
    setQuestionText(event.target.value);
  };

  const handleAnswerChoiceChange = (event, index) => {
    const newAnswerChoices = [...answerChoices];
    newAnswerChoices[index] = event.target.value;
    setAnswerChoices(newAnswerChoices);
  };

  const handleAnswerTextChange = (event) => {
    setAnswerText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle submitting the question data here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Question type:
        <select value={questionType} onChange={handleQuestionTypeChange}>
          <option value="multipleChoice">Multiple choice</option>
          <option value="freeResponse">Free response</option>
        </select>
      </label>
      <br />
      <label>
        Question text:
        <input
          type="text"
          value={questionText}
          onChange={handleQuestionTextChange}
        />
      </label>
      <br />
      {questionType === "multipleChoice" ? (
        <>
          <label>
            Answer choice 1:
            <input
              type="text"
              value={answerChoices[0]}
              onChange={(event) => handleAnswerChoiceChange(event, 0)}
            />
          </label>
          <br />
          <label>
            Answer choice 2:
            <input
              type="text"
              value={answerChoices[1]}
              onChange={(event) => handleAnswerChoiceChange(event, 1)}
            />
          </label>
          <br />
          <label>
            Answer choice 3:
            <input
              type="text"
              value={answerChoices[2]}
              onChange={(event) => handleAnswerChoiceChange(event, 2)}
            />
          </label>
          <br />
          <label>
            Answer choice 4:
            <input
              type="text"
              value={answerChoices[3]}
              onChange={(event) => handleAnswerChoiceChange(event, 3)}
            />
          </label>
          <br />
        </>
      ) : (
        <label>
          Answer:
          <input
            type="text"
            value={answerText}
            onChange={handleAnswerTextChange}
          />
        </label>
      )}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateQuestion;
