import "./header.scss";

import Image from "next/image";
import Menu from "../menu/menu";
import { useState } from "react";

interface IWelcomeHeader {
  onViewLoginForm: (value: boolean) => void;
  onViewUserRegisterForm: (value: boolean) => void;
}

export default function WelcomeHeader({
  onViewLoginForm,
  onViewUserRegisterForm,
}: IWelcomeHeader) {
  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="w-full bg-black text-sm text-white font-inter">
      <div className="max-w-sm flex flex-row-reverse items-center justify-between mx-auto py-6 md:flex-row md:max-w-md lg:max-w-lg lg:px-6">
        <div className="flex items-center gap-10">
          <a href="/welcome" className="hidden md:inline lg:hidden">
            <Image
              src="/images/byte-bank-mini-logo.svg"
              alt="ByteBank logo"
              width={40}
              height={40}
            />
          </a>
          <a href="/welcome" className="inline-block md:hidden lg:inline-block">
            <Image
              src="/images/byte-bank-logo.svg"
              alt="ByteBank logo"
              width={145.6}
              height={32}
            />
          </a>
          <nav>
            <ul className="hidden md:flex items-center gap-4 inline text-md text-tertiary-500 font-semibold">
              <li>
                <a href="/about">Sobre</a>
              </li>
              <li>
                <a href="/services">Serviços</a>
              </li>
            </ul>
          </nav>
        </div>
        <button
          type="button"
          onClick={openMenu}
          className="inline-block md:hidden lg:hidden"
        >
          <Image
            src="/images/icone-menu.svg"
            alt="Menu"
            width={32}
            height={32}
          />
        </button>
        <div className="hidden md:flex flex gap-4">
          <button
            onClick={() => onViewUserRegisterForm(true)}
            className="bg-tertiary-500 text-white p-3.5 rounded-lg"
          >
            Abrir conta
          </button>
          <button
            onClick={() => onViewLoginForm(true)}
            className="border-2 border-tertiary-500 text-tertiary-500 font-semibold p-3.5 rounded-lg"
          >
            Já tenho conta
          </button>
        </div>
      </div>
      <Menu isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
}
