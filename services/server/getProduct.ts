import { prisma } from "@/lib/prisma";

export const getProduct = async (id: number) => {
  return await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      features: true,
      variants: true,
    },
  });
};
