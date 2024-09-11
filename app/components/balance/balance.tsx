import { useState } from "react";
import { EyeIcon } from "@heroicons/react/solid";
import "./balance.scss";

export default function Balance() {
  const [activeLink, setActiveLink] = useState("home");

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="balance rounded-lg p-6 grid grid-cols-2 gap-4">
      <div className="col-span-1">
        <h1 className="balance__title text-white text-[25px] font-semibold">
          Olá, Joana! :)
        </h1>
        <h2 className="balance__title text-white text-[13px] font-normal pt-6">
          Quinta-feira, 08/09/2022
        </h2>
      </div>
      <div className="col-span-1 ">
        <div className="flex items-center space-x-2">
          <span className="text-white">Saldo</span>
          <EyeIcon className="w-6 h-6" />
        </div>

        <span className="text-white">Conta Corrente</span>
        <p className="text-white">R$ 2.500,00</p>
      </div>
    </div>
  );
}
