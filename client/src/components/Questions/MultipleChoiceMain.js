import React, { useState, useEffect } from "react";
import MultipleChoice from "./MultipleChoice/MultipleChoice";
import Footer from "../Navigation/Footer";
import Header from "../Navigation/Header";
import athena from "../Questions/images/athena.png";

// import { socket } from "../socket";
// import { getAuth } from "firebase/auth";

function Classes() {
  const [question, setQuestion] = useState([]);

  const getQuestion = () => {};

  return (
    <div>
      <Header />
      <div>
        <h1>MultipleChoice</h1>
        <div className="class-list">
          {question.map((q, i) => (
            <MultipleChoice
              key={i}
              questionText={q.text}
              imageSrc={athena}
              answerOptions={q.options}
            />
          ))}
        </div>

        <MultipleChoice
          questionText="What type of dog do you have?"
          imageSrc={athena}
          answerOptions={["Lab", "Golden Retriever", "German Shepherd", "Cat"]}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Classes;
