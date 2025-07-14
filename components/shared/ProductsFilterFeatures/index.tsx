"use client";

import React, { useMemo } from "react";
import { CheckboxGroup } from "@/components/common/CheckboxGroup";
import { useFeaturesOptions } from "./useFeaturesOptions";

const FEATURES_DEFAULT_LIMIT = 5;

const ProductsFilterFeatures = ({
  value,
  onChange,
  limit = FEATURES_DEFAULT_LIMIT,
}: ProductsFilterFeaturesProps) => {
  const { features, isLoading } = useFeaturesOptions();

  const defaultItems = useMemo(
    () => features.slice(0, FEATURES_DEFAULT_LIMIT),
    [features]
  );

  return (
    <CheckboxGroup
      title="Properties"
      className="mt-3"
      limit={limit}
      items={features}
      defaultItems={defaultItems}
      isLoading={isLoading}
      onChange={onChange}
      value={value}
    />
  );
};

export default ProductsFilterFeatures;

type ProductsFilterFeaturesProps = {
  value: string[];
  onChange: (value: string[]) => void;
  limit?: number;
};
