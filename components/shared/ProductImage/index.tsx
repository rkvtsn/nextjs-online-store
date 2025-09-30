import { PUBLIC_PRODUCTS } from "@/lib/constants";
import { PropsWithClassName } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
const ProductImage = ({
  imageUrl,
  name,
  className,
  size = "lg",
}: ProductImageProps) => {
  const sizesMap = {
    xs: 37,
    sm: 80,
    md: 160,
    lg: 320,
  };

  const fallbackSrc = PUBLIC_PRODUCTS + "/default_product.png";

  return (
    <div
      className={cn(
        "relative rounded-lg overflow-hidden bg-gray-100",
        className
      )}
      style={{ width: sizesMap[size], height: sizesMap[size] }}
    >
      <Image
        src={imageUrl ? `${PUBLIC_PRODUCTS}${imageUrl}` : fallbackSrc}
        alt={name}
        className="object-cover w-full h-full"
        fill
        priority
        sizes={`${sizesMap[size]}px`}
      />
    </div>
  );
};

export default ProductImage;

type ProductImageProps = PropsWithClassName & {
  imageUrl?: string | null;
  name: string;
  size?: "sm" | "md" | "lg" | "xs";
};
