"use client";

import Image, { type ImageProps } from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";

type CarouselProps = {
  images: ImageProps["src"][];
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const constraintsRef = useRef(null);

  return (
    <>
      <div className="overflow-hidden">
        <div ref={constraintsRef} className="w-full">
          <motion.ul
            drag="x"
            dragConstraints={constraintsRef}
            className="flex w-max cursor-pointer gap-[2vw] px-[6vw] pb-[8vw] pt-[8vw] sm:px-[8vw] sm:pt-0"
          >
            {images.map((image, i) => (
              <li key={i} className="relative h-[80vh] w-[80vw]">
                <Image
                  src={image}
                  draggable={false}
                  alt=""
                  className="w-full rounded-md object-cover"
                  sizes="80vw"
                  fill
                />
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </>
  );
};

export default Carousel;
