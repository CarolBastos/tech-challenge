import { useState } from "react";
import "./tab.scss";

export default function Tabs() {
  const [activeLink, setActiveLink] = useState("home");

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className={`tab relative`}>
      <nav className={`tab__nav`}>
        <a
          href="#"
          className={activeLink === "home" ? "active" : ""}
          onClick={() => handleClick("home")}
        >
          Início
        </a>
        <a
          href="#"
          className={activeLink === "transfers" ? "active" : ""}
          onClick={() => handleClick("transfers")}
        >
          Transferências
        </a>
        <a
          href="#"
          className={activeLink === "investments" ? "active" : ""}
          onClick={() => handleClick("investments")}
        >
          Investimentos
        </a>
        <a
          href="#"
          className={activeLink === "services" ? "active" : ""}
          onClick={() => handleClick("services")}
        >
          Outros Serviços
        </a>
      </nav>
    </div>
  );
}
