import { getCategoriesWithProducts } from "./getCategoriesWithProducts";
import { getProduct } from "./getProduct";

export type TReturnGetCategoriesWithProducts = ReturnType<
  typeof getCategoriesWithProducts
>;

export type TReturnGetProduct = NonNullable<Awaited<ReturnType<typeof getProduct>>>;

export type TFeaturesGetProduct = TReturnGetProduct["features"];

export type TVariantsGetProduct = TReturnGetProduct["variants"];
