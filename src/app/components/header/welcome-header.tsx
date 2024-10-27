import "./header.scss";

import Image from "next/image";

export default function WelcomeHeader() {
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
            <ul className="hidden md:flex items-center gap-4 inline text-md text-tertiary-color font-semibold">
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Serviços</a>
              </li>
            </ul>
          </nav>
        </div>
        <a href="/welcome" className="inline-block md:hidden lg:hidden">
          <Image
            src="/images/icone-menu.svg"
            alt="ByteBank logo"
            width={32}
            height={32}
          />
        </a>
        <div className="hidden md:flex flex gap-4">
          <button className="bg-tertiary-color text-white p-3.5 rounded-lg">
            Abrir conta
          </button>
          <button className="border-2 border-tertiary-color text-tertiary-color font-semibold p-3.5 rounded-lg">
            Já tenho conta
          </button>
        </div>
      </div>
    </header>
  );
}
