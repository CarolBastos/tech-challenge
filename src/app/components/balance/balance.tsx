import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { User } from '@/app/interfaces';
import "./balance.scss";

interface BalanceProps {
  user: User | null; 
}

const Balance: React.FC<BalanceProps> = ({ user }) => {
  const [isBalanceVisible, setIsBalanceVisible] = useState<boolean>(true);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  const formatBalance = (balance: number) => {
    return balance.toFixed(2).replace('.', ',');
  };

  return (
    <div className="balance rounded-lg p-8 grid grid-cols-2 gap-4">
      <div className="col-span-1">
        {user ? (
          <h1 className="balance__title text-white text-[25px] font-semibold">
            Olá, {user.name?.split(' ')[0]}! :)
          </h1>
        ) : (
          <p>Carregando...</p>
        )}
        <h2 className="balance__title text-white text-[13px] font-normal pt-6">
          Quinta-feira, 08/09/2022
        </h2>
      </div>
      <div className="col-span-1 balance__container-secondary content-center">
        <div className="balance__box pb-4 border-b-2 w-[180px] flex items-center space-x-2">
          <p className="text-white text-xl font-semibold pr-[25px]">Saldo</p>
          {isBalanceVisible ? (
            <EyeIcon
              className="w-6 h-6 balance__icon-open cursor-pointer"
              onClick={toggleBalanceVisibility}
            />
          ) : (
            <EyeOffIcon
              className="w-6 h-6 balance__icon-closed cursor-pointer"
              onClick={toggleBalanceVisibility}
            />
          )}
        </div>

        <p className="text-white mt-4 pb-2 text-[16px] font-normal">
          Conta Corrente
        </p>
        {isBalanceVisible ? (
          <p className="text-white text-[31px] font-normal">
            R$ {user ? formatBalance(user.balance ?? 0) : 'Saldo não disponível'}
          </p>
        ) : (
          <p className="text-white text-[31px] font-normal">******</p>
        )}
      </div>
    </div>
  );
};

export default Balance;

