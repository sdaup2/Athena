import React from "react";
import Header from "../components/Navigation/Header";
import Footer from "../components/Navigation/Footer";
import MultipleChoice from "../components/Questions/MultipleChoice/MultipleChoice";
import athena from "../components/Questions/images/athena.png";

function QuestionSet() {
  return (
    <div>
      <Header />
      <MultipleChoice
        questionText="What type of dog do you have?"
        imageSrc={athena}
        answerOptions={["Lab", "Golden Retriever", "German Shepherd", "Cat"]}
      />
      <Footer />
    </div>
  );
}

export default QuestionSet;
