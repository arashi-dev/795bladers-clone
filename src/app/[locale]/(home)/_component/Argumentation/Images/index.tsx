"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import _frames from "./frames.json";
import {
  type MotionValue,
  motion,
  transform,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import {
  useHover,
  useMergedRef,
  useMouse,
  useViewportSize,
} from "@mantine/hooks";
import { useContainerRef } from "../../../../_components/Container";

type Frame = {
  id: string;
  w: number;
  h: number;
  u: string;
  p: string;
  e: number;
};

type Frames = {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: Frame[];
};

const frames = _frames as Frames;

const Images: React.FC = () => {
  const containerRef = useContainerRef();
  const { width } = useViewportSize();
  const [index, setIndex] = useState(0);
  const hover = useHover();
  const mouse = useMouse();
  const imagesRef = useRef(
    new Array<HTMLImageElement | null>(frames.assets.length).fill(null)
  );
  const mergedRef = useMergedRef(hover.ref, mouse.ref);

  const containerScroll = useScroll({
    target: containerRef,
    layoutEffect: false,
    offset: ["start end", "end start"],
  });

  const indexMotionValue = useMotionValue(0);

  const spring = useSpring(indexMotionValue, {
    damping: 10,
    mass: 0.1,
    stiffness: 150,
  }) as MotionValue<number>;

  useMotionValueEvent(
    spring,
    "change",
    useCallback((v) => setIndex(Math.ceil(v)), [])
  );
  useMotionValueEvent(
    containerScroll.scrollYProgress,
    "change",
    useCallback(
      (v) => {
        if (width < 640) {
          const index = transform(v, [0, 1], [0, frames.assets.length - 1]);

          indexMotionValue.setWithVelocity(
            indexMotionValue.get(),
            index,
            index - indexMotionValue.get()
          );
        }
      },
      [indexMotionValue, width]
    )
  );

  useEffect(() => {
    if (width < 640) return;

    if (hover.hovered) {
      const index = transform(
        mouse.x,
        [0, window.innerWidth],
        [frames.assets.length - 1, 0]
      );

      indexMotionValue.setWithVelocity(
        indexMotionValue.get(),
        index,
        index - indexMotionValue.get()
      );
    } else {
      indexMotionValue.setWithVelocity(
        indexMotionValue.get(),
        0,
        -indexMotionValue.get()
      );
    }
  }, [hover.hovered, indexMotionValue, mouse.x, width]);

  useEffect(() => {
    imagesRef.current.forEach((img) => img && (img.style.display = "none"));

    const target = imagesRef.current[index];

    if (target) {
      target.style.display = "block";
    }
  }, [hover.ref, index]);

  return (
    <motion.div
      ref={mergedRef}
      className="absolute left-1/2 h-full w-full -translate-x-1/2 sm:top-1/3 md:top-2/3 md:-translate-y-1/2 lg:top-0 lg:translate-y-0"
    >
      <div className="relative h-full w-full">
        {useMemo(
          () =>
            frames.assets.map((frame, i) => (
              <Image
                key={frame.id}
                ref={(ref) => (imagesRef.current[i] = ref)}
                src={frames.assets[i]!.p}
                alt=""
                width={width < 640 ? undefined : frames.assets[i]!.w}
                height={width < 640 ? undefined : frames.assets[i]!.h}
                className={"hidden object-cover"}
                fill={width < 640}
              />
            )),
          [width]
        )}
      </div>
    </motion.div>
  );
};

export default Images;
