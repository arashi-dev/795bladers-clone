"use client";

import React from "react";
import clsx from "clsx";
import { useAppLocale } from "~/app/[locale]/_components/Locale";
import { Link, type Locales, usePathname } from "~/utils/navigation";

type LocaleItemProps = React.PropsWithChildren<{
  targetLocale: Locales;
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
        },
      )}
    >
      {children}
    </Link>
  );
};

export default LocaleItem;
