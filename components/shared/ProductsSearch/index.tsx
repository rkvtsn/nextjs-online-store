"use client";

import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useClickOutside } from "@/lib/hooks/useClickOutside";
import { useToggle } from "@/lib/hooks/useToggle";
import { PropsWithClassName } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/app/generated/prisma-client";
import { useDebounce } from "@/lib/hooks/useDebounce";
import { serviceProducts } from "@/services/serviceProducts";

export const ProductsSearch = ({ className }: PropsWithClassName) => {
  const [
    isFocused,
    ,
    { toggleFalse: setFocusedFalse, toggleTrue: setFocusedTrue },
  ] = useToggle(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const debouncedSearch = useDebounce(() => {
    serviceProducts.search(query).then(setProducts);
  }, 300);

  const handleOnQuery = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newQuery = e.target.value;
      setQuery(newQuery);
      debouncedSearch();
    },
    [debouncedSearch]
  );

  useClickOutside(setFocusedFalse, ref);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFocusedFalse();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnClickProduct = () => {
    setFocusedFalse();
    setQuery("");
  };

  return (
    <>
      {isFocused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30"></div>
      )}
      <div
        ref={ref}
        className={cn(
          "search-input flex rounded-2xl flex-1 justify-between relative h-11 z-30",
          className
        )}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <Input
          className="rounded-2xl outline-node w-full bg-gray-100"
          placeholder="Search product"
          onFocus={setFocusedTrue}
          value={query}
          onChange={handleOnQuery}
          aria-expanded={isFocused}
          aria-controls="search-results"
        />
        {!!products.length && (
          <div
            id="search-results"
            role="listbox"
            className={cn(
              "absolute w-full rounded-xl py-2 shadow-md transition-all duration-200 invisible opacity-0 z-30",
              isFocused && "visible opacity-100 top-12"
            )}
          >
            {products.map((product) => (
              <Link
                href={`/product/${product.id}`}
                onClick={handleOnClickProduct}
                className="flex gap-3 w-full px-3 py-2 hover:bg-primary/10"
                key={product.id}
              >
                <Image
                  className="rounded-2xl h-8 w-8"
                  src={product.imageUrl}
                  alt={product.name}
                  width={32}
                  height={32}
                />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
