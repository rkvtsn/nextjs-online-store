import Image from "next/image";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Panel } from "@/components/common/Panel";
import { PropsWithClassName } from "@/lib/types";
import Link from "next/link";
import { ProductsSearch } from "@/components/shared/ProductsSearch";

export const Header = ({ className }: PropsWithClassName) => {
  return (
    <header className={cn("header border border-b", className)}>
      <Panel className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Logo" width={35} height={35} />
            <div>
              <h1 className="uppercase font-black text-2xl">super store</h1>
              <p className="text-gray-400 text-sm">always best and with you</p>
            </div>
          </div>
        </Link>
        <div className="mx-10 flex-1">
          <ProductsSearch />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-3 flex items-center">
            <User size={16} /> Login
          </Button>

          <div>
            <Button className="group relative">
              <b>$</b>
              <span className="h-full w-[1px] bg-white/30 mx-3"></span>
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} className="relative" strokeWidth={3} />
                <b>_</b>
              </div>
              <ArrowRight
                size={20}
                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Panel>
    </header>
  );
};
