import * as React from "react";
import Head from "next/head";
import Script from "next/script";
import Footer from "../../Molecules/Footer";
import Header from "../../Molecules/Header";
import { ThemeProvider } from "../Theme/theme-provider";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <>
      <Head>
        <title>ghaly.dev</title>
        <link
          rel="icon"
          href="https://user-images.githubusercontent.com/60167960/229319877-77600973-dc1f-4b2a-b0da-ed38a67eec0e.png"
        />
        <meta name="description" content="Created by Rachmat Ghaly." />
      </Head>
      <Script
        src="https://kit.fontawesome.com/0ae515efac.js"
        crossOrigin="anonymous"
      />

      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <main>
          <div className="h-2 bg-gradient-to-r from-[rgb(0,218,210)] to-[rgb(61,224,102)]"></div>
          <div className="max-w-[76rem] mx-auto">
            <Header />
            <div>{children}</div>
            <Footer />
          </div>
        </main>
      </ThemeProvider>
    </>
  );
};

export default Layout;
