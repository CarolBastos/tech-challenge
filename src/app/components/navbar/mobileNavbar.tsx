import { SetStateAction, useState } from "react";
import { navItems } from "./config";
import Image from "next/image";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(navItems[0].link);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (link: SetStateAction<string>) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <div>
      <a
        href="/welcome"
        onClick={(e) => {
          e.preventDefault();
          toggleMenu();
        }}
        className="inline-block md:hidden lg:hidden"
      >
        <Image
          src="/images/icone-menu.svg"
          alt="ByteBank logo"
          width={32}
          height={32}
        />
      </a>

      {isOpen && (
        <div className="fixed top-0 left-0 w-[210px] h-auto bg-soft-green shadow-lg z-50 flex flex-col items-center pl-5 pr-5 pb-7 pt-10">
          <button
            onClick={toggleMenu}
            className="absolute top-2 right-2 text-tertiary-color hover:text-gray-800 text-2xl"
          >
            ✕
          </button>
          <nav className="flex flex-col items-center space-y-4 w-full">
            {navItems.map((item, index) => (
              <a
                key={item.link}
                href={`#${item.link}`}
                className={`block py-2 px-4  text-md text-black hover:bg-gray-200 text-center w-full ${
                  activeLink === item.link
                    ? "text-tertiary-color font-bold border-b-2 border-tertiary-color lg:pt-4"
                    : "text-black font-normal"
                } ${
                  index !== navItems.length - 1
                    ? "border-b border-black"
                    : ""
                }`}
                onClick={() => handleClick(item.link)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
