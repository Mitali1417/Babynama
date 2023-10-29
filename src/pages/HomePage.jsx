import React from "react";
import Hero from "../components/Hero";
import Instructor from "../components/Instructor";

const HomePage = () => {
  return (
    <>
      <div className="ss:hidden">
        <Hero />
        <Instructor />
      </div>
    </>
  );
};

export default HomePage;
