import React from "react";
import { cn } from "@/lib/utils";
import { HeadingProps } from "./types";
import { HEADING_MAP } from "./constants";

export const Heading = ({ size, children, className }: HeadingProps) => {
  const Tag = HEADING_MAP[size].tag;

  return (
    <Tag
      className={cn(
        `heading heading-${Tag} ${HEADING_MAP[size].className}`,
        className
      )}
    >
      {children}
    </Tag>
  );
};
