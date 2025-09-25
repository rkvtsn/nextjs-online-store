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
import { ProductModel } from "@/app/generated/prisma-client/models";
import { useDebounce } from "@/lib/hooks/useDebounce";
import { serviceProducts } from "@/services/serviceProducts";

export const ProductsSearch = ({ className }: PropsWithClassName) => {
  const [
    isFocused,
    ,
    { toggleFalse: setFocusedFalse, toggleTrue: setFocusedTrue },
  ] = useToggle(false);

  const [products, setProducts] = useState<ProductModel[]>([]);
  const [query, setQuery] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCloseFocus = () => {
    setFocusedFalse();
    // setProducts([]);
    // setQuery("")
  };

  const debouncedSearch = useDebounce((currentQuery: string) => {
    if (!currentQuery) return setProducts([]);
    setIsLoading(true);
    serviceProducts
      .search(currentQuery)
      .then((newProducts) => {
        setProducts(newProducts);
      })
      .catch(() => {
        setProducts([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, 300);

  const handleOnQuery = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newQuery = e.target.value;
      setQuery(newQuery);
      debouncedSearch(newQuery);
    },
    [debouncedSearch]
  );

  useClickOutside(handleCloseFocus, ref);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseFocus();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnClickProduct = () => {
    handleCloseFocus();
  };

  const hasProducts = products.length > 0;
  const showResults = isFocused && (isLoading || query.length > 0);

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
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />

        <Input
          className="w-full rounded-2xl outline-none bg-gray-100 pl-10 pr-3 h-11"
          placeholder="Search product"
          onFocus={setFocusedTrue}
          value={query}
          onChange={handleOnQuery}
          aria-expanded={isFocused}
          aria-controls="search-results"
        />

        {showResults && (
          <div
            id="search-results"
            role="listbox"
            className={cn(
              "absolute w-full rounded-xl py-2 shadow-md bg-white transition-transform duration-200 origin-top scale-y-0 z-30",
              isFocused && "scale-y-100 top-12"
            )}
          >
            {isLoading && (
              <div className="flex items-center gap-2 px-3 py-2 text-gray-500">
                <span className="animate-spin h-4 w-4 border-2 border-gray-400 border-t-transparent rounded-full" />
                Searching...
              </div>
            )}

            {!isLoading &&
              hasProducts &&
              products.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  onClick={handleOnClickProduct}
                  className="flex gap-3 w-full px-3 py-2 hover:bg-primary/10 rounded-xl"
                >
                  <Image
                    src={`/images/products${product.imageUrl}`}
                    alt={product.name}
                    width={32}
                    height={32}
                    className="rounded-2xl h-8 w-8"
                  />
                  <span>{product.name}</span>
                </Link>
              ))}

            {!isLoading && !hasProducts && query.length > 0 && (
              <div className="flex gap-3 w-full px-3 py-2 rounded-xl bg-white hover:bg-primary/10 cursor-default text-gray-400">
                No products
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
