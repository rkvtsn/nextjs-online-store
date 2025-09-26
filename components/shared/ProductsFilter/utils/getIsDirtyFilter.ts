import { PRODUCTS_FILTER_STATE_DEFAULT, TProductsFilter } from "../state";

export function getIsDirtyFilter(state: TProductsFilter): boolean {
  const { price, filterNow, features } = PRODUCTS_FILTER_STATE_DEFAULT;

  if (state.price.from !== price.from || state.price.to !== price.to)
    return true;
  if (
    state.filterNow.length !== filterNow.length ||
    state.filterNow.some((v, i) => v !== filterNow[i])
  )
    return true;
  if (
    state.features.length !== features.length ||
    state.features.some((v, i) => v !== features[i])
  )
    return true;

  return false;
}
