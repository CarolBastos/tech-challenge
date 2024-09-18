import React from 'react';
import Header from "../../components/header/header";
import Tabs from "../../components/tab/tab";
import Balance from "../../components/balance/balance";
import NewTransaction from "../../components/new-transaction/new-transaction";

import  "./layout.scss";
import useAccount from '@/hooks/useAccount';

const LoggedInLayout: React.FC = () => {
  const { user } = useAccount();

  return (
    <div>
      <Header userName={user?.name} />
      <main className="main-logged bg-soft-green h-[100vh] w-full"> 
        <section className="main-logged__section pt-6 flex justify-center items-center h-screen">
          <div className="main-logged__side-menu w-[180px] h-full bg-menu-gray rounded-lg">
            <Tabs />
          </div>

          <div className="main-logged__main w-[690px] h-full mx-6">
            <Balance user={user} />
            <NewTransaction />
          </div>

          <div className="main-logged__bank-statement w-[282px] h-full bg-menu-gray">
            <p>Extrato</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LoggedInLayout;