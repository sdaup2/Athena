import React, { useState } from "react";
import { CSVLink } from "react-csv";
import Header from "../../components/Navigation/Header";
import Footer from "../../components/Navigation/Footer";
// "./Styles/SessionEnd.css";

function SessionEnd() {
  const [questions, setQuestions] = useState(["Q1", "Q2", "Q3"]);

  const [responsesDict, setResponsesDict] = useState({
    Alice: ["HARD 1", "HARD 2", "HARD 3"],
    Bob: ["HARD 4", "HARD 5", "HARD 6"],
    Jeffery: ["HARD 7", "HARD 8", "HARD 9"],
  });

  // Convert responses dictionary to array
  const responses = Object.keys(responsesDict).map((key) => responsesDict[key]);

  return (
    <div>
      <Header />
      <div className="session-end-container">
        <h1 className="session-ended">Session Ended</h1>
        <h1 className="download">
          If you would like to download the answers, click below!
        </h1>
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