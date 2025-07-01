"use client";

import { ComponentProps, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ProductCard } from "../ProductCard";
import { Heading } from "../Heading";
import { PropsWithClassName } from "../types";
import useIntersection from "../hooks/useIntersection";
import { CategoryId, useStoreCategory } from "@/store/category";

export const ProductsGroup = (props: ProductsGroupProps) => {
  const { products, className, listClassName, categoryId } = props;
  const intersectionRef = useRef<HTMLDivElement>(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  const setActiveCategoryId = useStoreCategory((state) => state.setActiveId);

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, setActiveCategoryId]);

  return (
    <div
      className={cn(`products-group-${categoryId}`, className)}
      ref={intersectionRef}
    >
      <Heading size="lg" className="font-extrabold mb-5">
        {[].find(({ id }) => id === categoryId)?.name}
      </Heading>

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

type ProductsGroupProps = PropsWithClassName & {
  products: ComponentProps<typeof ProductCard>[];
  categoryId: CategoryId;
  listClassName?: PropsWithClassName["className"];
};
