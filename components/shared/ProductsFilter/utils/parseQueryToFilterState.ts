import QueryString from "qs";
import { TProductsFilter, PRODUCTS_FILTER_STATE_DEFAULT } from "../state";
import { getIsDirtyFilter } from "./getIsDirtyFilter";
import { toNumber } from "@/lib/utils/toNumber";
import { toStringArray } from "@/lib/utils/toStringArray";

export function parseQueryToFilterState(query: string): TProductsFilter {
  if (!query || query === "null") {
    return {
      ...PRODUCTS_FILTER_STATE_DEFAULT,
      isDirty: true,
    };
  }

  const parsed = QueryString.parse(query);
  const price = {
    from: toNumber(parsed.price_from, PRODUCTS_FILTER_STATE_DEFAULT.price.from),
    to: toNumber(parsed.price_to, PRODUCTS_FILTER_STATE_DEFAULT.price.to),
  };

  const filterNow = parsed.filterNow
    ? toStringArray(parsed.filterNow)
    : [...PRODUCTS_FILTER_STATE_DEFAULT.filterNow];

  const features = parsed.features
    ? toStringArray(parsed.features)
    : [...PRODUCTS_FILTER_STATE_DEFAULT.features];

  const state: TProductsFilter = {
    ...PRODUCTS_FILTER_STATE_DEFAULT,
    price,
    filterNow,
    features,
    isDirty: false,
  };

  state.isDirty = getIsDirtyFilter(state);
  return state;
}
