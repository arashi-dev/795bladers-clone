import React from "react";
import Photo from "./Photo";

import Image1 from "./1.jpg";
import Image2 from "./2.jpg";
import Image3 from "./3.jpg";

const Photos: React.FC = () => {
  return (
    <div className="relative flex h-max flex-col">
      <Photo imageSrc={Image1} rotation={-12} />
      <Photo imageSrc={Image2} rotation={12} />
      <Photo imageSrc={Image3} rotation={14} />
    </div>
  );
};

export default Photos;
