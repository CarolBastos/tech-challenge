import Link from "next/link";
import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="container mx-auto flex justify-between items-center">
        <div className="ml-auto flex items-center space-x-2">
          <span className="text-lg font-medium text-white mr-[40px]">
            Joana da Silva Oliveira
          </span>
          <img
            src="/user-icon.svg"
            alt="User Icon"
            className="w-[40px] h-[40px]"
          />
        </div>
      </div>
    </header>
  );
}
