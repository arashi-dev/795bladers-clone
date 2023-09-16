import React from "react";
import Hero from "./_component/Hero";
import Reveal from "./_component/Reveal";
import ScrollTransition from "../_components/ScrollTransition";
import Argumentation from "./_component/Argumentation";
import Text from "./_component/Text";
import { useTranslations } from "next-intl";
import Carousel from "./_component/Carousel";
import Why from "./_component/Why";
import Photos from "./_component/Photos";
import Specs from "./_component/Specs";
import Products from "./_component/Products";
import { type Metadata } from "next";
import { getTranslator } from "next-intl/server";

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> => {
  const t = await getTranslator(locale, "Products");

  return {
    title: `795 Blade RS | ${t("slogan")} - LOOK Cycle`,
  };
};

const Page = () => {
  const t = useTranslations("Cofidis");

  return (
    <>
      <ScrollTransition from={-390} to={380} withOpacity className="relative -z-10">
        <Hero />
      </ScrollTransition>

      <Reveal />

      <Argumentation />

      <Text text={t("text")} />

      <Carousel />

      <Why />

      <Photos />

      <Specs />

      <Products />
    </>
  );
};

export default Page;
