import { SetStateAction, useState } from "react";
import "./navbar.scss";
import { navItems } from "./config";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(navItems[0].link);

  const handleClick = (link: SetStateAction<string>) => {
    setActiveLink(link);
  };

  return (
    <div className="navbar lg:flex lg:flex-col lg:bg-menu-gray text-center lg:rounded-t-lg ">
      <nav className="flex flex-col w-full p-8 bg-menu-gray rounded-t-lg">
        {navItems.map((item, index) => (
          <a
            key={item.link}
            href={`#${item.link}`}
            className={`w-full py-4 ${
              activeLink === item.link
                ? 'text-tertiary-color font-semibold border-b-2 border-tertiary-color lg:pt-4'
                : 'lg:border-b lg:border-black lg:pt-4'
            } ${index === navItems.length - 1 ? 'lg:border-none' : ''}`}
            onClick={() => handleClick(item.link)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
