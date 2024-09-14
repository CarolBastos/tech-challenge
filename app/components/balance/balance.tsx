import { useState } from "react";
import { EyeIcon } from "@heroicons/react/solid";
import "./balance.scss";

export default function Balance() {
  const [activeLink, setActiveLink] = useState("home");

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="balance rounded-lg p-6 grid grid-cols-2 gap-4 ">
      <div className="col-span-1">
        <h1 className="balance__title text-white text-[25px] font-semibold">
          Olá, Joana! :)
        </h1>
        <h2 className="balance__title text-white text-[13px] font-normal pt-6">
          Quinta-feira, 08/09/2022
        </h2>
      </div>
      <div className="col-span-1 balance__container-secondary content-center">
        <div className="balance__box pb-4 border-b-2 w-[180px] flex items-center space-x-2">
          <p className="text-white text-xl font-semibold pr-[25px]">Saldo</p>
          <EyeIcon className="w-6 h-6 balance__icon-open" />
        </div>

        <p className="text-white mt-4 pb-2 text-[16px] font-normal">Conta Corrente</p>
        <p className="text-white text-[31px] font-normal">R$ 2.500,00</p>
      </div>
    </div>
  );
}
