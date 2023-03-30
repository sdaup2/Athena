import React from "react";
import Header from "../Navigation/Header";
import Footer from "../Navigation/Footer";
import LoginPage from "./LoginPage";
import AuthDetails from "./AuthDetails";

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
