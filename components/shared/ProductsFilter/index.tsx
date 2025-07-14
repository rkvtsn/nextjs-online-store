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
  PRICE_STATE_DEFAULT,
  PriceState,
  PRODUCTS_FILTER_STATE_DEFAULT,
  ProductsFilter,
} from "./state";

export const ProductsFilter = ({ className }: PropsWithClassName) => {
  const router = useRouter();
  const [state, setState] = useState<ProductsFilter>(
    PRODUCTS_FILTER_STATE_DEFAULT
  );

  const onChangeState = <K extends keyof ProductsFilter>(
    name: K,
    value: ProductsFilter[K]
  ) => {
    setState((prevState) => ({ ...prevState }));
  };

  const [priceFilter, setPriceFilter] =
    useState<PriceState>(PRICE_STATE_DEFAULT);

  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const [selectedNow, setSelectedNow] = useState<string[]>([]);

  useEffect(() => {
    const queryString = QueryString.stringify({
      ...priceFilter,
      selectedFeatures,
      selectedNow,
    });
    router.push(`?${queryString}`);
  }, [priceFilter, router, selectedFeatures, selectedNow]);

  return (
    <div className={cn("side-filters", className)}>
      <Heading size="sm" className="font-bold mb-5">
        Filters:
      </Heading>
      <div className="flex flex-col gap-4">
        <ProductsFilterNow value={selectedNow} onChange={setSelectedNow} />
      </div>

      <div className="mt-3 border-y border-y-neutral-100 py-6 pb-7">
        <PriceRangeInput value={priceFilter} onChange={setPriceFilter} />
      </div>

      <ProductsFilterFeatures
        onChange={setSelectedFeatures}
        value={selectedFeatures}
      />
    </div>
  );
};
