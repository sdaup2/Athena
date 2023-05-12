import React, { useState } from "react";
import { CSVLink } from "react-csv";
import Header from "../../components/Navigation/Header";
import Footer from "../../components/Navigation/Footer";
import "./Styles/SessionEnd.css";


function SessionEnd() {
  const [questions, setQuestions] = useState([
    { label: "What is your name?", key: "name" },
    { label: "What is your favorite color?", key: "color" },
    { label: "What is your favorite food?", key: "food" },
  ]);

  const [responsesDict, setResponsesDict] = useState({
    Alice: { name: "Alice", color: "Blue", food: "Pizza" },
    Bob: { name: "Bob", color: "Green", food: "Tacos" },
    Charlie: { name: "Charlie", color: "Red", food: "Sushi" },
  });

  // Convert responses dictionary to array
  const responses = Object.keys(responsesDict).map((key) => responsesDict[key]);

  return (
    <div>
      <Header />
      <div className="session-end-container">
        <h1 className="session-ended">Session Ended</h1>
        <h1 className="download">If you would like to download the answers, click below!</h1>
        <h1>
          <CSVLink
            data={responses}
            headers={questions}
            filename={"responses.csv"}
            className="csv-download"
          >
            Export CSV
          </CSVLink>
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default SessionEnd;
