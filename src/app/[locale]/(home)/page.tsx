import React from "react";
import Hero from "./_component/Hero";
import Reveal from "./_component/Reveal";
import ScrollTransition from "../_components/ScrollTransition";
import Argumentation from "./_component/Argumentation";
import Text from "./_component/Text";
import { useTranslations } from "next-intl";
import Carousel from "./_component/Carousel";
import Why from "./_component/Why";

const Page = () => {
  const t = useTranslations("Cofidis");

  return (
    <>
      <ScrollTransition from={-300} to={300}>
        <Hero />
      </ScrollTransition>

      <Reveal />

      <Argumentation />

      <Text text={t("text")} />

      <Carousel />

      <Why />

      <div className="block h-screen" />
    </>
  );
};

export default Page;
