import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json(await prisma.product.findMany());
};
