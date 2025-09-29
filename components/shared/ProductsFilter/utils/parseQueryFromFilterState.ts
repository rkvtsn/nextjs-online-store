import { TProductsFilter } from "@/lib/types";
import QueryString from "qs";

export function parseQueryFromFilterState(state: TProductsFilter): string {
  const { isDirty, price, ...rest } = state;

  return QueryString.stringify(
    {
      ...rest,
      price_from: price.from,
      price_to: price.to,
    },
    { arrayFormat: "repeat" }
  );
}
