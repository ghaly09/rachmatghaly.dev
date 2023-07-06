import React, { ReactNode } from "react";
import Footer from "../../Molecules/Footer";
import Header from "../../Molecules/Header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <main>
      <div className="h-2 bg-gradient-to-r from-[rgb(0,218,210)] to-[rgb(61,224,102)]"></div>
      <div className="max-w-[68rem] mx-auto">
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </main>
  );
}
