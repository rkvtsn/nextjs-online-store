import { Heading } from "@/components/shared/Heading";
import { Panel } from "@/components/shared/Panel";

export default function Home() {
  return (
    <>
      <Panel className="mt-10">
        <Heading size="lg" className="font-extrabold">
          All products
        </Heading>
      </Panel>
    </>
  );
}
