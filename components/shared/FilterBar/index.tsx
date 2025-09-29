import React from "react";
import { cn } from "@/lib/utils";
import { Panel } from "@/components/common/Panel";
import { PropsWithClassName } from "@/lib/types";
import { Categories } from "../Categories";
import { ProductsSort } from "../ProductsSort";
import { Category } from "@/app/generated/prisma-client/client";

export const FilterBar = ({ className, categories }: FilterBarProps) => {
  return (
    <div
      className={cn(
        "filter-bar sticky top-0 bg-white py-2 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Panel className="flex items-center justify-between">
        <Categories categories={categories} />
        <ProductsSort />
      </Panel>
    </div>
  );
};

export interface FilterBarProps extends PropsWithClassName {
  categories: Category[];
}
