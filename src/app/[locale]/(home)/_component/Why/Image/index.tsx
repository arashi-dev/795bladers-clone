"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import _frames from "./frames.json";
import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useContainerRef } from "~/app/[locale]/_components/Container";
import { useElementSize } from "@mantine/hooks";

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

const WhyImage: React.FC = () => {
  const elemSize = useElementSize();
  const containerRef = useContainerRef();
  const imagesRef = useRef(
    new Array<HTMLImageElement | null>(frames.assets.length).fill(null)
  );

  const containerScroll = useScroll({
    target: containerRef,
    layoutEffect: false,
    offset: ["start", "end start"],
  });

  const indexMotionValue = useTransform(
    containerScroll.scrollYProgress,
    [0, 0.65],
    [0, frames.assets.length - 1]
  );

  const [index, setIndex] = useState(0);

  useMotionValueEvent(indexMotionValue, "change", (v) =>
    setIndex(Math.ceil(v))
  );

  const opacityScroll = useScroll({
    layoutEffect: false,
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    opacityScroll.scrollYProgress,
    [0, 0.08, 0.65, 0.95],
    [0.2, 1, 1, 0.03]
  );

  useEffect(() => {
    imagesRef.current.forEach((img) => img && (img.style.display = "none"));

    const target = imagesRef.current[index];

    if (target) {
      target.style.display = "block";
    }
  }, [index]);

  const fadeInScroll = useScroll({
    target: containerRef,
    layoutEffect: false,
    offset: ["start end", "start"],
  });

  const y = useTransform(
    fadeInScroll.scrollYProgress,
    [0, 1],
    [-elemSize.height * 0.2, 0]
  );

  return (
    <motion.div
      ref={elemSize.ref}
      style={{ opacity }}
      className="sticky top-0 -z-10 h-screen overflow-hidden"
    >
      <motion.div style={{ y }} className="relative h-screen w-screen">
        {useMemo(
          () =>
            frames.assets.map((img, i) => (
              <Image
                key={img.id}
                ref={(ref) => (imagesRef.current[i] = ref)}
                src={img.p}
                alt=""
                className="hidden object-cover"
                fill
              />
            )),
          []
        )}
      </motion.div>
    </motion.div>
  );
};

export default WhyImage;
