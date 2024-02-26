import React from "react";
import About from "../Components/About";
import Profile from "../Components/Profile";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <Profile />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
