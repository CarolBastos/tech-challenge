import React from 'react';
import "./new-transaction.scss";

interface SelectOptionProps {
  value: string;
  onClick: (value: string) => void;
  children: React.ReactNode;
}

const SelectOption: React.FC<SelectOptionProps> = ({ value, onClick, children }) => (
  <li className="select-option">
    <button
      className="select-option__button block w-full text-gray-700 py-2 px-3 text-left"
      onClick={() => onClick(value)}
    >
      {children}
    </button>
  </li>
);

export default SelectOption;
