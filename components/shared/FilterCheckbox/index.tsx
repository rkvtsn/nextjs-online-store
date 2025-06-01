import { Checkbox } from "@/components/ui/checkbox";
import React, { PropsWithChildren } from "react";

type FilterCheckboxProps = PropsWithChildren & {
  label: string;
  value: string;
  onCheck?: (checked: boolean) => void;
  checked?: boolean;
};

export const FilterCheckbox = ({
  label,
  value,
  checked,
  children,
  onCheck,
}: FilterCheckboxProps) => {
  const id = `checkbox-${value}`;
  return (
    <div className="filter-checkbox flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheck}
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
