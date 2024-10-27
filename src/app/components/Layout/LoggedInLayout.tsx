import React from 'react';
import Header from "../../components/header/header";
import Tabs from "../../components/tab/tab";
import Balance from "../../components/balance/balance";
import NewTransaction from "../../components/new-transaction/new-transaction";


import "./layout.scss";
import useAccount from '@/hooks/useAccount';

const LoggedInLayout: React.FC = () => {
  const { user } = useAccount();

  return (
    <div>
      <Header userName={user?.name} />
      <main className="w-full bg-soft-green">
        <section className="max-w-sm flex flex-col mx-auto pt-6 md:max-w-md gap-8 lg:max-w-lg lg:flex-row lg:px-6">
          <Tabs />

          <div className="w-full">
            <Balance user={user} />
            <NewTransaction />
          </div>

          <div className="lg:w-[31.375rem]">
            <p>Extrato</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LoggedInLayout;