import * as React from "react";
import { socket } from './socket';

import Home from "./Pages/Home";
import QuestionSet from "./Pages/QuestionSet";
import Classes from "./Pages/Classes";

// import LoginPage from "./components/LoginPage/LoginPage";
// import SignupPage from "./components/LoginPage/SignupPage";
import LogPage from "./components/LoginPage/LogPage";
import SignPage from "./components/LoginPage/SignPage";
import ClassWaitroomPage from "./Pages/ClassWaitroomPage";
import ClassQuestions from "./Pages/ClassQuestions";

import { Routes, Route } from "react-router-dom";


function App() {
  function receivedFunction(){
    console.log("received");
  };
  socket.on("connect", receivedFunction());
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="classes" element={<Classes />} />
        <Route path="questionsets" element={<QuestionSet />} />
        <Route path="waitroom" element={<ClassWaitroomPage />} />
        <Route path="class questions" element={<ClassQuestions />} />
        <Route path="login" element={<LogPage />} />
        <Route path="signup" element={<SignPage />} />
      </Routes>
    </div>
  );
}

export default App;
