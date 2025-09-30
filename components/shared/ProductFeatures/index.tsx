import React, { Dispatch, SetStateAction, useMemo } from "react";
import { TFeaturesGetProduct } from "@/services/server/types";
import ProductFeatureOption from "./ProductFeatureOption";
import { TFeatureId } from "./types";

const ProductFeatures = ({
  features,
  onSelect,
  selected,
}: ProductFeaturesProps) => {
  const handleOnSelect = (featureId: TFeatureId) => {
    onSelect((prev) => {
      const newState = new Set(prev);
      if (newState.has(featureId)) {
        newState.delete(featureId);
      } else {
        newState.add(featureId);
      }
      return newState;
    });
  };

  const featureOptions = useMemo(() => {
    return features.filter((f) => f.imageUrl && f.price !== null);
  }, [features]);

  return (
    <>
      <h2 className="text-xl font-semibold text-gray-800 ">
        Features
      </h2>
      <ul className="flex flex-wrap gap-1">
        {featureOptions.map((feature) => (
          <ProductFeatureOption
            key={feature.id}
            feature={feature}
            onSelect={handleOnSelect}
            isSelected={selected.has(feature.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default ProductFeatures;

type ProductFeaturesProps = {
  features: TFeaturesGetProduct;
  onSelect: Dispatch<SetStateAction<Set<TFeatureId>>>;
  selected: Set<TFeatureId>;
};
