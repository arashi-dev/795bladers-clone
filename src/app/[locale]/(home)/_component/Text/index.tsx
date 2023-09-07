"use client";

import clsx from "clsx";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useMemo, useRef, useState } from "react";

type TextProps = {
  text: string;
  className?: string;
  innerClassName?: string;
};

const Text: React.FC<TextProps> = ({ text, className, innerClassName }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const containerScroll = useScroll({
    target: contentRef,
    offset: ["start .8", "end .8"],
  });

  const words = useMemo(() => text.split(" "), [text]);

  const lastActiveWordIndexMotionValue = useTransform(
    containerScroll.scrollYProgress,
    [0, 1],
    [-1, words.length - 1]
  );

  const [lastActiveWordIndex, setLastActiveWordIndex] = useState(
    lastActiveWordIndexMotionValue.get()
  );

  useMotionValueEvent(lastActiveWordIndexMotionValue, "change", (v) =>
    setLastActiveWordIndex(v)
  );

  return (
    <motion.div
      className={clsx(
        "w-screen auto-rows-auto grid-cols-12 py-[8vw] pl-[4vw] pr-[7vw] sm:grid sm:p-[8vw]",
        className
      )}
    >
      <p
        ref={contentRef}
        key={text}
        className={clsx(
          "whitespace-pre-wrap text-[14vw]/[1.2] font-bold -tracking-[.02em] text-neutral-50 grid-area-[span_1_/_span_9_/_span_1_/_span_9] sm:text-[6.3vw]/[1.2]",
          innerClassName
        )}
      >
        {words.map((word, i) => (
          <span
            key={i}
            className={clsx("transition duration-200", {
              "opacity-30": i > lastActiveWordIndex,
            })}
          >
            {word}{" "}
          </span>
        ))}
      </p>
    </motion.div>
  );
};

export default Text;
