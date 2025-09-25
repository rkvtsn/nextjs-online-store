import { PageProps } from "@/lib/types";
import React from "react";

const ProductPage = async ({ params }: PageProps<ProductPageProps>) => {
  const { id } = await params;
  return <div>{id}</div>;
};

export default ProductPage;

interface ProductPageProps {
  id: string;
}
