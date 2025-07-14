import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { PropsWithClassName } from "@/lib/types";

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
