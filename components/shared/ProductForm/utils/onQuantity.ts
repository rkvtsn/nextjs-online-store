import { MAX_QUANTITY, MIN_QUANTITY } from "../constants";

export const onQuantity = (value: number) => {
  return Math.min(MAX_QUANTITY, Math.max(MIN_QUANTITY, value));
};
