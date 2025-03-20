import Image from "next/image";

import { Navbar } from "@/components/Navbar";
import { Movie } from "@/components/Movie";

import { Footer } from "@/components/Footer";
import { Genres } from "@/components";

export default function Home() {
  return (
    <div className="w-[1440px]">
      <Navbar />
      <div className="flex flex-col gap-[52px]">
        <Movie />
        <Genres />
      </div>
      <Footer />
    </div>
  );
}
