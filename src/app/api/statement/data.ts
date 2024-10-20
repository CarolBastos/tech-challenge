import { Statement, TypesOfTransaction } from "@/app/interfaces";

export const statement: Statement = {
  transactions: [
    {
      id: 1,
      description: TypesOfTransaction.Deposito,
      amount: 150,
      date: new Date("2024-10-13T14:30:45Z").toISOString(),
    },
    {
      id: 2,
      description: TypesOfTransaction.Transferencia,
      amount: 40,
      date: new Date("2024-11-13T14:30:45Z").toISOString(),
    },
  ],
};
