import { useState } from "react";
import Image from "next/image";
import "./new-transaction.scss";

import { SelectOption, TransactionInput } from "./index";
import Button from "../../components/button/button";
import { TypesOfTransaction } from "@/app/interfaces";
import { user } from "@/mocks/userAccount";

interface NewTransactionProps {
  updateBalance: (transactionAmount: number) => void;
}

export default function NewTransaction({ updateBalance }: NewTransactionProps) {
  const [selectedValue, setSelectedValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [transactionValue, setTransactionValue] = useState<string>("");

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTransactionValue(event.target.value);
    console.log("transactionValue", event.target.value)
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
      newBalance = user[0].balance + amount;
    } else { 
      if (user[0].balance >= amount) {
        newBalance = user[0].balance - amount; 
      } else {
        newBalance = user[0].balance;
        console.log("não foi possivel retirar o saldo", newBalance)
      }
    }

    updateBalance(newBalance);
  }


  const handleClick = async () => {
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

      <TransactionInput
        className="new-transaction__transaction-input"
        label="Valor da Transação"
        value={transactionValue}
        onChange={handleChange}
      />

      <div className="mt-8">
        <Button className="new-transaction__transaction-button" text="Concluir transação" onClick={handleClick} />
      </div>
    </div>
  );
}
