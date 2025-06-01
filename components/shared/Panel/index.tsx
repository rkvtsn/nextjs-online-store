import { cn } from "@/lib/utils";
import { PropsWithClassName } from "../types";
import { PropsWithChildren } from "react";

export const Panel = ({
  className,
  children,
}: PropsWithClassName & PropsWithChildren) => {
  return (
    <div className={cn("panel mx-auto max-w-[1280px]", className)}>
      {children}
    </div>
  );
};
