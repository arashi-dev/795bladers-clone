import React from "react";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import "~/styles/globals.css";
import Layout from "./_components/Layout";
import clsx from "clsx";
import { avenir } from "./_fonts";
import LocaleProvider from "./_components/Locale";

type LayoutProps = React.PropsWithChildren<{
  params: {
    locale: string;
  };
}>;

const _Layout: React.FC<LayoutProps> = ({ children, params }) => {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang="en">
      <body
        className={clsx(
          "no-scrollbar bg-neutral-950 font-avenir",
          avenir.variable
        )}
      >
        <LocaleProvider locale={locale}>
          <Layout>{children}</Layout>
        </LocaleProvider>
      </body>
    </html>
  );
};

export default _Layout;
