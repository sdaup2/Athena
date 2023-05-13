import React from "react";
import Header from "../../components/Navigation/Header";
import Welcome from "./Welcome/Welcome";
import Features from "./Features/Features";
import Footer from "../../components/Navigation/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Welcome />
      <Features />
      <Footer />
    </div>
  );
}

export default Home;
