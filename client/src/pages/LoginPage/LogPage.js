import React from "react";
import Header from "../../components/Navigation/Header";
import Footer from "../../components/Navigation/Footer";
import LoginPage from "./LoginPage";
import AuthDetails from "./AuthDetails";

// generates the full login page 
function LogPage() {
  return (
    <div>
      <Header />
      <LoginPage />
      <AuthDetails />
      <Footer />
    </div>
  );
}

export default LogPage;
