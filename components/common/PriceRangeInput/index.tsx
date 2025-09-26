import { Input } from "@/components/ui/input";
import React, { ChangeEvent } from "react";
import { RangeSlider } from "../RangeSlider";

const INPUT_RANGE_MIN = 0;
const INPUT_RANGE_MAX = 30000;

const PriceRangeInput = ({
  value,
  onChange,
  min = INPUT_RANGE_MIN,
  max = INPUT_RANGE_MAX,
}: InputRangeProps) => {

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const num = Number(e.target.value);
    const newValue = {
      ...value,
      [e.target.name]:
        e.target.name === "from"
          ? Math.min(num, value.to)
          : Math.max(num, value.from),
    };
    onChange?.(newValue);
  };

  const handleOnRangeChange = ([from, to]: number[]) => {
    onChange?.({ from, to });
  };

  return (
    <>
      <p className="font-bold mb-3">Price range:</p>
      <div className="flex gap-3 mb-5">
        <Input
          type="number"
          placeholder={`${min}`}
          min={min}
          max={max - 1}
          name="from"
          value={value.from}
          onChange={handleOnChange}
          aria-label="Minimum price"
        />
        <Input
          type="number"
          placeholder={`${max}`}
          min={min + 1}
          max={max}
          name="to"
          value={value.to}
          onChange={handleOnChange}
          aria-label="Maximum price"
        />
      </div>
      <RangeSlider
        min={min}
        max={max}
        step={10}
        value={[value.from, value.to]}
        onValueChange={handleOnRangeChange}
        aria-label="Price range slider"
      />
    </>
  );
};

export default PriceRangeInput;

type InputRangeValue = {
  from: number;
  to: number;
};

type InputRangeProps = {
  value: InputRangeValue;
  onChange?: (value: InputRangeValue) => void;
  min?: number;
  max?: number;
};
