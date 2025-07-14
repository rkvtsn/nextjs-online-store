import React, { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { PropsWithClassName } from "@/lib/types";
import { Checkbox } from "@/components/ui/checkbox";

export const CheckboxWithLabel = ({
  label,
  value,
  checked,
  children,
  onCheck,
  className,
}: CheckboxWithLabelProps) => {
  const id = `checkbox-${value}`;

  const handleOnCheck = (checked: boolean) => {
    onCheck?.(checked, value);
  };

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Checkbox
        onCheckedChange={handleOnCheck}
        value={value}
        checked={checked}
        id={id}
        className="rounded-[8px] w-6 h-6"
      />
      <label htmlFor={id} className="leading-none cursor-pointer flex-1">
        {label}
      </label>
      {children}
    </div>
  );
};

type CheckboxWithLabelProps<V = string> = PropsWithChildren &
  PropsWithClassName & {
    label: string;
    value: V;
    onCheck?: (checked: boolean, value: V) => void;
    checked?: boolean;
  };
