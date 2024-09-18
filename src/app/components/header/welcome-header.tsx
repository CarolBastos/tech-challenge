import "./header.scss";
import Image from "next/image";
import Button from "../button/button";

export default function WelcomeHeader() {
  return (
    <header className="welcome-header bg-black text-white px-10 py-8 flex items-center">
      <div className="w-full flex flex-row-reverse items-center gap-10 md:flex-row">
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
        <nav className="">
          <ul className="hidden md:flex items-center gap-4 inline">
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Serviços</a></li>
          </ul>
        </nav>
      </div>
    </header >
  );
}
