import React from 'react';
import WelcomeLayout from '@/app/components/Layout/WelcomeLayout';

export const metadata = {
  title: "Bytebank",
};

const WelcomePage: React.FC = () => (
  <WelcomeLayout>
    Pagina principal de boas vindas
  </WelcomeLayout>
);

export default WelcomePage;
