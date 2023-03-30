import * as React from "react";

import Home from "./Pages/Home";
import QuestionSet from "./Pages/QuestionSet";
import Classes from "./Pages/Classes";

import LoginPage from "./components/LoginPage/LoginPage";
import SignupPage from "./components/LoginPage/SignupPage";
import LogSigPage from "./components/LoginPage/LogSigPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="classes" element={<Classes />} />
        <Route path="questionsets" element={<QuestionSet />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="logsig" element={<LogSigPage />} />
      </Routes>
    </div>
  );
}

export default App;
