"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useStoreCategory } from "@/store/category";
import { PropsWithClassName } from "@/lib/types";
import { Category } from "@/app/generated/prisma-client/client";

export const Categories = ({ className, categories }: CategoriesProps) => {
  const activeCategoryId = useStoreCategory((state) => state.activeId);

  const handleOnScrollTo: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();

    const target = e.currentTarget;
    const href = target.getAttribute("href");
    if (!href) return;

    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={cn(
        "category-filter inline-flex gap-3 bg-gray-50 p-1 rounded-2xl",
        className
      )}
    >
      {categories.map((category) => (
        <a
          className={cn(
            "px-2 flex items-center font-bold h-8 rounded-2xl cursor-pointer transition-colors",
            activeCategoryId === category.id
              ? "shadow-md text-primary shadow-gray-200 bg-white"
              : "text-gray-700 hover:bg-gray-100 hover:text-primary"
          )}
          href={`#${category.id}`}
          key={category.id}
          onClick={handleOnScrollTo}
        >
          {category.name}
        </a>
      ))}
    </div>
  );
};

export interface CategoriesProps extends PropsWithClassName {
  categories: Category[];
}
