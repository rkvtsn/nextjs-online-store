import { Heading } from "@/components/common/Heading";
import { Panel } from "@/components/common/Panel";
import { FilterBar } from "@/components/shared/FilterBar";
import { ProductsGroup } from "@/components/shared/ProductsGroup";
import { ProductsFilter } from "@/components/shared/ProductsFilter";
import { getCategoriesWithProducts } from "@/services/server/getCategoriesWithProducts";
import { TFilterSearchParams } from "@/services/models/FilterSearchParams";
import { TReturnGetCategoriesWithProducts } from "@/services/server/types";

export const dynamic = "force-dynamic";

export default async function Home({ searchParams }: HomeProps) {
  let categories: Awaited<TReturnGetCategoriesWithProducts> = [];
  let productsCount = 0;
  try {
    categories = await getCategoriesWithProducts(searchParams);
    productsCount = categories.filter(
      ({ product }) => !!product?.length
    ).length;
  } catch (e) {
    console.error("Home page: error fetching categories:", e);
  }

  return (
    <>
      <Panel className="mt-3 pr-10 pl-10">
        <Heading size="lg" className="font-extrabold">
          Catalog
        </Heading>
        <FilterBar categories={categories} />

        <Panel className="mt-10 pb-14">
          <div className="gap-[60px] flex">
            <div className="w-[250px]">
              <ProductsFilter />
            </div>

            <div className="flex-1">
              <div className="flex flex-col gap-5">
                {productsCount === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                      No categories found
                    </h2>
                    <p className="text-gray-500 text-center">
                      We couldn’t find any categories matching your filters.
                    </p>
                  </div>
                ) : (
                  categories.map((category) => (
                    <ProductsGroup
                      key={category.id}
                      category={category}
                      products={category.product}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </Panel>
      </Panel>
    </>
  );
}

type HomeProps = {
  searchParams?: Promise<TFilterSearchParams>;
};
