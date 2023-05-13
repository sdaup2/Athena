import React, { useState } from "react";
import { socket } from "../../socket";
import { useNavigate } from "react-router-dom";

function CreateQuestion() {

  const navigate = useNavigate();

  const [questionType, setQuestionType] = useState("MC"); // default to multiple choice
  const [questionText, setQuestionText] = useState("");
  const [answerChoices, setAnswerChoices] = useState(["", "", ""]);
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
    let question = {};
    question["QuestionText"] = questionText;
    question["CorrectAnswers"] = [answerText];
    question["ResponseType"] = questionType;
    if(question.ResponseType === "MC") {
      question["Options"] = answerChoices;
    }
    socket.emit("create question", question);
    navigate("/view");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Question type:
        <select value={questionType} onChange={handleQuestionTypeChange}>
          <option value="MC">Multiple choice</option>
          <option value="FR">Free response</option>
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
      {questionType === "MC" ? (
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
          Answer:
          <input
            type="text"
            value={answerText}
            onChange={handleAnswerTextChange}
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
