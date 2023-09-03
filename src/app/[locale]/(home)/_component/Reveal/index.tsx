import React from "react";
import Lottie from "./Lottie";
import { useTranslations } from "next-intl";

const Reveal: React.FC = () => {
  const t = useTranslations("Reveal");

  return (
    <div>
      <Lottie
        scrollText={t("scroll")}
        presentationVideoText={t("presentationVideo")}
        captionText={t("caption")}
      />
    </div>
  );
};

export default Reveal;
