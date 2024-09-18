import React from 'react';
import Image from 'next/image';
import WelcomeLayout from '@/app/components/Layout/WelcomeLayout';
import WelcomeCard from '../components/card/WelcomeCard';

export const metadata = {
  title: "Bytebank",
  description:
    "Descubra o Bytebank, onde você desfruta de uma conta e cartão gratuitos sem custos ocultos. Aproveite saques sem taxas e um programa de pontos que recompensa suas transações diárias. Proteja seus dispositivos com nosso seguro exclusivo e experimente a liberdade financeira que você merece. Escolha Bytebank para uma experiência bancária moderna e sem complicações.",
};

const WelcomePage: React.FC = () => (
  <WelcomeLayout>
    <main className="w-full flex flex-col px-4 py-10 gap-6 bg-gradient-to-b from-primary-color to-light md:px-40">
      <div className="flex flex-col items-center gap-4 w-full lg:flex-row">
        <h1 className="text-black text-center font-semibold lg:w-full text-xl md:text-2xl">Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!</h1>
        <Image
          src="/images/hero-image.svg"
          alt="ByteBank logo"
          width={312}
          height={40}
        />
        <div className="w-full flex gap-6">
          <button className="w-full bg-black text-white p-4 rounded-lg md:hidden">Abrir conta</button>
          <button className="w-full bg-black text-white p-4 rounded-lg md:hidden">Já tenho conta</button>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <h2 className="text-black text-center font-semibold text-lg md:text-xl">Vantagens do nosso banco:</h2>
        <div className="flex flex-col gap-10 px-4 md:grid grid-cols-2 lg:grid-cols-4">
          <WelcomeCard
          cardImage="/images/icone-presente.svg"
          cardAltImage="Ícone de presente"
          cardTitle="Conta e cartão gratuitos"
          cardText="Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção."></WelcomeCard>
          <WelcomeCard
          cardImage="/images/icone-saque.svg"
          cardAltImage="Ícone de saque bancário"
          cardTitle="Saques sem custo"
          cardText="Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h."></WelcomeCard>
          <WelcomeCard
          cardImage="/images/icone-pontos.svg"
          cardAltImage="Ícone de estrela, representando pontuação"
          cardTitle="Programa de pontos"
          cardText="Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!"></WelcomeCard>
          <WelcomeCard
          cardImage="/images/icone-dispositivos.svg"
          cardAltImage="Ícone de dispositivos tecnológicos"
          cardTitle="Seguro Dispositivos"
          cardText="Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica."></WelcomeCard>
        </div>
      </div>
    </main>
  </WelcomeLayout>
);

export default WelcomePage;
