import React from "react";
import AppCarousel from "~/app/[locale]/_components/Carousel";

import CarouselImage1 from "./1.jpg";
import CarouselImage2 from "./2.jpg";
import CarouselImage3 from "./3.jpg";

const Carousel: React.FC = () => {
  return (
    <div>
      <AppCarousel images={[CarouselImage1, CarouselImage2, CarouselImage3]} />
    </div>
  );
};

export default Carousel;
