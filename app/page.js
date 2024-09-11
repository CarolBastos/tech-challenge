"use client";
import React from "react";
import Link from "next/link";
import Tabs from "./components/tab/tab";
import "./globals.scss";

const Home = () => {
  return (
    <>
      <section className="section flex justify-center items-center h-screen">
        <div className="section__side-menu w-[180px] section__side-menu  h-full">
          <Tabs />
        </div>

        <div className="section__main w-[690px] h-full">
          <p>Boas vindas</p>
        </div>

        <div className="section__bank-statement w-[282px] h-full">
          <p>Extrato</p>
        </div>
      </section>
    </>
  );
};

export default Home;
