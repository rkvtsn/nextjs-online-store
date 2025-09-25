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
      <Link href={`/product/${id}`}>
        <div className="relative w-full h-[260px] rounded-lg overflow-hidden">
          {/* @todo: skeleton and src == undefined */}
          <ProductImage imageUrl={imageUrl} name={name} />
        </div>
        <Heading size="sm" className="mb-1 mt-3 font-bold">
          {name}
        </Heading>
        <p className="text-sm text-gray-400">{description}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">${price}</span>
          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Add
          </Button>
        </div>
      </Link>
    </div>
  );
};

type ProductCardProps = PropsWithClassName & {
  id: string;
  price: number;
  name: string;
  imageUrl?: string;
  description?: string;
};
