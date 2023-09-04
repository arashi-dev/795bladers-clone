import React from "react";
import Hero from "./_component/Hero";
import Reveal from "./_component/Reveal";
import ScrollTransition from "../_components/ScrollTransition";

const Page = () => {
  return (
    <>
      <ScrollTransition from={-300} to={300}>
        <Hero />
      </ScrollTransition>

      <Reveal />
    </>
  );
};

export default Page;
