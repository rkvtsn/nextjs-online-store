import { PropsWithChildren } from "react";
import { PropsWithClassName, SizingType } from "@/lib/types";

export type HeadingProps = PropsWithClassName &
  PropsWithChildren & { size: SizingType };
