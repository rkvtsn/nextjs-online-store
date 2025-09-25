import { Prisma } from "@/app/generated/prisma-client/client";

export type CategoryWithProductsModel = Prisma.CategoryGetPayload<{
  include: {
    product: {
      include: {
        features: true;
        variants: true;
      };
    };
  };
}>;
