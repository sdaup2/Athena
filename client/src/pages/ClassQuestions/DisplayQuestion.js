import React, { useState } from "react";
import MultipleChoice from "../../components/Questions/MultipleChoice/MultipleChoice";
import FreeResponse from "../../components/Questions/FreeResponse/FreeResponse";
import Footer from "../../components/Navigation/Footer";
import Header from "../../components/Navigation/Header";
import athena from "../../assets/athena.png";
import { socket } from "../../socket";

function DisplayQuestion() {
  //change this to "MC" or "FR" and the page will change accordingly

  

  const [questionType, setQuestionType] = useState("MC");
  const [questionString, setQuestionString] = useState("HARD 1");
  const [imageConst, setImageConst] = useState(athena);
  const [answerOptionsString, setAnswerOptionsString] = useState(["HARD 2", "HARD 3", "HARD 4"]);

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  socket
    .off("next question")
    .on("next question", (question_object) => {
      console.log("recieved next question");
      let allAnswers = question_object.Options.concat(question_object.CorrectAnswers);
      shuffle(allAnswers);
      setQuestionType(question_object.ResponseType);
      setAnswerOptionsString(allAnswers);
      setQuestionString(question_object.QuestionText);
    });


  return (
    <div>
      <Header />

      <>
        {questionType === "MC" ? (
          <div>
            <h1>MultipleChoice</h1>

            <MultipleChoice
              questionText={questionString}
              imageSrc={imageConst}
              answerOptions={answerOptionsString}
            />
          </div>
        ) : (
          <div>
            <h1>Free Response</h1>

            <FreeResponse question={questionString} />
          </div>
        )}
      </>

      <Footer />
    </div>
  );
}

export default DisplayQuestion;