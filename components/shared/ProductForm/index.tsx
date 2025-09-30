"use client";

import { useState } from "react";
import ProductVariants from "@/components/shared/ProductVariants";
import ProductFeatures from "@/components/shared/ProductFeatures";
import ProductAddToCart from "@/components/shared/ProductAddToCart";
import { TReturnGetProduct } from "@/services/server/types";
import { MAX_QUANTITY, MIN_QUANTITY } from "./constants";

const ProductForm = ({ product }: ProductFormProps) => {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.[0] || null
  );
  const [selectedFeatures, setSelectedFeatures] = useState<Set<number>>(
    new Set()
  );
  const [quantity, setQuantity] = useState<number>(MIN_QUANTITY);

  const handleAddToCart = () => {
    console.log({
      variant: selectedVariant,
      features: selectedFeatures,
      quantity,
    });
  };

  return (
    <>
      <div className="flex flex-col gap-6 p-6">
        <ProductVariants
          variants={product.variants}
          selected={selectedVariant}
          onSelect={setSelectedVariant}
        />
        {product.features.length > 0 && (
          <ProductFeatures
            features={product.features}
            selected={selectedFeatures}
            onSelect={setSelectedFeatures}
          />
        )}
      </div>

      <div className="col-span-2 sticky bottom-0 w-full bg-white shadow-[0_-2px_6px_rgba(0,0,0,0.1)] px-2 py-2">
        <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full max-w-2xl mx-auto">
          <ProductAddToCart
            min={MIN_QUANTITY}
            max={MAX_QUANTITY}
            quantity={quantity}
            onQuantity={setQuantity}
            onAdd={handleAddToCart}
            className="flex-1"
          />
        </div>
      </div>
    </>
  );
};

export default ProductForm;

type ProductFormProps = {
  product: TReturnGetProduct;
};
