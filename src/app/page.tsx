import Image from "next/image";

import { Navbar } from "@/components/Navbar";
import { Movie } from "@/components/Movie";
import { UpcomingCard } from "@/components";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col gap-[52px]">
      <Movie />
      <UpcomingCard></UpcomingCard>
      </div>
      <Footer></Footer>
    </div>
  );
}
