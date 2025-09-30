import ProductFeatureTags from "@/components/shared/ProductFeatureTags";
import ProductForm from "@/components/shared/ProductForm";
import ProductImage from "@/components/shared/ProductImage";
import { PageProps } from "@/lib/types";
import { getProduct } from "@/services/server/getProduct";
import { TReturnGetProduct } from "@/services/server/types";
import { notFound } from "next/navigation";

const ProductPage = async ({ params }: PageProps<ProductPageProps>) => {
  const { id } = await params;
  let product: TReturnGetProduct | null = null;
  try {
    product = await getProduct(Number(id));
    console.log({ product });
  } catch (e) {
    console.log(e);
  }
  if (product === null) {
    notFound();
  }

  return (
    <div className="grid grid-cols-[auto_1fr] gap-6 mx-auto">
      <div className="flex flex-col gap-4 justify-center items-center h-full pl-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          {product.name}
        </h1>
        <ProductImage
          imageUrl={product.imageUrl}
          name={product.name}
          size="lg"
        />
        <ProductFeatureTags features={product.features} />
      </div>

      <ProductForm product={product} />
    </div>
  );
};

export default ProductPage;

interface ProductPageProps {
  id: string;
}
