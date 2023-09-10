import React from "react";
import ArgumentContainer from "./ArgumentContainer";
import ArgumentText from "./ArgumentText";
import { useTranslations } from "next-intl";
import Container from "../../../_components/Container";
import dynamic from "next/dynamic";
import ScrollTransition from "~/app/[locale]/_components/ScrollTransition";

const Images = dynamic(() => import("./Images"));

const Argumentation: React.FC = () => {
  const t = useTranslations("Argumentation");

  return (
    <Container className="relative my-[20vh] h-screen justify-between">
      <ScrollTransition
        from={-150}
        to={50}
        className="absolute z-10 h-full w-full"
      >
        <Images />
      </ScrollTransition>

      <div className="flex h-full flex-col">
        <ArgumentContainer>
          <p className="w-full self-center text-base text-zinc-500 sm:w-auto sm:grid-area-[1_/_2_/_2_/_5]">
            {t("1.smallText")}
          </p>

          <ArgumentText className="sm:grid-area-[1_/_8_/_2_/_13]">
            {t("1.text")}
          </ArgumentText>
        </ArgumentContainer>

        <ArgumentContainer>
          <ArgumentText className="sm:ml-auto">{t("2.text")}</ArgumentText>
        </ArgumentContainer>

        <ArgumentContainer>
          <ArgumentText className="sm:grid-area-[span_1_/_span_121_/_span_1_/_span_121]">
            {t("3.text")}
          </ArgumentText>
        </ArgumentContainer>

        <ArgumentContainer>
          <ArgumentText className="sm:ml-auto">{t("4.text")}</ArgumentText>
        </ArgumentContainer>
      </div>
    </Container>
  );
};

export default Argumentation;
