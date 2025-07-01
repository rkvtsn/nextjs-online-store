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

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  const {
    className,
    items,
    title,
    defaultItems = items,
    // defaultValue,
    // onChange,
    limit = 5,
    placeholder = "Search",
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

  const handleOnCheck = () => {
    // onChange
  };

  return (
    <div className={cn(className)}>
      <p className="font-bold mb-3">{title}</p>

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
            key={itemProps.label}
            {...itemProps}
            onCheck={handleOnCheck}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={isShowAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button onClick={toggleShowAll} className="text-primary mt-3">
            {isShowAll ? "- Hide" : "+ Show all"}
          </button>
        </div>
      )}
    </div>
  );
};

type CheckboxGroupItem = ComponentProps<typeof CheckboxWithLabel>;

type CheckboxGroupProps = PropsWithClassName & {
  title: string;
  items: CheckboxGroupItem[];
  defaultItems?: CheckboxGroupItem[];
  limit?: number;
  placeholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
};
