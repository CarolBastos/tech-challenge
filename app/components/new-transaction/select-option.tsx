import React from 'react';

interface SelectOptionProps {
  value: string;
  onClick: (value: string) => void;
  children: React.ReactNode;
}

const SelectOption: React.FC<SelectOptionProps> = ({ value, onClick, children }) => (
  <li>
    <button
      className="block w-full text-gray-700 py-2 px-3 text-left hover:bg-gray-200 hover:text-gray-900"
      onClick={() => onClick(value)}
    >
      {children}
    </button>
  </li>
);

export default SelectOption;
