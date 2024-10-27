"use client";

import React, { FormEvent, useState } from "react";
import { InputForm } from "../generics/InputForm";
import Image from "next/image";

interface IUserRegisterForm {
    viewUserRegisterForm: boolean;
    onClose: (value: boolean) => void;
}

export const UserRegisterForm = ({viewUserRegisterForm, onClose}: IUserRegisterForm) => {
  const [username, setUsername] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleClose = () => {
      setUsername('')
      setUserEmail('')
      setPassword('')
      setMessage('')
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/create-account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, userEmail, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage(data.message);
    } else {
      setMessage(data.message);
    }
  };

  return (
    <>
        {
            viewUserRegisterForm &&
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-6">
                    <form onSubmit={handleSubmit} className="w-full max-w-[792px] bg-stone-50 h-svh flex flex-col gap-8 py-8 px-28 relative">
                        <button className="absolute right-4 top-4" onClick={() => {
                        onClose(false),
                        handleClose()
                        }}>
                            <Image src="/close.svg" alt="fechar" width={16} height={16}/>
                        </button>
                        <div className="flex flex-col gap-8 justify-center items-center">
                            <Image src="/images/user-register.svg" alt="imagem" width={330} height={267}/>
                            <h1 className="font-bold text-xl">Preencha os campos abaixo para criar sua conta corrente!</h1>
                        </div>
                        <div>
                            <div className="flex flex-col gap-6 mb-2">
                                <InputForm
                                    label="Nome"
                                    placeholder="Digite seu nome completo"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <InputForm
                                    label="Email"
                                    placeholder="Digite seu email"
                                    value={userEmail}
                                    onChange={(e) => setUserEmail(e.target.value)}
                                />
                                <InputForm
                                    label="Senha"
                                    placeholder="Digite sua senha"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="w-36 h-12 bg-red-500 rounded-lg text-white font-bold" type="submit">Criar conta</button>
                        </div>
                    {message && <p>{message}</p>}
                    </form>
                </div>

        }
    </>
  );
};
