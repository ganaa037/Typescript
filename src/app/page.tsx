import Image from "next/image";

import { Navbar } from "@/components/Navbar";
import { Movie } from "@/components/Movie";
import { UpcomingCard } from "@/components";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Movie />
      <UpcomingCard></UpcomingCard>
    </div>
  );
}
