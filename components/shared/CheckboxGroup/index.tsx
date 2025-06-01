"use client";

import React, { ComponentProps, useMemo, useState } from "react";
import { PropsWithClassName } from "@/components/shared/types";
import { cn } from "@/lib/utils";
import { FilterCheckbox } from "../FilterCheckbox";
import { Input } from "@/components/ui/input";

type CheckboxGroupItem = ComponentProps<typeof FilterCheckbox>;

type CheckboxGroupProps = PropsWithClassName & {
  title: string;
  items: CheckboxGroupItem[];
  defaultItems?: CheckboxGroupItem[];
  limit?: number;
  placeholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
};

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  const {
    className,
    items,
    title,
    defaultItems,
    defaultValue,
    onChange,
    limit = 5,
    placeholder = "Search",
  } = props;
  const [isShowAll, setIsShowAll] = useState(false);

  const filteredItems = useMemo(() => {
    return isShowAll ? items : items.slice(0, limit);
  }, [isShowAll, items, limit]);

  const toggleShowAll = () => {
    setIsShowAll((prev) => !prev);
  };

  return (
    <div className={cn(className)}>
      <p className="font-bold mb-3">{title}</p>

      {isShowAll && (
        <div className="mb-5">
          <Input placeholder={placeholder} className="bg-gray-50 border-none" />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scroll-auto">
        {filteredItems.map((itemProps) => (
          <FilterCheckbox key={itemProps.label} {...itemProps} onCheck={null} />
        ))}
      </div>
      {items.length > limit && (
        <div className={isShowAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button onClick={toggleShowAll}>
            {isShowAll ? "- Hide" : "+ Show all"}
          </button>
        </div>
      )}
    </div>
  );
};
