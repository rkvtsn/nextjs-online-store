import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json(
    await prisma.category.findMany({
      include: {
        product: {
          include: {
            features: true,
            variants: true,
          },
        },
      },
    })
  );
};
