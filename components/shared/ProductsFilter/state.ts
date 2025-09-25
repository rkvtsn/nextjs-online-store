export type TPriceState = {
  from: number;
  to: number;
};

export const PRICE_STATE_DEFAULT: TPriceState = {
  from: 0,
  to: 5000,
};

export type TProductsFilter = {
  price: TPriceState;
  features: string[];
  filterNow: string[];
};

export const PRODUCTS_FILTER_STATE_DEFAULT: TProductsFilter = {
  features: [],
  filterNow: [],
  price: PRICE_STATE_DEFAULT,
};
