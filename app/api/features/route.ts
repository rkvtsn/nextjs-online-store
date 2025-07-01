import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  const features = await prisma.feature.findMany();

  return NextResponse.json(features);
};
