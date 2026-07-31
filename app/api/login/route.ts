import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { createToken } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { login, password } = await request.json();

  const admin = await prisma.admin.findUnique({
    where: { login },
  });

  if (!admin) {
    return NextResponse.json(
      { error: "Неверный логин" },
      { status: 401 }
    );
  }

  const ok = await bcrypt.compare(
    password,
    admin.passwordHash
  );

  if (!ok) {
    return NextResponse.json(
      { error: "Неверный пароль" },
      { status: 401 }
    );
  }

  const token = await createToken(admin.login);

  const response = NextResponse.json({
    success: true,
  });

  response.cookies.set({
    name: "smartmath-session",
    value: token,
    httpOnly: true,
    sameSite: "lax",
    secure: false, // позже заменим на process.env.NODE_ENV === "production"
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}