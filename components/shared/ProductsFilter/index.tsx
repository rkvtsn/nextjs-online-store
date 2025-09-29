"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/common/Heading";
import { PropsWithClassName, TProductsFilter } from "@/lib/types";
import PriceRangeInput from "@/components/common/PriceRangeInput";
import ProductsFilterFeatures from "../ProductsFilterFeatures";
import ProductsFilterNow from "../ProductsFilterNow";
import { useDebounce } from "@/lib/hooks/useDebounce";
import { getIsDirtyFilter } from "./utils/getIsDirtyFilter";
import { parseQueryToFilterState } from "./utils/parseQueryToFilterState";
import { parseQueryFromFilterState } from "./utils/parseQueryFromFilterState";
import { useFeaturesOptions } from "../ProductsFilterFeatures/useFeaturesOptions";
import {
  PRODUCTS_FILTER_STATE_DEFAULT,
  RANGE_MAX,
  RANGE_MIN,
} from "@/lib/constants";

export const ProductsFilter = ({ className }: ProductFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [state, setState] = useState<TProductsFilter>(() =>
    parseQueryToFilterState(searchParams.toString())
  );
  const [isLoading, setIsLoading] = useState(false);

  const onChangeState = useCallback(
    <K extends keyof TProductsFilter>(name: K) =>
      (value: TProductsFilter[K]) => {
        setState((prevState) => {
          const newValue = { ...prevState, [name]: value };
          newValue.isDirty = getIsDirtyFilter(newValue);
          return newValue;
        });
        setIsLoading(true);
      },
    []
  );

  const debouncedRouterPush = useDebounce((state: TProductsFilter) => {
    const queryString = parseQueryFromFilterState(state);
    if (queryString !== searchParams.toString()) {
      router.replace(`?${queryString}`, { scroll: false });
      setIsLoading(false);
    }
  }, 300);

  useEffect(() => {
    debouncedRouterPush(state);
  }, [state, debouncedRouterPush]);

  const handleOnClear = () => {
    setState(PRODUCTS_FILTER_STATE_DEFAULT);
    router.replace("?", { scroll: false });
  };

  const {
    features,
    specialFeatures,
    isLoading: featuresIsLoading,
  } = useFeaturesOptions();

  return (
    <div className={cn("side-filters", className)}>
      <div className="flex items-center justify-between mb-4">
        <Heading size="sm" className="font-bold">
          Filters
        </Heading>
        {state.isDirty && !isLoading && (
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
          items={specialFeatures}
          isLoading={featuresIsLoading}
          value={state.filterNow}
          onChange={onChangeState("filterNow")}
        />
      </div>

      <div className="mt-3 border-y border-y-neutral-100 py-6 pb-7">
        <PriceRangeInput
          value={state.price}
          onChange={onChangeState("price")}
          min={RANGE_MIN}
          max={RANGE_MAX}
        />
      </div>

      <ProductsFilterFeatures
        items={features}
        isLoading={featuresIsLoading}
        value={state.features}
        onChange={onChangeState("features")}
      />
    </div>
  );
};

type ProductFilterProps = PropsWithClassName & {};
