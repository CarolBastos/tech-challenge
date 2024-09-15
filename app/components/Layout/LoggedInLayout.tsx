import React from 'react';
import Header from "../../components/header/header";
import Tabs from "../../components/tab/tab";
import Balance from "../../components/balance/balance";
import NewTransaction from "../../components/new-transaction/new-transaction";

import  "./layout.scss";

const LoggedInLayout: React.FC<{}> = () => (
  <div>
    <Header />
    <main className="main-logged"> 
      <section className="main-logged__section pt-6 flex justify-center items-center h-screen">
        <div className="main-logged__side-menu w-[180px] h-full">
          <Tabs />
        </div>

        <div className="main-logged__main w-[690px] h-full">
          <Balance />
          <NewTransaction />
        </div>

        <div className="main-logged__bank-statement w-[282px] h-full">
          <p>Extrato</p>
        </div>
      </section>
    </main>
  </div>
);

export default LoggedInLayout;