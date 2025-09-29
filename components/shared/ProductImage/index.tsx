import { PropsWithClassName } from "@/lib/types";
import { cx } from "class-variance-authority";
import Image from "next/image";

const ProductImage = ({ imageUrl, name, className }: ProductImageProps) => {
  return (
    <Image
      src={`/images/products${imageUrl}` || "default_product.png"}
      alt={name}
      className={cx("object-cover", className)}
      fill
      priority
    />
  );
};

export default ProductImage;

type ProductImageProps = PropsWithClassName & {
  imageUrl: string | undefined | null;
  name: string;
};
