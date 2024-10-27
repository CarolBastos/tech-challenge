import React from "react";
import Image from "next/image";
import "./header.scss";

interface HeaderProps {
  userName?: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <header className="w-full text-sm text-white bg-primary-color font-inter">
      <div className="max-w-sm flex flex-row-reverse items-center justify-between mx-auto py-7 md:max-w-md md:justify-items-end lg:max-w-lg lg:px-6">
        <div className="flex items-center gap-10">
          <span className="hidden md:inline">
            {userName}
          </span>
          <Image
            src="/images/user-icon.svg"
            alt="User Icon"
            width={40}
            height={40}
          />
        </div>
        <a href="/welcome" className="inline-block md:hidden lg:hidden">
          <Image
            src="/images/icone-menu.svg"
            alt="ByteBank logo"
            width={32}
            height={32}
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
