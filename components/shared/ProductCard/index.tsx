import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PropsWithClassName } from "@/lib/types";
import ProductImage from "../ProductImage";
import { Heading } from "@/components/common/Heading";

export const ProductCard = ({
  id,
  name,
  price,
  className,
  imageUrl,
  description,
}: ProductCardProps) => {
  return (
    <div className={cn("product-card", className)}>
      <Link href={`/product/${id}`} className="block">
        <div className="relative w-full h-[260px] rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-200">
          <ProductImage
            imageUrl={imageUrl}
            name={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <Heading
          size="sm"
          className="mt-3 mb-1 font-bold text-gray-800 truncate"
        >
          {name}
        </Heading>

        <p className="text-sm text-gray-500 line-clamp-2">{description}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[1em] font-medium text-gray-800">
            <span className="text-gray-500">from </span>${price ?? "-"}
          </span>
          <Button
            variant="secondary"
            className="text-base font-bold flex items-center gap-1 px-3 py-1 rounded-md hover:bg-gray-100 active:scale-95 transition"
          >
            <Plus size={20} />
            Add
          </Button>
        </div>
      </Link>
    </div>
  );
};

type ProductCardProps = PropsWithClassName & {
  id: number;
  price: number;
  name: string;
  imageUrl?: string;
  description?: string;
};
