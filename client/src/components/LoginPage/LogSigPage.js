import React from "react";
import Header from "../Navigation/Header";
import Footer from "../Navigation/Footer";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import AuthDetails from "./AuthDetails";

function LogSigPage() {
  return (
    <div>
      <Header />
      <LoginPage />
      <SignupPage />
      <AuthDetails />
      <Footer />
    </div>
  );
}

export default LogSigPage;
