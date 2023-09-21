"use client";

import { motion } from "framer-motion";
import React from "react";

type LoadingProps = {
  newText: string;
  loadingText: string;
  waitText: string;
};

const Loading: React.FC<LoadingProps> = ({
  loadingText,
  newText,
  waitText,
}) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      // animate={{ opacity: 0, transitionEnd: { display: "none" } }}
      transition={{ delay: 0.5, duration: 0.2, ease: "easeInOut" }}
      className="fixed bottom-0 left-0 right-0 top-0 z-[10000] flex flex-col items-center justify-center gap-y-[10vh] bg-[#0d0d0d]"
    >
      <div className="flex flex-col items-center self-center">
        <p className="mb-[2vh] flex h-14 items-center justify-center rounded-full border border-zinc-800 px-10 text-sm font-bold uppercase tracking-widest text-white">
          {newText}
        </p>

        <p className="flex w-screen justify-center text-7xl font-bold text-zinc-200">
          <span>795 Blade</span>
          <span className="mt-[.05em] text-[.35em]">RS</span>
        </p>
      </div>

      <div className="relative w-screen h-max gap-y-8 flex flex-col">
        <div className="animate-[loaderWhite_3s_infinite_ease-in-out] shadow-[0_0_3px] block shadow-white bg-white h-px relative -translate-x-full w-[15vw]" />
        <div className="animate-[loaderBlue_2s_infinite_ease-in-out] shadow-[0_0_3px] block shadow-blue-700 bg-blue-700 h-px relative -translate-x-full w-[15vw]" />
        <div className="animate-[loaderYellow_2s_.5s_infinite_ease-in-out] shadow-[0_0_3px] block shadow-yellow-400 bg-yellow-400 h-px relative w-[10vw] -translate-x-full" />
        <div className="animate-[loaderRed_2s_1.7s_infinite_ease-in-out] shadow-[0_0_3px] block shadow-red-600 bg-red-600 h-px relative w-[15vw] -translate-x-full" />
      </div>

      <div className="max-w-xs text-center text-neutral-400 animate-pulse">
        <p>{loadingText}</p>
        <p>{waitText}</p>
      </div>
    </motion.div>
  );
};

export default Loading;
