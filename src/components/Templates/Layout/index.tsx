import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <main className="">
      {/* <Header /> */}
      <div className="">
        <div>{children}</div>
      </div>
      {/* <Footer /> */}
    </main>
  );
}