import * as React from "react";
import { socket } from "./socket";

import Home from "./pages/HomePage/Home";
import Classes from "./pages/Classes/Classes";

import LogPage from "./pages/LoginPage/LogPage";
import SignPage from "./pages/LoginPage/SignPage";
import Waiting from "./components/StudentClassSession/Waiting";
import NoSession from "./components/StudentClassSession/NoSession";
import ClassWaitroomPage from "./pages/ClassWaitroom/ClassWaitroomPage";
import ClassQuestions from "./pages/ClassQuestions/ClassQuestions";
import ClassQuestionView from "./pages/ClassQuestionView/ClassQuestionView";
import { Routes, Route } from "react-router-dom";
import UserSettings from "./pages/UserSettings/UserSettings";
import CreateQuestion from "./pages/ClassQuestions/CreateQuestion";
import DisplayQuestion from "./pages/ClassQuestions/DisplayQuestion";
import StudentAnswersDisplayFunction from "./pages/StudentAnswerDisplay/StudentAnswerDisplay";
import SessionEnd from "./pages/ClassQuestions/SessionEnd";

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
        <Route path="waitroom" element={<ClassWaitroomPage />} />
        <Route path="class questions" element={<ClassQuestions />} />
        <Route path="view" element={<ClassQuestionView />} />
        <Route path="login" element={<LogPage />} />
        <Route path="signup" element={<SignPage />} />
        <Route path="waiting" element={<Waiting />} />
        <Route path="nosession" element={<NoSession />} />
        <Route path="usersettings" element={<UserSettings />} />
        <Route path="createquestion" element={<CreateQuestion />} />
        <Route path="displayquestion" element={<DisplayQuestion />} />
        <Route
          path="studentanswerdisplay"
          element={<StudentAnswersDisplayFunction />}
        />
        <Route path="sessionend" element={<SessionEnd />} />
      </Routes>
    </div>
  );
}

export default App;
