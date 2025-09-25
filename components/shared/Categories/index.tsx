"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useStoreCategory } from "@/store/category";
import { PropsWithClassName } from "@/lib/types";
import { CategoryModel } from "@/app/generated/prisma-client/models";
import { serviceCategories } from "@/services/serviceCategories";

export const Categories = ({ className }: PropsWithClassName) => {
  const activeCategoryId = useStoreCategory((state) => state.activeId);

  const [categories, setCategories] = useState<CategoryModel[]>([]);

  useEffect(() => {
    serviceCategories
      .getAll()
      .then(setCategories)
      .catch(() => setCategories([]));
  }, []);

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
