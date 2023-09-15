import { useTranslations } from "next-intl";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import React from "react";

type ContentProps = {
  imageSrc: ImageProps["src"];
};

const Content: React.FC<ContentProps> = ({ imageSrc }) => {
  const t = useTranslations("Products");

  return (
    <div className="flex flex-1 flex-col self-stretch p-[2vw] opacity-20 transition-all duration-700 hover:opacity-100">
      <p className="h-max w-3/5 flex-none text-[3vw]/[1.2] font-bold text-neutral-200">
        {t("slogan")}
      </p>

      <div className="relative mx-auto flex w-full flex-1 flex-col items-center justify-center self-stretch">
        <div className="max-h-[70vh]">
          <Image src={imageSrc} alt="" className="max-w-full" />
        </div>
      </div>
    </div>
  );
};

type ItemProps = {
  href: string;
  model: string;
  price: number;
} & ContentProps;

const Item: React.FC<ItemProps> = ({ href, model, price, imageSrc }) => {
  const t = useTranslations("Products");

  return (
    <li className="flex-1">
      <Link
        href={href}
        className="flex h-screen max-h-screen w-full flex-col justify-between border border-l-0 border-zinc-800"
      >
        <Content imageSrc={imageSrc} />

        <div className="flex h-[4.5rem] flex-none items-center justify-between border-t border-zinc-800 -tracking-[.02em]">
          <div className="flex w-full items-center justify-between px-6">
            <h3 className="text-sm font-bold text-neutral-200">
              795 Blade<sup>RS</sup> {model}
            </h3>
            <p className="text-xs text-neutral-400">{price.toFixed(2)}€</p>
          </div>

          <div className="flex h-full items-center border-l border-zinc-800 px-10 text-neutral-200">
            <p className="text-sm font-bold uppercase tracking-widest">
              {t("discover")}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Item;
