import React from "react";
import Header from "../../components/Navigation/Header";
import Welcome from "./Welcome/Welcome";
import Features from "./Features/Features";
import Footer from "../../components/Navigation/Footer";
// import LoginPage from "../components/LoginPage/LoginPage";
// import SignupPage from "../components/LoginPage/SignupPage";
// import MultipleChoice from "../components/Questions/MultipleChoice/MultipleChoice";
// import athena from "../components/Questions/images/athena.png";

function Home() {
  return (
    <div>
      {/* <MultipleChoice
        questionText="What type of dog do you have?"
        imageSrc={athena}
        answerOptions={["Lab", "Golden Retriever", "German Shepherd", "Cat"]}
      /> */}
      {/* <SignupPage />  */}
      <Header />
      <Welcome />
      <Features />
      <Footer />
    </div>
  );
}

export default Home;
