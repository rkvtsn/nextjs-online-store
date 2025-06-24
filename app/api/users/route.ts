import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  const { email, password, name } = await req.json();

  const newUser = await prisma.user.create({
    data: { email, password, name },
  });

  return newUser;
}
