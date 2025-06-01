import React from "react";
import { cn } from "@/lib/utils";
import { HEADING_CLASSES_MAP, HEADING_TAGS_MAP } from "./constants";
import { HeadingProps } from "./types";

export const Heading = ({ size, children, className }: HeadingProps) => {
  const Tag = HEADING_TAGS_MAP[size];

  return (
    <Tag
      className={cn(`heading-${Tag} ${HEADING_CLASSES_MAP[size]}`, className)}
    >
      {children}
    </Tag>
  );
};
