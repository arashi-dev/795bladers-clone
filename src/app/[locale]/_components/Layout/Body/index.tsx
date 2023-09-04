"use client";

import { useWindowEvent } from "@mantine/hooks";
import clsx from "clsx";
import {
  type MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  transform,
} from "framer-motion";
import React, { useCallback, useRef } from "react";
import { avenir } from "~/app/[locale]/_fonts";

const Body: React.FC<React.PropsWithChildren> = ({ children }) => {
  const bodyRef = useRef<HTMLBodyElement>(null);
  const y = useMotionValue(0);
  const spring = useSpring(y, {
    damping: 15,
    mass: 0.5,
    stiffness: 80,
  }) as MotionValue<number>;

  useMotionValueEvent(
    spring,
    "change",
    useCallback((v) => window.scroll({ top: v }), [])
  );

  const prevYRef = useRef(0);

  useWindowEvent(
    "wheel",
    useCallback(
      (e) => {
        const current = transform(
          prevYRef.current + e.deltaY,
          [0, bodyRef.current?.scrollHeight ?? 0],
          [0, bodyRef.current?.scrollHeight ?? 0]
        );

        y.setWithVelocity(prevYRef.current, current, e.deltaY);

        prevYRef.current = current;
      },
      [y]
    )
  );

  return (
    <body
      ref={bodyRef}
      className={clsx(
        "no-scrollbar bg-neutral-950 font-avenir",
        avenir.variable
      )}
    >
      {children}
    </body>
  );
};

export default Body;
