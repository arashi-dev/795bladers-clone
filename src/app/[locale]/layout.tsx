import React from "react";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import "~/styles/globals.css";
import Layout from "./_components/Layout";
import LocaleProvider from "./_components/Locale";
import Body from "./_components/Layout/Body";

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
      <Body>
        <LocaleProvider locale={locale}>
          <Layout>{children}</Layout>
        </LocaleProvider>
      </Body>
    </html>
  );
};

export default _Layout;
