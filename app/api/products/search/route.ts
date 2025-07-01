import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const searchQuery = request.nextUrl.searchParams.get("query") ?? "";

  return NextResponse.json(
    await prisma.product.findMany({
      where: {
        name: {
          contains: searchQuery,
          mode: "insensitive",
        },
      },
    })
  );
};
