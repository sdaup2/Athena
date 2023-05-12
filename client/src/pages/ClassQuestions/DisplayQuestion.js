import React, { useState } from "react";
import MultipleChoice from "../../components/Questions/MultipleChoice/MultipleChoice";
import FreeResponse from "../../components/Questions/FreeResponse/FreeResponse";
import Footer from "../../components/Navigation/Footer";
import Header from "../../components/Navigation/Header";
import athena from "../../assets/athena.png";
import { socket } from "../../socket";
import { useNavigate } from "react-router-dom";

function DisplayQuestion() {
  //change this to "MC" or "FR" and the page will change accordingly

  
  const navigate = useNavigate();
  const [questionType, setQuestionType] = useState();
  const [questionString, setQuestionString] = useState();
  const [imageConst, setImageConst] = useState(athena);
  const [answerOptionsString, setAnswerOptionsString] = useState([]);

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

  socket 
    .off("teacher ended session")
    .on("teacher ended session", () => {
      socket.emit("need to leave room");
      navigate("/classes");

    });


    return (
      <div>
        <Header />
        <>
          {(() => {
            if (questionType === "MC") {
              return (
                <div>
                  <h1>MultipleChoice</h1>
                  <MultipleChoice
                    questionText={questionString}
                    imageSrc={imageConst}
                    answerOptions={answerOptionsString}
                  />
                </div>
              );
            } else if (questionType === "FR") {
              return (
                <div>
                  <h1>Free Response</h1>
                  <FreeResponse question={questionString} />
                </div>
              );
            } else {
              return (
                <div>
                  <h1>Waiting...</h1>
                </div>
              );
            }
          })()}
          ;
        </>
        <Footer />
      </div>
    );
  }
  export default DisplayQuestion;