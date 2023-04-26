import React from "react";
import Header from "../components/Navigation/Header";
import Footer from "../components/Navigation/Footer";
import MultipleChoice from "../components/Questions/MultipleChoice/MultipleChoice";
import athena from "../components/Questions/images/athena.png";
import StudentAnswersDisplay from "../components/StudentAnswersDisplay/StudentAnswersDisplay.js"


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
function QuestionSet() {
  return (
    <div>
      <Header />
      {/* Code for student answer display component. Will take in a question and a map of responses for user to display */}
      <StudentAnswersDisplay
        question="What is the Capital of France?"
        answerMap={testMap}
      />
      {/* <MultipleChoice
        questionText="What type of dog do you have?"
        imageSrc={athena}
        answerOptions={["Lab", "Golden Retriever", "German Shepherd", "Cat"]}
      /> */}
      <Footer />
    </div>
  );
}
export default QuestionSet;
