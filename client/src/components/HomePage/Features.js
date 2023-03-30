import React from "react";
import "./Features.css";
import createclass from "./Images/createclass.png";
import quiz from "./Images/quiz.png";
import clock from "./Images/clock.png";

function Features() {
  return (
    <section className="features">
      <div className="feature">
        <img src={createclass} alt="Create classes" />
        <h2>Create Classes</h2>
        <p>
          Teachers can create new classes and manage existing ones, allowing
          them to easily organize students and question sets.
        </p>
      </div>
      <div className="feature">
        <img src={quiz} alt="Create question sets" />
        <h2>Create Question Sets</h2>
        <p>
          Teachers can create new question sets for their classes, complete with
          multiple-choice or open-ended questions.
        </p>
      </div>
      <div className="feature">
        <img src={clock} alt="Real-time questions" />
        <h2>Real-time Questions</h2>
        <p>
          Teachers can ask questions in real time and students can respond to
          them immediately, allowing for interactive and engaging lessons.
        </p>
      </div>
    </section>
  );
}

export default Features;
