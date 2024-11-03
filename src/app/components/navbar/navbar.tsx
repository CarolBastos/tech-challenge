import { SetStateAction, useState } from "react";
import { navItems } from "./config";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(navItems[0].link);

  const handleClick = (link: SetStateAction<string>) => {
    setActiveLink(link);
  };

  return (
    <div className="navbar hidden md:inline lg:flex lg:flex-col lg:bg-neutral-100 text-center lg:rounded-lg ">
      <nav className="flex lg:flex-col w-full p-8 bg-neutral-100 rounded-lg">
        {navItems.map((item, index) => (
          <a
            key={item.link}
            href={`#${item.link}`}
            className={`w-full py-4 ${
              activeLink === item.link
                ? 'text-tertiary-500 font-semibold border-b-2 border-tertiary-500 lg:pt-4'
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
