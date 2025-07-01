import React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Heading } from "@/components/common/Heading";
import { CheckboxWithLabel } from "@/components/common/CheckboxWithLabel";
import { CheckboxGroup } from "@/components/common/CheckboxGroup";
import { RangeSlider } from "@/components/common/RangeSlider";
import { PropsWithClassName } from "@/lib/types";

export const PRODUCT_PROPERTIES = [
  { value: "organic", label: "Organic" },
  { value: "gluten_free", label: "Gluten-Free" },
  { value: "vegan", label: "Vegan" },
  { value: "vegetarian", label: "Vegetarian" },
  { value: "sugar_free", label: "Sugar-Free" },
  { value: "lactose_free", label: "Lactose-Free" },
  { value: "local", label: "Locally Sourced" },
  { value: "fair_trade", label: "Fair Trade" },
  { value: "eco_packaging", label: "Eco Packaging" },
  { value: "low_fat", label: "Low Fat" },
  { value: "high_protein", label: "High Protein" },
  { value: "keto", label: "Keto Friendly" },
  { value: "halal", label: "Halal" },
  { value: "kosher", label: "Kosher" },
  { value: "non_gmo", label: "Non-GMO" },
];

export const SideFilters = ({ className }: PropsWithClassName) => {
  return (
    <div className={cn("side-filters", className)}>
      <Heading size="sm" className="font-bold mb-5">
        Filters:
      </Heading>
      <div className="flex flex-col gap-4">
        <CheckboxWithLabel label="New" value="1" />
        <CheckboxWithLabel label="Fresh" value="2" />
      </div>

      <div className="mt-3 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price range:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={29999}
            defaultValue={0}
          />
          <Input type="number" min={1} max={30000} placeholder="30000" />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      <CheckboxGroup
        title="Properties"
        limit={5}
        items={PRODUCT_PROPERTIES}
        defaultItems={PRODUCT_PROPERTIES}
        className="mt-3"
      />
    </div>
  );
};
