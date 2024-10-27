import { NextResponse } from "next/server";
import { users } from "../../../../mocks/users";

export async function POST(request: Request) {
  const body = await request.json();
  const { username, password } = body;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    return NextResponse.json(
      { message: "Login successful", user },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }
}
