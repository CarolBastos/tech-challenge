import React from 'react';
import "./new-transaction.scss";

interface TransactionInputProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TransactionInput: React.FC<TransactionInputProps> = ({ label, value, onChange }) => (
  <div className="transaction-input">
    <label className="transaction-input__label mt-8 pb-[16px]" htmlFor="transactionValue">
      {label}
    </label>
    <input
      id="transactionValue"
      type="text"
      className="transaction-input__input-field text-[16px]"
      value={value}
      onChange={onChange}
      placeholder="0,00"
    />
  </div>
);

export default TransactionInput;
