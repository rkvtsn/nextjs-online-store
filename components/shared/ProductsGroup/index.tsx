"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useStoreCategory } from "@/store/category";
import { Heading } from "@/components/common/Heading";
import useIntersection from "@/lib/hooks/useIntersection";
import { ProductCard } from "../ProductCard";
import { PropsWithClassName } from "@/lib/types";
import { CategoryWithProductsModel } from "@/services/models/Categories";
import { CategoryModel } from "@/app/generated/prisma-client/models";

export const ProductsGroup = (props: ProductsGroupProps) => {
  const { products, className, classNameProducts, category } = props;
  const intersectionRef = useRef<HTMLDivElement>(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  const setActiveCategoryId = useStoreCategory((state) => state.setActiveId);

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(category.id);
    }
  }, [category.id, intersection?.isIntersecting, setActiveCategoryId]);

  return (
    <div
      className={cn(`products-group-${category.id}`, className)}
      ref={intersectionRef}
      id={category.id.toString()}
    >
      <Heading size="lg" className="font-extrabold mb-5">
        {category.name}
      </Heading>

      <div className={cn("grid grid-cols-3 gap-[50px]", classNameProducts)}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.variants?.[0]?.price ?? "-"}
          />
        ))}
      </div>
    </div>
  );
};

type ProductsGroupProps = PropsWithClassName & {
  products: CategoryWithProductsModel["product"];
  category: CategoryModel;
  classNameProducts?: PropsWithClassName["className"];
};
