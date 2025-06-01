import React from "react";
import { PropsWithClassName } from "../types";
import { cn } from "@/lib/utils";
import { CATEGORIES } from "./constants";

export const ACTIVE_ID: (typeof CATEGORIES)[number]["id"] = 0;

export const CategoryFilter = ({ className }: PropsWithClassName) => {
  return (
    <div
      className={cn(
        "category-filter inline-flex gap-3 bg-gray-50 p-1 rounded-2xl",
        className
      )}
    >
      {CATEGORIES.map((category) => (
        <a
          className={cn(
            "px-2 flex items-center font-bold h-8 rounded-2xl",
            category.id === ACTIVE_ID &&
              "shadow-md text-primary shadow-gray-200 bg-white"
          )}
          key={category.id}
        >
          <button>{category.name}</button>
        </a>
      ))}
    </div>
  );
};
