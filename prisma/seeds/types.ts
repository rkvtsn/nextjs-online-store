import {
  ProductModel,
  VariantModel,
} from "@/app/generated/prisma-client/models";
import { FeatureName } from "./features";

export type ProductSeed = Omit<
  ProductModel,
  "features" | "id" | "updatedAt" | "createdAt"
> & {
  features: FeatureName[];
  variants: Omit<VariantModel, "id" | "productId">[];
};
