import {React, useState, useEffect} from "react";
import Header from "../../components/Navigation/Header";
import Footer from "../../components/Navigation/Footer";
import "./StudentAnswerDisplayPage.css"
import { StudentAnswersDisplay, checkAnswers } from "../../components/StudentAnswersDisplay/StudentAnswersDisplay";
import { socket } from "../../socket";



/** Currently known as Sandbox in the Header */
const testMap = {
  "Jace": "A",
  "Brooke": "B",
  "Seth": "D",
  "Ealynn" : "E",
  "Jace2": "A",
  "Brooke2": "B",
  "Seth2": "D",
  "Ealynn2" : "E",
  "Jace3": "A",
  "Brooke3": "B",
  "Seth3": "D",
  "Ealyn3n" : "E",
  "Jac": "A",
  "Brook": "B",
  "Set3": "D",
  "Ealyn4n" : "E",
  "ace": "A",
  "rooke": "B",
  "eth": "D",
  "alynn" : "E",
  "ace2": "A",
  "rooke2": "B",
  "eth2": "D",
  "alynn2" : "E",
  "ace3": "A",
  "rooke3": "B",
  "eth3": "D",
  "alyn3n" : "E",
  "ac": "A",
  "rook": "B",
  "et3": "D",
  "alyn4n" : "E"
  // add more students and answers here...
};



function StudentAnswersDisplayFunction() {

  const [answerMap, setAnswerMap] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [questionText, setQuestionText] = useState();


  socket
    .off("next question")
    .on("next question", (question_object) => {
      setQuestionText(question_object.QuestionText);
      setCorrectAnswers(question_object.CorrectAnswers);
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
      console.log(new_obj);
      setAnswerMap(new_obj);
  });

  const handleEndSession = () => {
    socket.emit("end session");
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
        correctAnswer= {correctAnswers[0]}
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