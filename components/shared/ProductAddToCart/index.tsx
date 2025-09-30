"use client";

import { Dispatch, SetStateAction } from "react";
import { Plus, Minus } from "lucide-react";
import { PropsWithClassName } from "@/lib/types";

const ProductAddToCart = ({
  max,
  min,
  onQuantity,
  quantity,
  onAdd,
}: ProductAddToCartProps) => {
  const increment = () => {
    onQuantity((q) => q + 1);
  };

  const decrement = () => {
    onQuantity((q) => q - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onQuantity(Number(e.target.value));
  };

  return (
    <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full max-w-lg mx-auto">
      <div
        className="flex items-center border rounded-lg overflow-hidden"
        role="group"
        aria-label="Quantity selector"
      >
        <button
          type="button"
          onClick={decrement}
          className="px-3 py-2 text-gray-600 hover:bg-gray-100 flex items-center justify-center cursor-pointer"
          aria-label="Decrease quantity"
          disabled={quantity <= min}
        >
          <Minus size={16} />
        </button>

        <input
          type="number"
          value={quantity}
          onChange={handleChange}
          className="w-14 text-center outline-none"
          aria-label="Product quantity"
          min={min}
          max={max}
        />

        <button
          type="button"
          onClick={increment}
          className="px-3 py-2 text-gray-600 hover:bg-gray-100 flex items-center justify-center cursor-pointer"
          aria-label="Increase quantity"
          disabled={quantity >= max}
        >
          <Plus size={16} />
        </button>
      </div>

      <button
        type="button"
        className="flex-1 px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white font-semibold rounded-lg hover:from-gray-800 hover:to-gray-600 active:scale-95 transition transform shadow-md cursor-pointer"
        aria-label={`Add ${quantity} items to cart`}
        onClick={onAdd}
        disabled={quantity < min || quantity > max}
      >
        Add {quantity} to Cart
      </button>
    </div>
  );
};

export default ProductAddToCart;

type ProductAddToCartProps = PropsWithClassName & {
  quantity: number;
  min: number;
  max: number;
  onQuantity: Dispatch<SetStateAction<number>>;
  onAdd: () => void;
};
