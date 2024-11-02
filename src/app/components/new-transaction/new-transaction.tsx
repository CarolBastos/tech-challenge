import { useState } from "react";
import Image from "next/image";

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
    <div className="relative w-full flex flex-col items-center gap-6 font-inter bg-neutral-300 p-8 rounded-lg h-[39.5625rem] md:h-[29.875rem] md:items-start">
      <h2 className="text-xl text-center text-tertiary-300 font-semibold z-20">
        Nova transação
      </h2>

      <div className="relative w-full">
        <button
          type="button"
          className="relative w-full flex justify-between items-center text-left text-sm p-3 bg-neutral-100 border border-primary-500 rounded-lg z-40 md:max-w-[20.9375rem]"
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
          <ul className="absolute w-full bg-neutral-100 -mt-4 rounded-lg border border-primary-500 z-30 md:max-w-[20.9375rem]">
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
        className="z-20"
        label="Valor da Transação"
        value={transactionValue}
        onChange={handleChange}
      />
      <Button className="max-w-[9rem] md:max-w-[15.625rem] md:w-full z-20" text="Concluir transação" onClick={handleClick} />
      <Image
        src="/images/newtransaction-illustration.svg"
        alt="ByteBank logo"
        width={32}
        height={32}
        className='absolute bottom-6 w-[16.5rem] md:w-[17.6875rem] z-10 max-[767px]:left-6 min-[768px]:right-6 lg:hidden'
      />
      <Image
        src="/images/newtransaction-bg-squares-1.svg"
        alt="ByteBank logo"
        width={32}
        height={32}
        className='w-[9.125rem] absolute top-0 z-0 max-[767px]:left-0 min-[768px]:right-0'
      />
      <Image
        src="/images/newtransaction-bg-squares-1.svg"
        alt="ByteBank logo"
        width={32}
        height={32}
        className='w-[9.125rem] absolute bottom-0 right-0 z-0 md:left-0'
      />
    </div>
  );
}
