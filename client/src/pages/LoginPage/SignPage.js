import React from "react";
import Header from "../../components/Navigation/Header";
import Footer from "../../components/Navigation/Footer";
import SignupPage from "./SignupPage";
import AuthDetails from "./AuthDetails";

function SignPage() {
  return (
    <div>
      <Header />
      <SignupPage />
      <AuthDetails />
      <Footer />
    </div>
  );
}

export default SignPage;
