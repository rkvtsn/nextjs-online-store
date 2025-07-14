export type PriceState = {
  from: number;
  to: number;
};

export const PRICE_STATE_DEFAULT: PriceState = {
  from: 0,
  to: 5000,
};

export type ProductsFilter = {
  price: PriceState;
  features: string[];
  filterNow: string[];
};

export const PRODUCTS_FILTER_STATE_DEFAULT: ProductsFilter = {
  features: [],
  filterNow: [],
  price: PRICE_STATE_DEFAULT,
};
