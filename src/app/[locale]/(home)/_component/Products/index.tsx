import React from "react";
import Text from "../Text";
import { useTranslations } from "next-intl";

const Products: React.FC = () => {
  const t = useTranslations("Products");
  return (
    <div>
      <Text text={t("text")} />
    </div>
  );
};

export default Products;
