import { useEffect, useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import "./balance.scss";
import { User } from "@/app/interfaces";

export default function Balance() {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch('/api/account');
        
        if (!response.ok) {
          throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data: User = await response.json();
        setUser(data);
      } catch (error) {
        setError('Erro ao buscar dados da conta.');
        console.error('Erro ao buscar dados da conta:', error);
      }
    }

    fetchUserData();
  }, []);

  return (
    <div className="balance rounded-lg p-8 grid grid-cols-2 gap-4 ">
      <div className="col-span-1">
      {user ? (
        <h1 className="balance__title text-white text-[25px] font-semibold">
          Olá, {user.name}! :)
        </h1>) :  
        (
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
          <p className="text-white text-[31px] font-normal">R$ {user ? user.balance.toFixed(2).replace('.', ',') : 'Saldo não disponível'}</p>
        ) : (
          <p className="text-white text-[31px] font-normal">******</p>
        )}
      </div>
    </div>
  );
}
