"use client";

import React, {
  ChangeEventHandler,
  ComponentProps,
  useMemo,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import { PropsWithClassName } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { CheckboxWithLabel } from "../CheckboxWithLabel";
import { Skeleton } from "@/components/ui/skeleton";

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  const {
    value,
    onChange,
    className,
    items,
    title,
    defaultItems = items,
    limit = 5,
    placeholder = "Search",
    isLoading = false,
  } = props;
  const [isShowAll, setIsShowAll] = useState(false);

  const [search, setSearch] = useState("");

  const onChangeSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  const filteredItems = useMemo(() => {
    if (search.length > 0) {
      return items
        .filter((item) =>
          item.label.trim().toLowerCase().includes(search.toLowerCase())
        )
        .slice(0, limit);
    }

    return isShowAll ? items : defaultItems.slice(0, limit);
  }, [isShowAll, items, defaultItems, limit, search]);

  const toggleShowAll = () => {
    setIsShowAll((prev) => !prev);
  };

  const handleOnCheck = (itemChecked: boolean, itemValue: string) => {
    const newValue = itemChecked
      ? [...value, itemValue]
      : value.filter((key) => key !== itemValue);
    onChange(newValue);
  };

  return (
    <div className={cn(className)}>
      <p className="font-bold mb-3">{title}</p>
      {isLoading ? (
        <div className="flex flex-col gap-4">
          {[...Array(limit)].map((_, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Skeleton className="w-4 h-4 rounded-sm" />
              <Skeleton className="h-4 w-32" />
            </div>
          ))}
        </div>
      ) : (
        <>
          {!isShowAll && (
            <div className="mb-5">
              <Input
                value={search}
                onChange={onChangeSearch}
                placeholder={placeholder}
                className="bg-gray-50 border-none"
              />
            </div>
          )}

          <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scroll-auto">
            {filteredItems.map((itemProps) => (
              <CheckboxWithLabel
                key={itemProps.value}
                {...itemProps}
                onCheck={handleOnCheck}
                checked={value.includes(itemProps.value)}
              />
            ))}
          </div>
          {items.length > limit && (
            <div
              className={isShowAll ? "border-t border-t-neutral-100 mt-4" : ""}
            >
              <button onClick={toggleShowAll} className="text-primary mt-3">
                {isShowAll ? "- Hide" : "+ Show all"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

type CheckboxGroupItem = ComponentProps<typeof CheckboxWithLabel>;

type CheckboxGroupProps = PropsWithClassName & {
  onChange: (values: string[]) => void;
  value: string[];
  title: string;
  items: CheckboxGroupItem[];
  isLoading?: boolean;
  defaultItems?: CheckboxGroupItem[];
  limit?: number;
  placeholder?: string;
};
