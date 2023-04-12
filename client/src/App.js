import * as React from "react";

import Home from "./Pages/Home";
import QuestionSet from "./Pages/QuestionSet";
import Classes from "./Pages/Classes";

// import LoginPage from "./components/LoginPage/LoginPage";
// import SignupPage from "./components/LoginPage/SignupPage";
import LogPage from "./components/LoginPage/LogPage";
import SignPage from "./components/LoginPage/SignPage";

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="classes" element={<Classes />} />
        <Route path="questionsets" element={<QuestionSet />} />
        <Route path="login" element={<LogPage />} />
        <Route path="signup" element={<SignPage />} />
      </Routes>
    </div>
  );
}

export default App;
