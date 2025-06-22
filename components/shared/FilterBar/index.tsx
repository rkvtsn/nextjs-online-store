import React from "react";
import { PropsWithClassName } from "../types";
import { cn } from "@/lib/utils";
import { Panel } from "../Panel";
import { Categories } from "../Categories";
import { SortFilter } from "../SortFilter";

export const FilterBar = ({ className }: PropsWithClassName) => {
  return (
    <div
      className={cn(
        "filter-bar sticky top-0 bg-white py-2 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Panel className="flex items-center justify-between">
        <Categories />
        <SortFilter />
      </Panel>
    </div>
  );
};
