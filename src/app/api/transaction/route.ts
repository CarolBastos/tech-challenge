import { NextResponse } from "next/server";
import { Transaction } from "@/app/interfaces";
import { statement } from "../statement/data";

// function isValidISODate(date: string): boolean {
//   const parsedDate = new Date(date);
//   return !isNaN(parsedDate.getTime()) && date === parsedDate.toISOString();
// }

//verify if data received is valid
export async function POST(request: Request) {
  const transaction = await request.json();

  if (transaction.amount <= 0) {
    return NextResponse.json(
      { error: "Amount of transaction must be bigger than 0" },
      { status: 400 }
    );
  }

  const currentDate = new Date().toISOString();
  const newDate = new Date(transaction.date).toISOString();

  if (newDate <= currentDate) {
    return NextResponse.json(
      { error: "Date must be greater than the current date" },
      { status: 400 }
    );
  }

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
