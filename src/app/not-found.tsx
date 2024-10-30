// import Image from "next/image";
// import Link from "next/link";
import React from "react";
import WelcomeLayout from "@/app/components/Layout/WelcomeLayout";

const NotFound: React.FC = () => {
  return (
    <WelcomeLayout>
      {/* <main className="w-full bg-gradient-to-b from-primary-color to-light">
        <div className="max-w-sm flex flex-col items-center mx-auto gap-10 py-10 lg:py-20 md:max-w-md lg:max-w-lg lg:px-6">
          <div className="flex flex-col items-center gap-6 lg:w-1/2 md:w-full">
            <h1 className="text-black text-center font-semibold text-xl md:text-2xl lg:w-full">
              Ops! Não encontramos a página...
            </h1>
            <p className="text-black text-base text-center">
              E olha que exploramos o universo procurando por ela! <br /> Que
              tal voltar e tentar novamente?
            </p>
            <Link
              href={{
                pathname: "/welcome",
              }}
              className="bg-secondary-color text-white font-bold p-3.5 rounded-lg text-base"
            >
              Voltar ao início
            </Link>
          </div>
          <Image
            src="/images/not-found.svg"
            alt="Page Not Found"
            width={470}
            height={354}
            className="md:w-full lg:w-full md:h-80 lg:h-80"
          />
        </div>
      </main> */}
    </WelcomeLayout>
  );
};

export default NotFound;
