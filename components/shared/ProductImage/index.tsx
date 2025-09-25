import Image from "next/image";

const ProductImage = ({ imageUrl, name }: ProductImageProps) => {
  return (
    <Image
      src={`/images/products${imageUrl}` || "default_product.png"}
      alt={name}
      className="object-cover"
      fill
      priority
    />
  );
};

export default ProductImage;

interface ProductImageProps {
  imageUrl: string | undefined | null;
  name: string;
}
