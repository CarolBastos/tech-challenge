import { NextResponse } from "next/server";
import { statement } from "../../../mocks/statement";

export async function GET() {
  return NextResponse.json(statement);
}
