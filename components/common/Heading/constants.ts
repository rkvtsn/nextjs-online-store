import { PropsWithClassName, SizingType } from "@/lib/types";

type HeadingTag = `h${1 | 2 | 3 | 4 | 5}`;
type HeadingClassName = PropsWithClassName["className"];

export const HEADING_MAP: Record<
  SizingType,
  { tag: HeadingTag; className: HeadingClassName }
> = {
  xs: { tag: "h5", className: "text-[1.2em]" },
  sm: { tag: "h4", className: "text-[1.33em]" },
  md: { tag: "h3", className: "text-[1.41em]" },
  lg: { tag: "h2", className: "text-[1.53em]" },
  xl: { tag: "h1", className: "text-[1.73em]" },
  "2xl": { tag: "h1", className: "text-[1.8em]" },
};
