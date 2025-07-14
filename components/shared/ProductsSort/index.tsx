import React from "react";
import { ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { PropsWithClassName } from "@/lib/types";

export const ProductsSort = ({ className }: PropsWithClassName) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer",
        className
      )}
    >
      <ArrowUpDown size={16} />
      <b>Sorting:</b>
      <b className="text-primary">popular</b>
    </div>
  );
};
