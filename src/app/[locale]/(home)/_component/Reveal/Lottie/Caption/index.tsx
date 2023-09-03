import { useElementSize, useMergedRef } from "@mantine/hooks";
import clsx from "clsx";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useMemo, useRef, useState } from "react";

type CaptionProps = {
  text: string;
};

const Caption: React.FC<CaptionProps> = ({ text }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const containerScroll = useScroll({
    target: contentRef,
    offset: ["start end", "end start"],
  });

  const contentSize = useElementSize();
  const mergedRef = useMergedRef(contentRef, contentSize.ref);

  const words = useMemo(() => text.split(" "), [text]);

  const lastActiveWordIndexMotionValue = useTransform(
    containerScroll.scrollYProgress,
    [0.2, 0.5],
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
      ref={mergedRef}
      className="absolute bottom-0 left-0 grid w-screen auto-rows-auto grid-cols-12 p-[8vw]"
    >
      <p
        key={text}
        className="whitespace-pre-wrap text-[6.3vw]/[1.2] font-bold -tracking-[.02em] text-neutral-50 grid-area-[span_1_/_span_9_/_span_1_/_span_9]"
      >
        {words.map((word, i) => (
          <span
            key={i}
            className={clsx({
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

export default Caption;
