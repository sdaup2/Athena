import React from "react";
<<<<<<< Updated upstream
// import Header from "../components/Navigation/Header";
// import Hero from "../components/HomePage/Hero";
// import Features from "../components/HomePage/Features";
// import Testimonials from "../components/HomePage/Testimonials";
// import Footer from "../components/Navigation/Footer";
// import AboutUs from "../components/HomePage/AboutUs";
// import LoginPage from "../components/LoginPage/LoginPage";
//import SignupPage from "../components/LoginPage/SignupPage";
import MultipleChoice from "../components/Questions/MultipleChoice/MultipleChoice";
import athena from "../components/Questions/images/athena.png"
=======
import Header from "../components/Navigation/Header";
import Hero from "../components/HomePage/Hero";
import Features from "../components/HomePage/Features";
import Testimonials from "../components/HomePage/Testimonials";
import Footer from "../components/Navigation/Footer";
 import AboutUs from "../components/HomePage/AboutUs";
import LoginPage from "../components/LoginPage/LoginPage";
import SignupPage from "../components/LoginPage/SignupPage";
>>>>>>> Stashed changes

function Home() {
  return (
    <div>
<<<<<<< Updated upstream
      <MultipleChoice
        questionText="What type of dog do you have?"
        imageSrc={athena}
        answerOptions={["Golden", "Golden Retriever", "German Shepherd", "Cat"]}
      />
      {/* <SignupPage /> */}
      {/* <Header />
=======
      {/* <SignupPage /> */}
      <Header />
>>>>>>> Stashed changes
      <Hero />
      <Features />
      <Testimonials />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default Home;
