import React from "react";
import Text from "../Text";
import { useTranslations } from "next-intl";
import List from "./List";
import { type ImageProps } from "next/image";
import Item from "./List/Item";

import ImageIconic from "./product-iconic.jpg";
import ImageGrayNardo from "./product-grey-nardo.jpg";
import ImageRed from "./product-red-b1.jpg";
import ImagePurple from "./product-purple-b1.jpg";
import ImageBlack from "./product-black-b1.jpg";

const Products: React.FC = () => {
  const t = useTranslations("Products");
  const items: {
    id: number;
    href: string;
    model: string;
    price: number;
    imageSrc: ImageProps["src"];
  }[] = [
    {
      id: 1,
      href: "#",
      price: 5390,
      model: "Iconic",
      imageSrc: ImageIconic,
    },
    {
      id: 2,
      href: "#",
      price: 12990,
      model: "Grey Nardo Glossy",
      imageSrc: ImageGrayNardo,
    },
    {
      id: 3,
      href: "#",
      price: 12990,
      model: "Red Chrome Satin",
      imageSrc: ImageRed,
    },
    {
      id: 4,
      href: "#",
      price: 9790,
      model: "Thunder Blue Satin",
      imageSrc: ImagePurple,
    },
    {
      id: 5,
      href: "#",
      price: 8490,
      model: "Pro Team Black Mat / Glossy",
      imageSrc: ImageBlack,
    },
  ];

  return (
    <div>
      <Text text={t("text")} />
      <List>
        {items.map(({ id, href, model, price, imageSrc }) => (
          <Item
            key={id}
            href={href}
            model={model}
            price={price}
            imageSrc={imageSrc}
          />
        ))}
      </List>
    </div>
  );
};

export default Products;
