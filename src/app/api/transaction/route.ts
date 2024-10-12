import { NextResponse } from "next/server";
import { Transaction } from "@/app/interfaces";
import { statement } from "../statement/data";

export async function POST(request: Request) {
  const transaction = await request.json();

  const newTransaction: Transaction = {
    id: statement.transactions.length + 1,
    ...transaction,
  };

  statement.transactions.push(newTransaction);

  return new NextResponse(JSON.stringify(newTransaction), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
