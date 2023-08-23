"use client";

import React from "react";
import clsx from "clsx";
import Link from "next-intl/link";
import { usePathname } from "next-intl/client";
import { useAppLocale } from "~/app/[locale]/_components/Locale";

type LocaleItemProps = React.PropsWithChildren<{
  targetLocale: string;
}>;

const LocaleItem: React.FC<LocaleItemProps> = ({ targetLocale, children }) => {
  const { locale } = useAppLocale();
  const pathname = usePathname();

  return (
    <Link
      href={pathname}
      locale={targetLocale}
      className={clsx(
        "block px-5 py-[0.625rem] transition duration-200 hover:opacity-100",
        {
          "opacity-60": targetLocale !== locale,
        }
      )}
    >
      {children}
    </Link>
  );
};

export default LocaleItem;
