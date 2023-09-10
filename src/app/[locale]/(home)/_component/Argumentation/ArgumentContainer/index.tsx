"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import { useContainerRef } from "../../../../_components/Container";

const ArgumentContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const containerRef = useContainerRef();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
    layoutEffect: false,
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);

  return (
    <div className="relative w-full flex-1 overflow-hidden border-b border-zinc-700 px-6 first:border-t">
      <motion.div
        style={{ y }}
        className="gird-rows-[auto] flex h-full w-full auto-cols-fr grid-cols-12 flex-col items-start sm:grid sm:items-center"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ArgumentContainer;
