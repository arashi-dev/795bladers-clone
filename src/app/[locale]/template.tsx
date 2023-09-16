import { useTranslations } from "next-intl";
import React from "react";
import Loading from "./_components/Layout/Loading";

const Template: React.FC<React.PropsWithChildren> = ({ children }) => {
  const t = useTranslations("Loading");

  return (
    <>
      <Loading
        newText={t("new")}
        loadingText={t("loading")}
        waitText={t("wait")}
      />

      {children}
    </>
  );
};

export default Template;
