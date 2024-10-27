"use client"

import React, { useState } from "react";
import WelcomeHeader from "../header/welcome-header";
import WelcomeFooter from "../footer/welcome-footer";
import Image from "next/image";
import WelcomeCard from "../card/WelcomeCard";
import { LoginForm } from "../login/LoginForm";
import { UserRegisterForm } from "../user-register-form/UserRegisterForm";

const WelcomeLayout: React.FC = ({
}) => {
  const [viewLoginForm, setViewLoginForm] = useState(false);
  const [viewUserRegisterForm, setUserRegisterForm] = useState(false);

  return (
    <div>
      <WelcomeHeader onViewLoginForm={() => setViewLoginForm(true)} onViewUserRegisterForm={() => setUserRegisterForm(true)}/>
        <main className="welcome-layout-main w-full bg-gradient-to-b from-primary-color to-light">
      
          <div className="max-w-sm flex flex-col items-center mx-auto py-20 gap-10 md:max-w-md lg:max-w-lg lg:px-6">
            <div className="flex flex-col items-center gap-10 w-full lg:flex-row">
              <h1 className="text-black text-center font-semibold text-xl md:text-2xl lg:w-full lg:text-left lg:max-w-hero">
                Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!
              </h1>
              <Image
                src="/images/hero-image.svg"
                alt="ByteBank logo"
                width={312}
                height={40}
                className="md:w-full lg:w-full lg:h-96"
              />
              <div className="w-full flex gap-6 md:hidden">
                <button className="w-full bg-black text-white py-4 rounded-lg">Abrir conta</button>
                <button onClick={() => console.log(true)} className="w-full border-2 border-black text-black py-4 rounded-lg ">Já tenho conta</button>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <h2 className="text-black text-center font-semibold text-lg md:text-xl">
                Vantagens do nosso banco:
              </h2>
              <div className="flex flex-col gap-10 px-4 md:px-0 md:grid grid-cols-2 lg:grid-cols-4">
                <WelcomeCard
                  cardImage="/images/icone-presente.svg"
                  cardAltImage="Ícone de presente"
                  cardTitle="Conta e cartão gratuitos"
                  cardText="Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção."
                ></WelcomeCard>
                <WelcomeCard
                  cardImage="/images/icone-saque.svg"
                  cardAltImage="Ícone de saque bancário"
                  cardTitle="Saques sem custo"
                  cardText="Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h."
                ></WelcomeCard>
                <WelcomeCard
                  cardImage="/images/icone-pontos.svg"
                  cardAltImage="Ícone de estrela, representando pontuação"
                  cardTitle="Programa de pontos"
                  cardText="Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!"
                ></WelcomeCard>
                <WelcomeCard
                  cardImage="/images/icone-dispositivos.svg"
                  cardAltImage="Ícone de dispositivos tecnológicos"
                  cardTitle="Seguro Dispositivos"
                  cardText="Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica."
                ></WelcomeCard>
              </div>
            </div>
          </div>
        </main>
        <LoginForm viewLoginForm={viewLoginForm} onClose={() => setViewLoginForm(false)}/>
        <UserRegisterForm viewUserRegisterForm={viewUserRegisterForm} onClose={() => setUserRegisterForm(false)}/>
      <WelcomeFooter />
    </div>
  );
}
  

export default WelcomeLayout;
