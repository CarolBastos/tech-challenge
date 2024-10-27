import { NextResponse } from "next/server";
import { UserLogin } from "@/app/interfaces";
import { isValidEmail } from "@/app/utils";
import { users } from "../../../mocks/users";

export async function POST(request: Request) {
  const userAccount = await request.json();

  if (!isValidEmail(userAccount.email)) {
    return NextResponse.json(
      { error: "Invalid email address" },
      { status: 400 }
    );
  }

  if (users.some((user) => user.email === userAccount.email)) {
    return NextResponse.json(
      { error: "Email already in use" },
      { status: 400 }
    );
  }

  if (userAccount.password.length < 9) {
    return NextResponse.json(
      { error: "Password must contain at least 10 characters" },
      { status: 400 }
    );
  }

  if (userAccount.name.trim().length <= 0) {
    return NextResponse.json(
      { error: "Field Name must be filled in" },
      { status: 400 }
    );
  }

  if (!userAccount.terms) {
    return NextResponse.json(
      { error: "Terms and conditions must be filled in" },
      { status: 400 }
    );
  }

  const newUser: UserLogin = {
    id: users.length + 1,
    email: userAccount.email,
    password: userAccount.password,
    name: userAccount.name,
    terms: userAccount.terms,
  };

  users.push(newUser);

  console.log({ users });

  return new NextResponse(JSON.stringify(newUser), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
