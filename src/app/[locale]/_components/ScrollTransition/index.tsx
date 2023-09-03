"use client";

import { useMergedRef } from "@mantine/hooks";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { forwardRef, useRef } from "react";

type ScrollTransitionProps = React.PropsWithChildren<{
  className?: string;
  from: number;
  to: number;
}>;

const ScrollTransition = forwardRef<HTMLDivElement, ScrollTransitionProps>(
  ({ children, className, from, to }, _ref) => {
    const ref = useRef<HTMLDivElement>(null);

    const mergedRef = useMergedRef(ref, _ref);

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [from, to]);

    useMotionValueEvent(y, "change", console.log);

    return (
      <motion.div ref={mergedRef} style={{ y }} className={className}>
        {children}
      </motion.div>
    );
  }
);

ScrollTransition.displayName = "ScrollTransition";

export default ScrollTransition;
