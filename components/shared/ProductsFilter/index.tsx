"use client";

import React, { useEffect, useState } from "react";
import QueryString from "qs";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/common/Heading";
import { PropsWithClassName } from "@/lib/types";
import PriceRangeInput from "@/components/common/PriceRangeInput";
import ProductsFilterFeatures from "../ProductsFilterFeatures";
import ProductsFilterNow from "../ProductsFilterNow";
import {
  PRODUCTS_FILTER_STATE_DEFAULT,
  TProductsFilter,
} from "./state";

export const ProductsFilter = ({ className }: PropsWithClassName) => {
  const router = useRouter();
  const [state, setState] = useState<TProductsFilter>(
    PRODUCTS_FILTER_STATE_DEFAULT
  );

  const onChangeState =
    <K extends keyof TProductsFilter>(name: K) =>
    (value: TProductsFilter[K]) => {
      setState((prevState) => ({ ...prevState, [name]: value }));
      return value
    };

  useEffect(() => {
    const queryString = QueryString.stringify(state);
    router.push(`?${queryString}`, {
      scroll: false
    });
  }, [router, state]);

  return (
    <div className={cn("side-filters", className)}>
      <Heading size="sm" className="font-bold mb-5">
        Filters:
      </Heading>
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
