import { TFeaturesGetProduct } from "@/services/server/types";
import React from "react";

const ProductFeatureTags = ({ features }: ProductFeatureTagsProps) => {
  return (
    <>
      {features.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
            {features.map((feature) => (
              <React.Fragment
                key={feature.id}
              >{`#${feature.name} `}</React.Fragment>
            ))}
          </span>
        </div>
      )}
    </>
  );
};

export default ProductFeatureTags;

interface ProductFeatureTagsProps {
  features: TFeaturesGetProduct;
}
