import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heading, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PropsWithClassName } from "@/lib/types";

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
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          {/* @todo: skeleton and src == undefined */}
          <Image
            src={imageUrl || ""}
            alt={name}
            className="w-[200px] h-[200px]"
          />
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
  id: number;
  price: number;
  name: string;
  imageUrl?: string;
  description?: string;
};
