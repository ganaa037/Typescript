import React from "react";
import { Upcoming } from "./Upcoming";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
export const UpcomingCard = () => {
  return (
   <div className="px-[80px]">
      <div className="flex items-center justify-between ">
        <p>Upcoming</p>
        <Button className="bg-[#FFFFFF] text-[black] w-[145px] h-10">
          See more
          <MoveRight />
        </Button>
      </div>
       <div className="flex gap-[32px] ">
      <Upcoming />
      <Upcoming />
      <Upcoming />
      <Upcoming />
      <Upcoming />
     
    </div>
    </div>
  );
};
