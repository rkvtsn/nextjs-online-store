import { CheckboxGroup } from "@/components/common/CheckboxGroup";
import { ComponentProps } from "react";

export const ProductsFilterNow = (
  props: Omit<ComponentProps<typeof CheckboxGroup>, "title">
) => {
  return <CheckboxGroup {...props} title="Specials" className="mt-3" />;
};

export default ProductsFilterNow;
