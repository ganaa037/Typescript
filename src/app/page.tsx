import Image from "next/image";
import { TbMovie } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Home() {
  return (
    <div className="flex justify-around  ">
      <div className="flex items-center gap-2 text-blue-900">
        <TbMovie />
        <p>Movie Z</p>
      </div>
      <div className="flex gap-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex w-[379px] h-[36px] border rounded-[10px] items-center gap-[10px] p-2">
          <CiSearch className="size-5" />
          <input placeholder="Search.." className="w-full border-none"></input>
        </div>
      </div>
    </div>
  );
}
