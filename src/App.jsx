import React from "react";
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Crew from "./components/Crew/crew";
import Footer from "./components/Footer/footer";


const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Intro />
      <Crew />
      <Footer />
    </div>
  );
};

export default App
