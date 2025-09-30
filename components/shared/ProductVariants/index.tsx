"use client";

import { cn } from "@/lib/utils";
import { TVariantsGetProduct } from "@/services/server/types";

const ProductVariants = ({
  variants,
  selected,
  onSelect,
}: ProductVariantsProps) => {
  return (
    <>
      <h2 className="text-xl font-semibold text-gray-800">Variants</h2>
      <ul className="flex flex-col gap-3">
        {variants.map((variant) => (
          <li
            key={variant.id}
            onClick={() => onSelect(variant)}
            className={cn(
              "flex justify-between items-center p-4 border rounded-lg shadow-sm transition-shadow duration-200 bg-white cursor-pointer",
              selected?.id === variant.id
                ? "border-gray-900 shadow-md"
                : "hover:shadow-md"
            )}
          >
            <div>
              <p className="font-medium text-gray-800">{variant.name}</p>
              <p className="text-gray-500 text-sm line-clamp-2">
                {variant?.description}
              </p>
            </div>
            <span className="font-semibold text-gray-900">
              ${variant.price}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductVariants;

interface ProductVariantsProps {
  variants: TVariantsGetProduct;
  selected: TVariantsGetProduct[number];
  onSelect: (variant: TVariantsGetProduct[number]) => void;
}
