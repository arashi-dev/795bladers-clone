"use client";

import { useElementSize, useViewportSize } from "@mantine/hooks";
import clsx from "clsx";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useCallback } from "react";
import { useContainerRef } from "~/app/[locale]/_components/Container";

type ReasonProps = React.PropsWithChildren<{
  className?: string;
  index: number;
}>;

const Reason: React.FC<ReasonProps> = ({ children, index, className }) => {
  const containerRef = useContainerRef();
  const { height } = useViewportSize();

  const container = containerRef.current;

  const containerSize = useElementSize();

  containerSize.ref.current = container;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    layoutEffect: false,
    offset: ["start", "end start"],
  });

  const topRect = useTransform(
    useCallback(
      () => scrollYProgress.get() * containerSize.height,
      [containerSize.height, scrollYProgress]
    )
  );

  const offset = height + height * index * 1.5 + height * 0.6;

  const opacity = useTransform(
    topRect,
    [offset - height * 0.1, offset],
    [1, 0]
  );

  return (
    <motion.div
      style={{ opacity }}
      className={clsx(
        "sticky top-[80vh] mx-auto max-w-[70vw] text-center text-base/[1.2] font-bold -tracking-[.02em] text-neutral-200 sm:top-[90vh] sm:max-w-[30vw]",
        className
      )}
    >
      <p>{children}</p>
    </motion.div>
  );
};

export default Reason;
