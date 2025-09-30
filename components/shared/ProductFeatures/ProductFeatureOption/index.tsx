import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { TFeaturesGetProduct } from "@/services/server/types";
import ProductImage from "../../ProductImage";
import { TFeatureId } from "../types";

const ProductFeatureOption = ({
  onSelect,
  feature,
  isSelected,
}: ProductFeatureOptionProps) => {
  const handleOnSelect = () => {
    onSelect(feature.id);
  };

  return (
    <li
      role="button"
      aria-pressed={isSelected}
      onClick={handleOnSelect}
      className={cn(
        "flex items-center gap-1 border rounded-lg px-2 py-1 transition cursor-pointer select-none",
        "hover:bg-gray-50",
        isSelected
          ? "border-gray-900 bg-gray-50 shadow-md"
          : "border-gray-200 bg-white shadow-sm"
      )}
    >
      <ProductImage
        imageUrl={feature.imageUrl}
        name={feature.name}
        size="xs"
        className="flex-shrink-0 rounded-md border"
      />
      <span className="text-gray-800 font-medium">
        {feature.name}
        {feature.price !== null && (
          <span className="text-gray-600 ml-1">+${feature.price}</span>
        )}
      </span>

      <div
        className={cn(
          "w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0",
          isSelected
            ? "bg-green-500 border-green-500"
            : "bg-white border-gray-300"
        )}
      >
        <Check
          size={14}
          className={cn(
            "text-white transition-opacity",
            isSelected ? "opacity-100" : "opacity-0"
          )}
        />
      </div>
    </li>
  );
};

export default ProductFeatureOption;

type ProductFeatureOptionProps = {
  onSelect: (feature: TFeatureId) => void;
  feature: TFeaturesGetProduct[number];
  isSelected: boolean;
};
