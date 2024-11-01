import { useState } from "react";
import Image from "next/image";
import "./new-transaction.scss";

import { SelectOption, TransactionInput } from "./index";
import Button from "../../components/button/button";
import { Transaction, TypesOfTransaction } from "@/app/interfaces";


interface NewTransactionProps {
  balance: number ;
  updateBalance: (transactionAmount: number) => void;
  updateStatement: (transaction: Transaction) => void;
}

export default function NewTransaction({ updateBalance, updateStatement, balance }: NewTransactionProps) {
  const [selectedValue, setSelectedValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [transactionValue, setTransactionValue] = useState<string>("");
  const [hasError, setHasError] = useState(false);
  const [isValueRequired, setIsValueRequired] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    setHasError(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTransactionValue(value);

    if (value) {
      setIsValueRequired(false);
    }
  };

  function descriptionHandler(description: string): TypesOfTransaction{
    if(description == 'Empréstimo e Financiamento'){
      return TypesOfTransaction.Deposito
    } else if(description == 'DOC/TED'){
      return TypesOfTransaction.Transferencia
    }else{
      return TypesOfTransaction.Deposito
    }
  }

  function replaceCommaWithDot(value: string) {
    return value.replace(/,/g, '.');
  }

  const handleBalance = async () => {
    const newTransactionValue = replaceCommaWithDot(transactionValue);
    const amount = Number(newTransactionValue);

    if (isNaN(amount) || amount <= 0) {
      console.error("Invalid transaction amount");
      return;
    }
      
    const description = descriptionHandler(selectedValue)

    let newBalance: number;
    if (description === TypesOfTransaction.Deposito) { 
      newBalance = balance + amount;
    } else { 
      if (balance >= amount) {
        newBalance = balance - amount; 
      } else {
        newBalance = balance;
        console.log("não foi possivel retirar o saldo", newBalance)
      }
    }

    updateBalance(newBalance);
  }


  const handleClick = async () => {
    if (!selectedValue) {
      setHasError(true);
      return;
    }

    if (!transactionValue) {
      setIsValueRequired(true);
      return; 
    }

    const newTransactionValue = replaceCommaWithDot(transactionValue);
    const amount = Number(newTransactionValue);

    if (isNaN(amount) || amount <= 0) {
      console.error("Invalid transaction amount");
      return;
    }
      const transaction = {
        amount: amount,
        description: descriptionHandler(selectedValue),
        date: new Date().toISOString()
      }
  
      try {
        const response = await fetch("../../api/transaction", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(transaction),
        });
  
        if (response.ok) {
          const newTransaction = await response.json();
          console.log("Transaction created:", newTransaction);
          await handleBalance();
          setSelectedValue("");
          setTransactionValue("");
          updateStatement(newTransaction);
    
        } else {
          const errorData = await response.json();
          console.error("Error:", errorData.error);
        }
      } catch (error) {
        console.error("Network error:", error);
      }
  };

  return (
    <div className="new-transaction rounded-lg p-8 mt-[24px] bg-new-transaction">
      <h2 className="new-transaction__title text-[25px] font-bold mb-[32px]">
        Nova transação
      </h2>

      <div className="new-transaction__select relative w-[355px]">
        <button
          type="button"
          className="w-full text-gray-700 py-2 px-3 text-left flex items-center justify-between"
          onClick={handleToggle}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          {selectedValue || "Selecione o tipo de transação"}
          <Image
            className={`ml-2 transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            priority
            src="/images/icone-seta.svg"
            height={14}
            width={14}
            alt="Seta"
          />
        </button>
        {isOpen && (
          <ul className="new-transaction__select absolute w-full mt-1">
            <SelectOption value="Câmbio de Moeda" onClick={handleSelect}>
              Câmbio de Moeda
            </SelectOption>
            <SelectOption value="DOC/TED" onClick={handleSelect}>
              DOC/TED
            </SelectOption>
            <SelectOption
              value="Empréstimo e Financiamento"
              onClick={handleSelect}
            >
              Empréstimo e Financiamento
            </SelectOption>
          </ul>
        )}
        
      </div>
      {hasError && <p className="text-red-500 mt-2">Selecione um tipo de transação.</p>}

      <TransactionInput
        className="new-transaction__transaction-input"
        label="Valor da Transação"
        value={transactionValue}
        onChange={handleChange}
      />
      {isValueRequired && (
        <p className="text-red-500 text-sm mt-1">
          Este campo é obrigatório.
        </p>
      )}

      <div className="mt-8">
        <Button className="new-transaction__transaction-button" text="Concluir transação" onClick={handleClick} />
      </div>
    </div>
  );
}
