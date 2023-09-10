import React from "react";
import WhyImage from "./Image";
import Container from "~/app/[locale]/_components/Container";
import Reason from "./Reason";
import { useTranslations } from "next-intl";
import Text from "../Text";

const Why: React.FC = () => {
  const t = useTranslations("Why");
  return (
    <Container className="relative h-max">
      <div className="absolute left-0 top-0 h-full w-full">
        <WhyImage />
      </div>
      <div className="relative flex h-max w-full flex-col pt-[100vh]">
        <div className="flex flex-col gap-y-[150vh]">
          <Reason index={0}>{t("reasons.1")}</Reason>
          <Reason index={1}>{t("reasons.2")}</Reason>
          <Reason index={2}>{t("reasons.3")}</Reason>
          <div />
        </div>

        <div className="flex w-full auto-cols-auto grid-cols-12 flex-col gap-[4vh] sm:grid">
          <Text
            text={t("largeText")}
            className="sm:grid-area-[span_1_/_span_8_/_span_1_/_span_8]"
          />

          <p className="self-end pb-[9.4vw] pl-[4vw] pr-[7vw] text-neutral-400 sm:pl-[1.4vw] sm:pr-[8vw] sm:grid-area-[span_1_/_span_4_/_span_1_/_span_4]">
            {t("smallText")}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Why;
