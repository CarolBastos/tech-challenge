import { User } from '@/app/interfaces';
import { NextResponse } from 'next/server';

export async function GET() {
  const user: User = {
    name: 'João Silva',
    balance: 2.500,
  };

  return NextResponse.json(user);
}
