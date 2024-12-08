import React from "react";
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Information from "./components/Information/information";
import Crew from "./components/Crew/crew";
import Price from "./components/Price/price";
import Connect from "./components/Connect/connect";
import Questions from "./components/Questions/questions";
import Footer from "./components/Footer/footer";


const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Intro />
      <Information />
      <Crew />
      <Price />
      <Connect />
      <Questions />
      <Footer />
    </div>
  );
};

export default App
