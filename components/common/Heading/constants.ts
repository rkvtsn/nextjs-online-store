import { PropsWithClassName, SizingType } from "@/lib/types";

type HeadingTag = `h${1 | 2 | 3 | 4 | 5}`;
type HeadingClassName = PropsWithClassName["className"];

export const HEADING_MAP: Record<
  SizingType,
  { tag: HeadingTag; className: HeadingClassName }
> = {
  xs: { tag: "h5", className: "text-[16px]" },
  sm: { tag: "h4", className: "text-[22px]" },
  md: { tag: "h3", className: "text-[26px]" },
  lg: { tag: "h2", className: "text-[32px]" },
  xl: { tag: "h1", className: "text-[40px]" },
  "2xl": { tag: "h1", className: "text-[48px]" },
};
