import Link from "next/link";
import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container flex justify-between items-center">
        <div className="ml-auto flex items-center">
          <span className="text-[13px] font-semibold text-white mr-[40px]">
            Joana da Silva Oliveira
          </span>
          <img
            src="/images/user-icon.svg"
            alt="User Icon"
            className="w-[40px] h-[40px]"
          />
        </div>
      </div>
    </header>
  );
}
