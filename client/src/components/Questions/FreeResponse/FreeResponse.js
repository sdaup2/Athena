import React, { useState } from 'react';
import "./FreeResponse.css"

const FreeResponse = ({ question }) => {
  const [response, setResponse] = useState('');

  const handleResponseChange = (event) => {
    setResponse(event.target.value);
  };

  const handleSubmit = () => {
    // Handle the form submission or any other logic here
    console.log('Submitted response:', response);
  };

  return (
    <div className="question-container">
      <h3>Question:</h3>
      <p>{question}</p>
      <textarea
        rows="4"
        cols="50"
        value={response}
        onChange={handleResponseChange}
        className="response-textarea"
      />
      <button className="free-response-submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FreeResponse;