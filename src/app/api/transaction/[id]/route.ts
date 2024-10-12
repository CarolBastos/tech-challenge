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

  const transactionDeleted: Transaction = statement.transactions.splice(
    index,
    1
  )[0];

  return NextResponse.json(transactionDeleted);
}
