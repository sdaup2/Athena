import React from "react";
import ClassQuestionSets from "../components/ClassQuestionsSets/ClassQuestionSets";
import Footer from "../components/Navigation/Footer";
import Header from '../components/Navigation/Header';


const classes = [
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