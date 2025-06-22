import { FilterBar } from "@/components/shared/FilterBar";
import { Heading } from "@/components/shared/Heading";
import { Panel } from "@/components/shared/Panel";
import { ProductsGroup } from "@/components/shared/ProductsGroup";
import { SideFilters } from "@/components/shared/SideFilters";

export default function Home() {
  return (
    <>
      <Panel className="mt-10">
        <Heading size="lg" className="font-extrabold">
          All products
        </Heading>
        <FilterBar />

        <Panel className="mt-10 pb-14">
          <div className="gap-[60px] flex">
            <div className="w-[250px]">
              <SideFilters />
            </div>

            <div className="flex-1">
              <div className="flex flex-col gap-16">
                <ProductsGroup
                  categoryId={1}
                  products={[
                    {
                      id: 1,
                      name: "Test goods",
                      price: 0.99,
                      imageUrl:
                        "https://m.media-amazon.com/images/I/61dUcMdxR4L._AC_UL480_FMwebp_QL65_.jpg",
                      description: "best thing ever",
                    },
                    {
                      id: 2,
                      name: "Test goods",
                      price: 0.99,
                      imageUrl:
                        "https://m.media-amazon.com/images/I/61dUcMdxR4L._AC_UL480_FMwebp_QL65_.jpg",
                      description: "best thing ever",
                    },
                    {
                      id: 3,
                      name: "Test goods",
                      price: 0.99,
                      imageUrl:
                        "https://m.media-amazon.com/images/I/61dUcMdxR4L._AC_UL480_FMwebp_QL65_.jpg",
                      description: "best thing ever",
                    },
                    {
                      id: 4,
                      name: "Test goods",
                      price: 0.99,
                      imageUrl:
                        "https://m.media-amazon.com/images/I/61dUcMdxR4L._AC_UL480_FMwebp_QL65_.jpg",
                      description: "best thing ever",
                    },
                    {
                      id: 5,
                      name: "Test goods",
                      price: 0.99,
                      imageUrl:
                        "https://m.media-amazon.com/images/I/61dUcMdxR4L._AC_UL480_FMwebp_QL65_.jpg",
                      description: "best thing ever",
                    },
                    {
                      id: 6,
                      name: "Test goods",
                      price: 0.99,
                      imageUrl:
                        "https://m.media-amazon.com/images/I/61dUcMdxR4L._AC_UL480_FMwebp_QL65_.jpg",
                      description: "best thing ever",
                    },
                  ]}
                />

                <ProductsGroup
                  categoryId={2}
                  products={[
                    {
                      id: 1,
                      name: "Test goods",
                      price: 0.99,
                      imageUrl:
                        "https://m.media-amazon.com/images/I/61dUcMdxR4L._AC_UL480_FMwebp_QL65_.jpg",
                      description: "best thing ever",
                    },
                    {
                      id: 2,
                      name: "Test goods",
                      price: 0.99,
                      imageUrl:
                        "https://m.media-amazon.com/images/I/61dUcMdxR4L._AC_UL480_FMwebp_QL65_.jpg",
                      description: "best thing ever",
                    },
                    {
                      id: 3,
                      name: "Test goods",
                      price: 0.99,
                      imageUrl:
                        "https://m.media-amazon.com/images/I/61dUcMdxR4L._AC_UL480_FMwebp_QL65_.jpg",
                      description: "best thing ever",
                    },
                    {
                      id: 4,
                      name: "Test goods",
                      price: 0.99,
                      imageUrl:
                        "https://m.media-amazon.com/images/I/61dUcMdxR4L._AC_UL480_FMwebp_QL65_.jpg",
                      description: "best thing ever",
                    },
                    {
                      id: 5,
                      name: "Test goods",
                      price: 0.99,
                      imageUrl:
                        "https://m.media-amazon.com/images/I/61dUcMdxR4L._AC_UL480_FMwebp_QL65_.jpg",
                      description: "best thing ever",
                    },
                    {
                      id: 6,
                      name: "Test goods",
                      price: 0.99,
                      imageUrl:
                        "https://m.media-amazon.com/images/I/61dUcMdxR4L._AC_UL480_FMwebp_QL65_.jpg",
                      description: "best thing ever",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </Panel>
      </Panel>
    </>
  );
}
