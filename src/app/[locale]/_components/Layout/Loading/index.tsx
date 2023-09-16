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
      initial="initial"
      animate="animate"
      variants={{
        initial: { opacity: 1 },
        animate: { opacity: 0, transitionEnd: { display: "none" } },
      }}
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

      <div className="block h-24" />

      <div className="max-w-xs text-center text-neutral-400">
        <p>{loadingText}</p>
        <p>{waitText}</p>
      </div>
    </motion.div>
  );
};

export default Loading;
