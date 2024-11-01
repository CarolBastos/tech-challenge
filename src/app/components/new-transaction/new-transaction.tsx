import { useState } from "react";
import Image from "next/image";
import "./new-transaction.scss";

import { SelectOption, TransactionInput } from "./index";
import Button from "../../components/button/button";

export default function NewTransaction() {
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
  };

  const handleClick = () => {
    console.log("clicou no botão")
  };

  return (
    <div className="relative w-full font-inter bg-neutral-300 p-8 rounded-lg h-[39.5625rem]">
      <h2 className="text-xl text-tertiary-300 font-semibold z-20">
        Nova transação
      </h2>

      <div className="relative">
        <button
          type="button"
          className="w-full flex justify-between items-center text-left text-sm p-2 bg-neutral-100 border border-primary-500 rounded-lg z-50"
          onClick={handleToggle}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          {selectedValue || "Selecione o tipo de transação"}
          <Image
            className={`ml-2 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
              }`}
            priority
            src="/images/icone-seta.svg"
            height={14}
            width={14}
            alt="Seta"
          />
        </button>
        {isOpen && (
          <ul className="absolute w-full bg-neutral-100 rounded-lg border border-primary-500 z-30">
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
        className="new-transaction__transaction-input z-20"
        label="Valor da Transação"
        value={transactionValue}
        onChange={handleChange}
      />

      <div className="mt-8 z-20">
        <Button className="new-transaction__transaction-button" text="Concluir transação" onClick={handleClick} />
      </div>
      <Image
        src="/images/newtransaction-illustration.svg"
        alt="ByteBank logo"
        width={32}
        height={32}
        className='absolute bottom-6 left-6 w-[16.5rem] z-10 md:w-[17.6875rem] lg:hidden'
      />
      <Image
        src="/images/newtransaction-bg-squares-1.svg"
        alt="ByteBank logo"
        width={32}
        height={32}
        className='hidden w-[9.125rem] absolute z-0  top-0 left-0'
      />
      <Image
        src="/images/newtransaction-bg-squares-1.svg"
        alt="ByteBank logo"
        width={32}
        height={32}
        className='w-[9.125rem] absolute z-0 bottom-0 right-0'
      />
    </div>
  );
}
