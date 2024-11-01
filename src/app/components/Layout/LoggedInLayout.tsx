"use client"

import React, { useEffect, useState } from 'react';
import Header from "../../components/header/header";
import Navbar from "../navbar/navbar";
import Balance from "../../components/balance/balance";
import NewTransaction from "../../components/new-transaction/new-transaction";

import  "./layout.scss";
import { statement } from "../../../mocks/statement";
import useAccount from '@/hooks/useAccount';
import Image from 'next/image';
import ClientStatement from '../userStatement/userStatement';
import TabletNavbar from '../navbar/tabletNavbar';
import { Transaction } from '@/app/interfaces';

const LoggedInLayout: React.FC = () => {
  const { user, setUser } = useAccount();
  const [transactions, setTransactions] = useState(statement?.transactions.slice().reverse());

  // Monitora as mudanças no `statement` e atualiza `transactions`
    useEffect(() => {
        setTransactions(statement?.transactions.slice().reverse());
    }, [statement]);

  const updateBalance = (transactionAmount: number): void => {
    if (user) {
      setUser({ ...user, balance: transactionAmount });
    }
  };

  const updateStatement = (transaction: Transaction): void => {
    if (transactions) {
      setTransactions(prevTransactions => [transaction, ...prevTransactions]);
    }
  };

  return (
    <div>
      <Header userName={user?.name} />
      <main className="main-logged bg-soft-green h-[100vh] w-full"> 
        <TabletNavbar />
        <section className="main-logged__section pt-6 flex justify-center items-start h-screen">
          <div className="main-logged__side-menu">
            <Navbar />
          </div>

          <div className="main-logged__main w-[690px] h-full mx-6">
            <Balance user={user} />
            <NewTransaction updateBalance={updateBalance} updateStatement={updateStatement}balance={user ? user.balance : 0}/>
          </div>

          <div className="main-logged w-[282px] px-6 py-8 bg-menu-gray">
            <div className='flex gap-12 items-center justify-between mb-6'>
              <div className='font-bold text-xl'>
                Extrato
              </div>
              <div className='flex justify-between gap-4'>
                <button className='flex items-center justify-center rounded-full bg-sky-900 h-10 w-10'>
                 <Image src="/images/pencil.svg" alt="imagem" width={24} height={36}/>
                </button>
                <button className='flex items-center justify-center rounded-full bg-sky-900 h-10 w-10'>
                 <Image src="/images/trash.svg" alt="imagem" width={24} height={36}/>
                </button>
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              <ClientStatement transactions={transactions}/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LoggedInLayout;