import { ClassValue } from "clsx";

export type PropsWithClassName = {
  className?: ClassValue;
};

export type SizingType = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export type PageProps<
  TParams,
  SParams extends Record<string, string | string[] | undefined> = Record<
    string,
    string | string[] | undefined
  >
> = {
  params: Promise<TParams>;
  searchParams?: Promise<SParams>;
};
