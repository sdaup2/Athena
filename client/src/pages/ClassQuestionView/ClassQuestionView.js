import {React, useState} from "react";
import ClassQuestion from "../../components/ClassQuestionsSets/ClassQuestionDisplay";
import Footer from "../../components/Navigation/Footer";
import Header from '../../components/Navigation/Header';
import { useNavigate } from "react-router-dom";
import { socket } from "../../socket";
import "./ClassQuestionView.css";

/**What a question set looks like when you click "view" on the specified question set, displays all questions */




const Page = () => {

  const navigate = useNavigate();

  const [setName, setSetName] = useState();
  const [questions, setQuestions] = useState([]);
  const [classObj, setClassObj] = useState({});

  const handleNewQuestion = () => {
    navigate("/createquestion");
  }

  const handleBackToSets = () => {
    navigate("/class questions");
  }

  socket
    .off("returning question list")
    .on("returning question list", (question_list, class_name) => {
      const questions_list_as_set = question_list.map((c) => ({ name: c.QuestionText, answers: c.CorrectAnswers }));
      console.log(questions_list_as_set);
      setQuestions(questions_list_as_set);
      setSetName(class_name);
    });


  return (
    <div>
    <Header />
    <div className="button-group">
        <button onClick = {handleNewQuestion} style= {{borderLeft: "10px"}}>New Question</button>
        <button onClick = {handleBackToSets} style= {{borderLeft: "10px"}}>Back to Sets</button>
    </div>
    <div>
        <ClassQuestion
          setName={setName}
          questions={questions}
        />
    </div>
    <Footer />
    </div>
  );
};

export default Page;