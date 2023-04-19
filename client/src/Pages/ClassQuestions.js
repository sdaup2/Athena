import React from "react";
import ClassQuestionSets from "../components/ClassQuestionsSets/ClassQuestionSets";
import Footer from "../components/Navigation/Footer";
import Header from '../components/Navigation/Header';
import { socket } from "../socket";

socket.on("QS info", async(qsNames, class_code, class_name) => {
  classes.at(1).classCode = class_code;
  classes.at(1).className = class_name;
  console.log(classes.at(1).classCode);
  qsNames.forEach((qs_name) => {
    //do nothing
  });
});
let classes = [
  {
    id: 1,
    className: "Mathematics",
    classCode: "MATH101",
    questionSets: [
      { id: 1, name: "Algebra" },
      { id: 2, name: "Calculus" },
      { id: 3, name: "Geometry" },
    ],
  },
];

const Page = () => {
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
    <Footer />
    </div>
  );
};

export default Page;