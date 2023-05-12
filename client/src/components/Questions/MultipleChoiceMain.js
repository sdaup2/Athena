import React, { useState, useEffect } from "react";
import MultipleChoice from "./MultipleChoice/MultipleChoice";
import Footer from "../Navigation/Footer";
import Header from "../Navigation/Header";
import athena from "../../assets/athena.png";
// import { socket } from “../socket”;
// import { getAuth } from “firebase/auth”;
function MultipleChoiceMain() {
  const [question, setQuestion] = useState([]);
  const getQuestion = () => {};


  //these are what you change brooke
  const questionString = "HARD 1";
  const imageConst = athena;
  const answerOptionsString = ["HARD 2", "HARD 3", "HARD 4"];

  return (
    <div>
      <Header />
      <div>
        <h1>MultipleChoice</h1>
        <MultipleChoice
          questionText={questionString}
          imageSrc={imageConst}
          answerOptions={answerOptionsString}
        />
      </div>
      <Footer />
    </div>
  );
}
export default MultipleChoiceMain;