import React from "react";
import { PropsWithClassName } from "../types";
import { cn } from "@/lib/utils";

export const CategoryFilter = ({ className }: PropsWithClassName) => {
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    ></div>
  );
};
