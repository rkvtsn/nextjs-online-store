import { PRODUCTS_FILTER_STATE_DEFAULT } from "@/lib/constants";
import {
  TFilterSearchParams,
  EFilterSearchSort,
} from "../models/FilterSearchParams";

export const FILTER_SEARCH_DEFAULT: TFilterSearchParams = {
  price_from: PRODUCTS_FILTER_STATE_DEFAULT.price.from,
  price_to: PRODUCTS_FILTER_STATE_DEFAULT.price.to,
  features: PRODUCTS_FILTER_STATE_DEFAULT.features,
  filterNow: PRODUCTS_FILTER_STATE_DEFAULT.filterNow,
  sorted: EFilterSearchSort.ASC,
};
