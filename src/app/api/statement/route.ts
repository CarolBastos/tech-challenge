import { NextResponse } from "next/server";
import { statement } from "./data";

export async function GET() {
  return NextResponse.json(statement);
}
