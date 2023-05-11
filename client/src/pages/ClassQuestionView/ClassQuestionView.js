import React from "react";
import ClassQuestion from "../../components/ClassQuestionsSets/ClassQuestionDisplay";
import Footer from "../../components/Navigation/Footer";
import Header from '../../components/Navigation/Header';

/**What a question set looks like when you click "view" on the specified question set, displays all questions */
const currentQuestionSet = [
  {
    id: 1,
    setName: "Random Question Set",
    questions: [
      { id: 1, name: "What is your favorite color?", answers: ["a", "b", "c"] },
      { id: 2, name: "What color is the sky?", answers: ["a", "b", "c"] },
      { id: 3, name: "Hnghhhhhhh?", answers: ["a", "b", "c"] },
      { id: 4, name: "Hnghhhhhhh?", answers: ["a", "b", "c"] },
      { id: 5, name: "Hnghhhhhhh?", answers: ["a", "b", "c"] },
    ],
  },
];

const Page = () => {
  return (
    <div>
    <Header />
    <div>
      {currentQuestionSet.map((classObj) => (
        <ClassQuestion
          key={classObj.id}
          setName={classObj.setName}
          questions={classObj.questions}
        />
      ))}
    </div>
    <Footer />
    </div>
  );
};

export default Page;