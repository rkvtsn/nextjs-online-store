"use client";

import React from "react";
import { PropsWithClassName } from "../types";
import { cn } from "@/lib/utils";
import { useStoreCategory } from "@/store/category";

export const Categories = ({ className }: PropsWithClassName) => {
  const activeCategoryId = useStoreCategory((state) => state.activeId);
  return (
    <div
      className={cn(
        "category-filter inline-flex gap-3 bg-gray-50 p-1 rounded-2xl",
        className
      )}
    >
      {[].map((category) => (
        <a
          className={cn(
            "px-2 flex items-center font-bold h-8 rounded-2xl",
            activeCategoryId === category.id &&
              "shadow-md text-primary shadow-gray-200 bg-white"
          )}
          href={`/#${category.name}`}
          key={category.id}
        >
          <button>{category.name}</button>
        </a>
      ))}
    </div>
  );
};
