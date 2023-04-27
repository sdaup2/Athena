import React from "react";
import ClassQuestionSets from "../../components/ClassQuestionsSets/ClassQuestionSets";
import Footer from "../../components/Navigation/Footer";
import Header from "../../components/Navigation/Header";
import { socket } from "../../socket";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ClassQuestions = () => {
  const navigate = useNavigate();
  const populateQS = (qsNames, class_code, class_name) => {
    console.log("working on QS");
    let increment = 0;
    let qsNamesObject = []
    qsNames.forEach((qs_name) => {
      let qsObject = {
        id: increment,
        name: qs_name,
      }
      qsNamesObject.push(qsObject);
      increment += 1;
    });
    let classes_socket = [{
      id: 0,
      className: class_name,
      classCode: class_code,
      questionSets: qsNamesObject,
    }]
    updateClasses(classes_socket);
  };

  socket.on("QS info", (qsNames, class_code, class_name) => {
    populateQS(qsNames, class_code, class_name);
  });

  socket
    .off("teacher started session")
    .on("teacher started session", (class_code) => {
      socket.emit("for session nav", class_code);
      navigate("/waitroom");
  })

  const [classes, setClasses] = useState([]);
  // Define a setter method to update the content of the classes array
  const updateClasses = (newClasses) => {
    setClasses(newClasses);
  };

  const handleAddSet = () => {
    const qs_name = window.prompt("Enter the Question Set name:");
    let spef_class = classes[0];
    socket.emit("add question set", spef_class.className, spef_class.classCode, qs_name);
  }


  return (
    <div>
    <Header />
    <div>
      {classes.map((classObj) => (
        <ClassQuestionSets
          key={classObj.id}
          className={classObj.className}
          classCode={classObj.classCode}
          questionSets={classObj.questionSets}
        />
      ))}
    </div>
    <div className="add-question-set">
        <button onClick={handleAddSet}>Add Question Set</button>
    </div>
    <Footer />
    </div>
  );
};

export default ClassQuestions;
