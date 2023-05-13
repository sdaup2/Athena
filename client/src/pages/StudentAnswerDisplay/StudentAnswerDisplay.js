import {React, useState, useEffect} from "react";
import Header from "../../components/Navigation/Header";
import Footer from "../../components/Navigation/Footer";
import "./StudentAnswerDisplayPage.css"
import { StudentAnswersDisplay, checkAnswers } from "../../components/StudentAnswersDisplay/StudentAnswersDisplay";
import { socket } from "../../socket";
import { useNavigate } from "react-router-dom";




let allAnswers = {};

function StudentAnswersDisplayFunction() {

  const navigate = useNavigate();

  const [answerMap, setAnswerMap] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState();
  const [questionText, setQuestionText] = useState();


  socket
    .off("next question")
    .on("next question", (question_object) => {
      if (!(Object.keys(answerMap).length == 0)) {
        allAnswers[JSON.parse(JSON.stringify(questionText))] = JSON.parse(JSON.stringify(answerMap));
        console.log(allAnswers);
      }
      setAnswerMap({});
      setQuestionText(question_object.QuestionText);
      setCorrectAnswers(question_object.CorrectAnswers[0]);
  });
  
  socket
    .off("student answered")
    .on("student answered", async (user_id, answer) => {
      let counter = 0;
      if (user_id == null) {
        user_id = "anonymous" + counter;
        counter += 1;
      }
      let new_obj = JSON.parse(JSON.stringify(answerMap));
      new_obj[user_id] = answer;
      setAnswerMap(new_obj);
  });

  socket
    .off("teacher ended session")
    .on("teacher ended session", () => {
      navigate("/sessionend");
    });

  const handleEndSession = () => {
    allAnswers[JSON.parse(JSON.stringify(questionText))] = JSON.parse(JSON.stringify(answerMap));
    socket.emit("sending question results", allAnswers);
    console.log(JSON.stringify(allAnswers));
    allAnswers = {}
    console.log("ending session");
    socket.emit("end session");
    navigate("/sessionend");
    
  };

  const handleNextQuestion = () => {
    socket.emit("need next question");
  };

  return (
    <div>
      <Header />
      {/* Code for student answer display component. Will take in a question and a map of responses for user to display */}
      <StudentAnswersDisplay
        question={questionText}
        answerMap= {answerMap}
        correctAnswer= {correctAnswers}
      />
      <div className="button-group">
        <button className="quit-button" onClick = {handleEndSession}>Quit</button>
        <button className="next-button" onClick = {handleNextQuestion}>Next Question</button>
      </div>
      <Footer />
    </div>
  );
}
export default StudentAnswersDisplayFunction;