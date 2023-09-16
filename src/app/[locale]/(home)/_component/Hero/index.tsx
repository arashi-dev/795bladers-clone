import { useTranslations } from "next-intl";
import React from "react";

const Hero: React.FC = () => {
  const t = useTranslations("Hero");

  return (
    <div className="static flex h-[80vh] w-full flex-col items-center justify-center">
      <p className="mb-[10vh] flex h-14 items-center justify-center rounded-full border border-zinc-800 px-10 text-sm font-bold uppercase tracking-widest text-white">
        {t("new")}
      </p>

      <h1 className="flex w-screen justify-center overflow-hidden text-[20.1vw]/none font-bold tracking-tight text-zinc-200">
        <span>795 Blade</span>
        <span className="mt-[.1em] text-[.35em]">RS</span>
      </h1>
    </div>
  );
};

export default Hero;
