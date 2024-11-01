import { useState } from "react";
import "./tab.scss";

export default function Tabs() {
  const [activeLink, setActiveLink] = useState("home");

  const handleClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="hidden md:inline bg-transparent font-inter text-black text-center rounded-t-lg lg:w-[24rem]">
      <nav className="flex w-full lg:flex-col lg:p-8 lg:bg-neutral-200 lg:rounded-t-lg lg:h-full">
        <a
          href="#"
          className={activeLink === "home" ? "w-full py-4 text-tertiary-500 font-semibold border-b-2 border-tertiary-500 lg:pt-0" : "w-full py-4 lg:border-b lg:border-black lg:pt-0"}
          onClick={() => handleClick("home")}
        >
          Início
        </a>
        <a
          href="#"
          className={activeLink === "transfers" ? "w-full py-4 text-tertiary-500 font-semibold border-b-2 border-tertiary-500" : "w-full py-4 lg:border-b lg:border-black"}
          onClick={() => handleClick("transfers")}
        >
          Transferências
        </a>
        <a
          href="#"
          className={activeLink === "investments" ? "w-full py-4 text-tertiary-500 font-semibold border-b-2 border-tertiary-500" : "w-full py-4 lg:border-b lg:border-black"}
          onClick={() => handleClick("investments")}
        >
          Investimentos
        </a>
        <a
          href="#"
          className={activeLink === "services" ? "w-full py-4 text-tertiary-500 font-semibold md:border-b-2 md:border-tertiary-500 lg:border-none" : "w-full py-4"}
          onClick={() => handleClick("services")}
        >
          Outros Serviços
        </a>
      </nav>
    </div>
  );
}
