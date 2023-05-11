import React from "react";
import MultipleChoice from "../../components/Questions/MultipleChoice/MultipleChoice";
import FreeResponse from "../../components/Questions/FreeResponse/FreeResponse";
import Footer from "../../components/Navigation/Footer";
import Header from "../../components/Navigation/Header";
import athena from "../../assets/athena.png";

function DisplayQuestion() {
  //change this to "MC" or "FR" and the page will change accordingly
  const questionType = "FR";

  //these are what you change brooke
  const questionString = "HARD 1";
  const imageConst = athena;
  const answerOptionsString = ["HARD 2", "HARD 3", "HARD 4"];

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