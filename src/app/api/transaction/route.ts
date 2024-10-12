import { NextResponse } from "next/server";
import { Transaction } from "@/app/interfaces";

export async function POST(request: Request) {
  const transaction: Transaction = await request.json();

  return new NextResponse(JSON.stringify(transaction), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
