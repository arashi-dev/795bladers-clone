"use client";

import { useElementSize, useViewportSize } from "@mantine/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { useCursor } from "~/app/[locale]/_components/Cursor";

const List: React.FC<React.PropsWithChildren> = ({ children }) => {
const {setCursor}=    useCursor()
  const containerRef = useRef<HTMLDivElement>(null);
  const ulSize = useElementSize();
  const viewport = useViewportSize();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(ulSize.width - viewport.width * (1 - 2 * 0.08))]
  );

  return (
    <div ref={containerRef} className="relative h-[400vh] w-screen">
      <div className="sticky top-0 h-screen w-screen overflow-hidden">
        <motion.ul
          ref={ulSize.ref}
          onHoverStart={() => setCursor("to-right")}
          onHoverEnd={() => setCursor("default")}
          style={{ x }}
          className="mx-[8vw] flex h-screen w-[300vw] border-l border-zinc-800"
        >
          {children}
        </motion.ul>
      </div>
    </div>
  );
};

export default List;
