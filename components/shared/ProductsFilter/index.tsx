"use client";

import React, { useCallback, useEffect, useState } from "react";
import QueryString from "qs";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/common/Heading";
import { PropsWithClassName } from "@/lib/types";
import PriceRangeInput from "@/components/common/PriceRangeInput";
import ProductsFilterFeatures from "../ProductsFilterFeatures";
import ProductsFilterNow from "../ProductsFilterNow";
import { PRODUCTS_FILTER_STATE_DEFAULT, TProductsFilter } from "./state";
import { useDebounce } from "@/lib/hooks/useDebounce";
import { getIsDirtyFilter } from "./utils/getIsDirtyFilter";
import { parseQueryToFilterState } from "./utils/parseQueryToFilterState";

export const ProductsFilter = ({ className }: PropsWithClassName) => {
  const router = useRouter();
  const [state, setState] = useState<TProductsFilter>(
    PRODUCTS_FILTER_STATE_DEFAULT
  );

  const onChangeState = useCallback(
    <K extends keyof TProductsFilter>(name: K) =>
      (value: TProductsFilter[K]) => {
        setState((prevState) => {
          const newValue = { ...prevState, [name]: value };
          newValue.isDirty = getIsDirtyFilter(newValue);
          return newValue;
        });
      },
    []
  );

  const debouncedRouterPush = useDebounce((state: TProductsFilter) => {
    const { isDirty, ...query } = state;
    const queryString = QueryString.stringify(query);
    router.push(`?${queryString}`, { scroll: false });
  }, 300);

  useEffect(() => {
    const queryState = parseQueryToFilterState(window.location.search.slice(1));
    setState(queryState);
  }, []);

  useEffect(() => {
    debouncedRouterPush(state);
  }, [state, debouncedRouterPush]);

  const handleOnClear = () => {
    setState(PRODUCTS_FILTER_STATE_DEFAULT);
  };

  return (
    <div className={cn("side-filters", className)}>
      <div className="flex items-center justify-between mb-4">
        <Heading size="sm" className="font-bold">
          Filters
        </Heading>
        {state.isDirty && (
          <button
            onClick={handleOnClear}
            className="text-xs text-primary hover:text-primary/70 transition-colors border-b-2 border-dotted border-black cursor-pointer"
          >
            Clear
          </button>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <ProductsFilterNow
          value={state.filterNow}
          onChange={onChangeState("filterNow")}
        />
      </div>

      <div className="mt-3 border-y border-y-neutral-100 py-6 pb-7">
        <PriceRangeInput
          value={state.price}
          onChange={onChangeState("price")}
        />
      </div>

      <ProductsFilterFeatures
        value={state.features}
        onChange={onChangeState("features")}
      />
    </div>
  );
};
