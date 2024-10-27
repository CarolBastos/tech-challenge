import React from "react";
import WelcomeLayout from "@/app/components/Layout/WelcomeLayout";

export const metadata = {
  title: "Bytebank",
  description:
    "Descubra o Bytebank, onde você desfruta de uma conta e cartão gratuitos sem custos ocultos. Aproveite saques sem taxas e um programa de pontos que recompensa suas transações diárias. Proteja seus dispositivos com nosso seguro exclusivo e experimente a liberdade financeira que você merece. Escolha Bytebank para uma experiência bancária moderna e sem complicações.",
};

const WelcomePage: React.FC = () => {
  return (
  <WelcomeLayout/>
);
}

export default WelcomePage;