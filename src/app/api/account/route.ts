import { User } from '@/app/interfaces';
import { NextResponse } from 'next/server';

export async function GET() {
  const user: User = {
    id: 1,
    name: 'Joana da Silva Oliveira',
    balance: 2500,
  };

  return NextResponse.json(user);
}
