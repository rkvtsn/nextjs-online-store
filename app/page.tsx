import { FilterBar } from "@/components/shared/FilterBar";
import { Heading } from "@/components/shared/Heading";
import { Panel } from "@/components/shared/Panel";
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
              <div className="flex flex-col gap-16">Products</div>
            </div>
          </div>
        </Panel>
      </Panel>
    </>
  );
}
