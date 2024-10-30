import { NextResponse } from 'next/server';
import { user } from "../../../mocks/userAccount";
import { User } from '@/app/interfaces';

export async function GET() {
  const userAccount: User = user[0];

  return NextResponse.json(userAccount);
}

export async function POST(request: Request) {
  const balance = await request.json();
  user[0].balance = balance;

  return NextResponse.json(JSON.stringify(user[0]), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
