import React from "react";

export default function AboutTitle() {
  return (
    <div className="flex flex-col items-center sm:items-start px-5 lg:px-0 mt-20 md:mt-20">
      <h2 className="text-xl lg:text-3xl text-black dark:text-white font-bold">
        About
      </h2>
      <h2 className="text-2xl lg:text-4xl font-bold pb-3 max-w-[280px] text-transparent bg-clip-text color-ghaly">
        Rachmat Ghaly
      </h2>
    </div>
  );
}
