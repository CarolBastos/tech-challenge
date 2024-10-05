import { NextResponse } from "next/server";
import { Statement } from "@/app/interfaces";

export async function GET() {
  const statement: Statement = {
    transactions: [
      {
        id: 1,
        description: "deposito",
        amount: 150,
        date: "2022-11-18T14:30:45",
      },
      {
        id: 2,
        description: "transferencia",
        amount: 40,
        date: "2022-11-13T14:30:45",
      },
    ],
  };
  return NextResponse.json(statement);
}
