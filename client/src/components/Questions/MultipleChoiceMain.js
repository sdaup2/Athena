import React, { useState, useEffect } from "react";
import MultipleChoice from "./MultipleChoice/MultipleChoice";
import Footer from "../Navigation/Footer";
import Header from "../Navigation/Header";
import athena from "../../assets/athena.png";
import { socket } from "../../socket";


function MultipleChoiceMain() {


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
