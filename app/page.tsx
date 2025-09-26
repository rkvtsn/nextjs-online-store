import { Heading } from "@/components/common/Heading";
import { Panel } from "@/components/common/Panel";
import { FilterBar } from "@/components/shared/FilterBar";
import { ProductsGroup } from "@/components/shared/ProductsGroup";
import { ProductsFilter } from "@/components/shared/ProductsFilter";
import { serviceCategories } from "@/services/serviceCategories";
import { CategoryWithProductsModel } from "@/services/models/Categories";

export const dynamic = "force-dynamic";

export default async function Home() {
  let categories: CategoryWithProductsModel[] = [];

  try {
    categories = await serviceCategories.getWithProducts();
  } catch (e) {
    console.error("Home page: error fetching categories:", e);
  }

  return (
    <>
      <Panel className="mt-10 pr-10 pl-10">
        <Heading size="lg" className="font-extrabold">
          All products
        </Heading>
        <FilterBar />

        <Panel className="mt-10 pb-14">
          <div className="gap-[60px] flex">
            <div className="w-[250px]">
              <ProductsFilter />
            </div>

            <div className="flex-1">
              <div className="flex flex-col gap-5">
                {categories.length === 0 && (
                  <div style={{ color: "red" }}>
                    Categories array is empty. Check logs.
                  </div>
                )}

                {categories.map((category) => (
                  <ProductsGroup
                    key={category.id}
                    category={category}
                    products={category.product}
                  />
                ))}
              </div>
            </div>
          </div>
        </Panel>
      </Panel>
    </>
  );
}
