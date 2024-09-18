import React from "react";
import "./new-transaction.scss";

interface TransactionInputProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string; 
}

const TransactionInput: React.FC<TransactionInputProps> = ({
  label,
  value,
  onChange,
  className
}) => {

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;

    inputValue = inputValue.replace(/[^\d]/g, '');

    if (inputValue.length > 2) {
      const integerPart = inputValue.slice(0, -2);
      const decimalPart = inputValue.slice(-2);
      inputValue = `${parseInt(integerPart, 10)},${decimalPart}`;
    } else if (inputValue.length === 2) {
      inputValue = `0,${inputValue}`;
    } else if (inputValue.length === 1) {
      inputValue = `0,0${inputValue}`;
    }

    const formattedEvent = {
      ...event,
      target: {
        ...event.target,
        value: inputValue,
      },
    };

    onChange(formattedEvent as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className={`transaction-input ${className}`}>
      <label
        className="transaction-input__label mt-8 pb-[16px]"
        htmlFor="transactionValue"
      >
        {label}
      </label>
      <input
        id="transactionValue"
        type="text"
        className="transaction-input__input-field text-[16px]"
        value={value}
        onChange={handleInputChange}
        placeholder="00,00"
      />
    </div>
  );
};

export default TransactionInput;
