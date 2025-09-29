import { TPriceState, TProductsFilter } from "./types";

export const RANGE_MIN = 0;

export const RANGE_MAX = 50;

export const PRICE_STATE_DEFAULT: TPriceState = {
  from: RANGE_MIN,
  to: RANGE_MAX,
};

export const PRODUCTS_FILTER_STATE_DEFAULT: TProductsFilter = {
  features: [],
  filterNow: [],
  price: PRICE_STATE_DEFAULT,
  isDirty: false,
};
