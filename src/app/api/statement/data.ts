import { Statement } from "@/app/interfaces";

export const statement: Statement = {
  transactions: [
    {
      id: 1,
      description: "depósito",
      amount: 150,
      date: new Date("2024-10-13T14:30:45Z").toISOString(),
    },
    {
      id: 2,
      description: "transferência",
      amount: 40,
      date: new Date("2024-11-13T14:30:45Z").toISOString(),
    },
  ],
};
