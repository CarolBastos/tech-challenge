import { useState } from "react";
import "./tab.scss";
import { navItems } from "./config";

export default function Tabs() {
  const [activeLink, setActiveLink] = useState("home");

  const handleClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="navbar hidden lg:flex lg:flex-col lg:bg-menu-gray text-center lg:rounded-t-lg ">
      <nav className="flex flex-col w-full p-8 bg-menu-gray rounded-t-lg">
        {navItems.map((item, index) => (
          <a
            key={item.link}
            href="#"
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
