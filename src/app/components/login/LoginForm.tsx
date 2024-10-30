"use client";

import React, { FormEvent, useState } from "react";
import { InputForm } from "../generics/InputForm";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ILoginForm {
  viewLoginForm: boolean;
  onClose: (value: boolean) => void;
}

export const LoginForm = ({ viewLoginForm, onClose }: ILoginForm) => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleClose = () => {
    setEmail("");
    setPassword("");
    setMessage("");
    onClose(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message);
        router.push("/perfil");
        handleClose();
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Erro ao conectar com o servidor.");
    }
  };

  return (
    <>
      {viewLoginForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-6">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[792px] bg-stone-50 h-svh flex flex-col gap-8 py-8 px-28 relative"
          >
            <button
              className="absolute right-4 top-4"
              onClick={(e) => {
                e.preventDefault();
                handleClose();
              }}
            >
              <Image src="/close.svg" alt="fechar" width={16} height={16} />
            </button>
            <div className="flex flex-col gap-8 justify-center items-center">
              <Image src="/images/login.svg" alt="imagem" width={330} height={267} />
              <h1 className="font-bold text-xl">Login</h1>
            </div>
            <div>
              <div className="flex flex-col gap-6 mb-2">
                <InputForm
                  label="Email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputForm
                  label="Senha"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <span className="text-green-600 underline">Esqueci a senha!</span>
            </div>
            <div className="flex items-center justify-center">
              <button className="w-36 h-12 bg-green-600 rounded-lg text-white font-bold" type="submit">
                Acessar
              </button>
            </div>
            {message && <p className="text-center">{message}</p>}
          </form>
        </div>
      )}
    </>
  );
};
