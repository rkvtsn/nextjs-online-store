import { CheckboxGroup } from "@/components/common/CheckboxGroup";
import { ComponentProps } from "react";

export const ProductsFilterNow = (
  props: Omit<ComponentProps<typeof CheckboxGroup>, "title" | "items">
) => {
  return (
    <CheckboxGroup
      {...props}
      title="Now"
      className="mt-3"
      items={PRODUCTS_FILTER_NOW}
    />
  );
};

export default ProductsFilterNow;

const PRODUCTS_FILTER_NOW = [
  { value: "trending", label: "Trending" },
  { value: "best_sellers", label: "Best sellers" },
  { value: "new", label: "New" },
];
