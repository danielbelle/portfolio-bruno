import React from "react";
import About from "../Components/About";
import Profile from "../Components/Profile";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";

const Home = () => {
  return (
    <>
      <Profile />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;