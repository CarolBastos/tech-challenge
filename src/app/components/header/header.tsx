import React from "react";
import Image from "next/image";
import "./header.scss";

interface HeaderProps {
  userName?: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <header className="header flex items-center bg-primary-color h-24">
      <div className="header__container container flex justify-between items-center w-full max-w-7xl mx-auto px-10">
        <div className="ml-auto flex items-center">
          <span className="text-[13px] font-semibold text-white mr-[40px]">
            {userName}
          </span>
          <Image
            src="/images/user-icon.svg"
            alt="User Icon"
            width={40}
            height={40}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
