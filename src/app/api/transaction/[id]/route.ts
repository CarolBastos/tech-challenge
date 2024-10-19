import { NextResponse } from "next/server";
import { Transaction } from "@/app/interfaces";
import { statement } from "../../statement/data";

type Params = {
  id: string;
};

export async function DELETE(request: Request, context: { params: Params }) {
  const index = statement.transactions.findIndex(
    (transaction) => transaction.id === parseInt(context.params.id)
  );

  if (index === -1) {
    return NextResponse.json(
      { error: "Transaction not found" },
      { status: 404 }
    );
  }

  const transactionDeleted: Transaction = statement.transactions.splice(
    index,
    1
  )[0];

  return NextResponse.json(transactionDeleted);
}

//verify if date is valid
export async function PATCH(request: Request, context: { params: Params }) {
  const index = statement.transactions.findIndex(
    (transaction) => transaction.id === parseInt(context.params.id)
  );

  if (index === -1) {
    return NextResponse.json(
      { error: "Transaction not found" },
      { status: 404 }
    );
  }

  const transactionToBeUpdated: Transaction = statement.transactions[index];

  const body = await request.json();
  const { description = null, amount = null, date = null } = body;

  if (description) transactionToBeUpdated.description = description;
  if (amount) {
    if (amount > 0) {
      transactionToBeUpdated.amount = amount;
    } else {
      return NextResponse.json(
        { error: "Amount of transaction must be bigger than 0" },
        { status: 400 }
      );
    }
  }

  if (date) {
    const currentDate = new Date().toISOString();
    const newDate = new Date(date).toISOString();

    if (newDate <= currentDate) {
      return NextResponse.json(
        { error: "Date must be greater than the current date" },
        { status: 400 }
      );
    }

    transactionToBeUpdated.date = newDate;
  }

  return NextResponse.json(transactionToBeUpdated);
}
