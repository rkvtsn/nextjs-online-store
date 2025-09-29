import { BAKERY_AND_BREAD } from "./products_bakery_n_bread";
import { FRUITS } from "./products_fruits";
import { VEGETABLES } from "./products_veg";
import { OTHERS } from "./products_other";
import { MEAT_AND_SEAFOOD } from "./products_meat_fish";
import { ProductSeed } from "./types";

export const PRODUCTS: ProductSeed[] = [
  ...BAKERY_AND_BREAD,

  ...FRUITS,

  ...VEGETABLES,

  ...OTHERS,

  ...MEAT_AND_SEAFOOD,
];
