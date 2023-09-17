import React from "react";
import { useTranslations } from "next-intl";
import List from "./List";
import Container from "~/app/[locale]/_components/Container";
import dynamic from "next/dynamic";

const Images = dynamic(() => import("./Images"), { ssr: false });

const Specs: React.FC = () => {
  const t = useTranslations("Specs");
  return (
    <Container className="relative mt-[50vh] h-[400vh]">
      <Images />

      <div className="absolute bottom-0 left-0 z-10 flex h-max w-screen grid-cols-12 flex-col gap-x-[4vh] p-[8vw] -tracking-[0.02em] text-neutral-200 sm:grid sm:gap-x-0">
        <h2 className="text-2xl font-bold grid-area-[span_1_/_span_12_/_span_1_/_span_12]">
          {t("title")}
        </h2>

        <List
          title={t("byLook.title")}
          items={[
            {
              title: t("byLook.seatpost.title"),
              description: t("byLook.seatpost.description"),
            },
            {
              title: t("byLook.saddle.title"),
              description: t("byLook.saddle.description"),
            },
            {
              title: t("byLook.handlebar.title"),
              description: t("byLook.handlebar.description"),
            },
            {
              title: t("byLook.stem.title"),
              description: t("byLook.stem.description"),
            },
          ]}
        />

        <List
          title={t("wheels.title")}
          items={[
            {
              title: t("wheels.wheels.title"),
              description: t("wheels.wheels.description"),
            },
            {
              title: t("wheels.tires.title"),
              description: t("wheels.tires.description"),
            },
          ]}
        />

        <List
          title={t("transmissionAndBrakes.title")}
          items={[
            {
              title: t("transmissionAndBrakes.chain.title"),
              description: t("transmissionAndBrakes.chain.description"),
            },
            {
              title: t("transmissionAndBrakes.crankset.title"),
              description: t("transmissionAndBrakes.crankset.description"),
            },
            {
              title: t("transmissionAndBrakes.bottomBracket.title"),
              description: t("transmissionAndBrakes.bottomBracket.description"),
            },
            {
              title: t("transmissionAndBrakes.cassette.title"),
              description: t("transmissionAndBrakes.cassette.description"),
            },
            {
              title: t("transmissionAndBrakes.shifters.title"),
              description: t("transmissionAndBrakes.shifters.description"),
            },
            {
              title: t("transmissionAndBrakes.derailleurs.title"),
              description: t("transmissionAndBrakes.derailleurs.description"),
            },
            {
              title: t("transmissionAndBrakes.brakes.title"),
              description: t("transmissionAndBrakes.brakes.description"),
            },
          ]}
        />

        <List
          title={t("size.title")}
          items={[
            {
              title: t("size.size.title"),
              description: t("size.size.description"),
            },
          ]}
        />
      </div>
    </Container>
  );
};

export default Specs;
