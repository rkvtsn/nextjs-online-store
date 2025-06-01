import { PropsWithChildren } from "react";
import { PropsWithClassName } from "../types";
import { HEADING_TAGS_MAP } from "./constants";

type HeadingSize = keyof typeof HEADING_TAGS_MAP;

export type HeadingProps = PropsWithClassName &
  PropsWithChildren & { size: HeadingSize };
