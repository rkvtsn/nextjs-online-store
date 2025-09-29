"use client";

import React, { ComponentProps, useMemo } from "react";
import { CheckboxGroup } from "@/components/common/CheckboxGroup";

const FEATURES_DEFAULT_LIMIT = 5;

const ProductsFilterFeatures = ({
  value,
  onChange,
  items,
  isLoading,
  limit = FEATURES_DEFAULT_LIMIT,
}: ProductsFilterFeaturesProps) => {
  const defaultItems = useMemo(
    () => items.slice(0, FEATURES_DEFAULT_LIMIT),
    [items]
  );

  return (
    <CheckboxGroup
      title="Properties"
      className="mt-3"
      limit={limit}
      items={items}
      defaultItems={defaultItems}
      isLoading={isLoading}
      onChange={onChange}
      value={value}
    />
  );
};

export default ProductsFilterFeatures;

type ProductsFilterFeaturesProps = Pick<
  ComponentProps<typeof CheckboxGroup>,
  "items" | "value" | "onChange"
> & {
  onChange: (value: string[]) => void;
  limit?: number;
  isLoading: boolean;
};
