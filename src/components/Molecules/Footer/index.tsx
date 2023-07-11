import { footerConfig } from "@/src/config/footer-config";
import React from "react";
import { ButtonIconFooter } from "../../Atoms/Buttons/Button-Footer";

export default function Footer() {
  return (
    <footer className="pt-8 pb-2 px-5 lg:px-0">
      <div className="mx-auto">
        <hr className="my-6 border-slate-400" />
        <div className="flex flex-wrap justify-center text-gray-600 dark:text-slate-200 font-ghaly text-center lg:text-left">
          Let&apos;s keep in touch!
        </div>
        <div className="text-center mt-2 mb-10">
          {footerConfig.buttonAttributes.map((attribute, index) => (
            <ButtonIconFooter
              key={index}
              icon={attribute.icon}
              href={attribute.url}
              title={attribute.title}
            />
          ))}
        </div>
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <p className="font-ghaly text-sm text-gray-600 dark:text-slate-200 font-semibold">
              Copyright &copy; 2022 by{" "}
              <span className="hover:text-[#00CFC9]">Rachmat Ghaly</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
