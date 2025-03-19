import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { Play } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Movie = () => {
  return (
    <div>
      <Carousel>
        <CarouselContent className="relative">
          <CarouselItem>
            <img
              className="w-full h-[600px] "
              src="https://i.ytimg.com/vi/5omDWGdDmJ8/maxresdefault.jpg"
            ></img>
            <div className="absolute top-[178px] left-[140px] text-[#FAFAFA] flex gap-4 flex-col ">
              <div>
                <p className="text-[16px] font-normal leading-6 text-[#FFF]">
                  Now Playing:
                </p>
                <p className="text-[#FFF] text-[36px] font-bold leading-10">
                  Wicked
                </p>
                <p className="flex">
                  <Star className="fill-yellow-300" /> 6.9/10
                </p>
              </div>
              <p className="w-[302px] text-[12px] leading-4 font-normal text-[#FAFAFA]">
                Elphaba, a misunderstood young woman because of her green skin,
                and Glinda, a popular girl, become friends at Shiz University in
                the Land of Oz. After an encounter with the Wonderful Wizard of
                Oz, their friendship reaches a crossroads
              </p>
              <Button className="bg-[#FFFFFF] text-[black] w-[145px] h-10">
                <Play />
                Watch Trailer
              </Button>
            </div>
          </CarouselItem>
          <CarouselItem>
            <img
              className="w-full h-[600px] "
              src="https://i.ytimg.com/vi/5omDWGdDmJ8/maxresdefault.jpg"
            ></img>
          </CarouselItem>
          <CarouselItem>
            <img
              className="w-full h-[600px]"
              src="https://i.ytimg.com/vi/5omDWGdDmJ8/maxresdefault.jpg"
            ></img>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
