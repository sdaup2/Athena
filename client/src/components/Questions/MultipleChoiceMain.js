import React, { useState, useEffect } from "react";
import MultipleChoice from "./MultipleChoice/MultipleChoice";
import Footer from "../Navigation/Footer";
import Header from "../Navigation/Header";
import athena from "../../assets/athena.png";
import { socket } from "../../socket";


function MultipleChoiceMain() {
  const [question, setQuestion] = useState([]);

  const getQuestion = () => {};

  socket
    .off("next question")
    .on("next question", (question_object) => {
      let correctAnswers = question_object.CorrectAnswers;
      let answerOptions = question_object.Options;
      let questionText = question_object.QuestionText;
      let imageSrc = athena;
    });

  return (
    <div>
      <Header />
      <div>
        <h1>MultipleChoice</h1>
        <MultipleChoice
          questionText="HARD CODED"
          imageSrc={athena}
          answerOptions={["HARD", "CODED", "HARD", "CODED"]}
        />
      </div>
      <Footer />
    </div>
  );
}

export default MultipleChoiceMain;
