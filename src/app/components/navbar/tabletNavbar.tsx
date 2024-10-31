import React, { useState } from 'react';
import { navItems } from './config';


const TabletNavbar = () => {
  const [activeLink, setActiveLink] = useState<string>(navItems[0].link);

  const handleClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar-tablet flex py-4 justify-around">
      {navItems.map((item) => (
        <a
          key={item.link}
          href={`#${item.link}`}
          className={`px-4 py-2 ${
            activeLink === item.link
              ? 'text-tertiary-color font-semibold border-b-2 border-tertiary-color'
              : ''
          }`}
          onClick={() => handleClick(item.link)}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default TabletNavbar;
