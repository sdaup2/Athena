import * as React from "react";
import { socket } from "./socket";

import Home from "./pages/HomePage/Home";
import QuestionSet from "./pages/QuestionSet/QuestionSet";
import Classes from "./pages/Classes/Classes";

// import LoginPage from "./components/LoginPage/LoginPage";
// import SignupPage from "./components/LoginPage/SignupPage";
import LogPage from "./pages/LoginPage/LogPage";
import SignPage from "./pages/LoginPage/SignPage";
import Waiting from "./components/StudentClassSession/Waiting";
import Live from "./components/StudentClassSession/Live";
import NoSession from "./components/StudentClassSession/NoSession";
import ClassWaitroomPage from "./pages/ClassWaitroom/ClassWaitroomPage";
import ClassQuestions from "./pages/ClassQuestions/ClassQuestions";
import ClassQuestionView from "./pages/ClassQuestionView/ClassQuestionView";
import { Routes, Route } from "react-router-dom";
import MultipleChoiceMain from "./components/Questions/MultipleChoiceMain.js";
import UserSettings from "./pages/UserSettings/UserSettings";
import CreateQuestion from "./pages/ClassQuestions/CreateQuestion";
import DisplayQuestion from "./pages/ClassQuestions/DisplayQuestion";
import StudentAnswersDisplayFunction from "./pages/StudentAnswerDisplay/StudentAnswerDisplay";

function App() {
  function receivedFunction() {
    console.log("received");
  }
  socket.on("connect", receivedFunction());
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="classes" element={<Classes />} />
        <Route path="questionsets" element={<QuestionSet />} />
        <Route path="waitroom" element={<ClassWaitroomPage />} />
        <Route path="class questions" element={<ClassQuestions />} />
        <Route path="view" element={<ClassQuestionView />} />
        <Route path="login" element={<LogPage />} />
        <Route path="signup" element={<SignPage />} />
        <Route path="waiting" element={<Waiting />} />
        <Route path="live" element={<Live />} />
        <Route path="nosession" element={<NoSession />} />
        <Route path="multiplechoice" element={<MultipleChoiceMain />} />
        <Route path="usersettings" element={<UserSettings />} />
        <Route path="createquestion" element={<CreateQuestion />} />
        <Route path="displayquestion" element={<DisplayQuestion />} />
        <Route path="studentanswerdisplay" element={<StudentAnswersDisplayFunction />} />
      </Routes>
    </div>
  );
}

export default App;
