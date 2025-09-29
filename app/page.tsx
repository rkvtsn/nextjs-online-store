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

  try {
    categories = await getCategoriesWithProducts(searchParams);
  } catch (e) {
    console.error("Home page: error fetching categories:", e);
  }

  return (
    <>
      <Panel className="mt-10 pr-10 pl-10">
        <Heading size="lg" className="font-extrabold">
          All products
        </Heading>
        <FilterBar categories={categories} />

        <Panel className="mt-10 pb-14">
          <div className="gap-[60px] flex">
            <div className="w-[250px]">
              <ProductsFilter />
            </div>

            <div className="flex-1">
              <div className="flex flex-col gap-5">
                {categories.filter(({ product }) => !!product?.length)
                  .length === 0 ? (
                  <div className="empty-state">
                    <h2 className="empty-state__title">No categories found</h2>
                    <p className="empty-state__text">
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
