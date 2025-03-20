import React from "react";

import { Star } from "lucide-react";
export const Card = () => {
  return (
    <div className="w-[230px] h-[439px] bg-[#F4F4F5] rounded-[8px]">
      <img
        className="w-[229.73px] h-[340px] rounded-[8px]"
        src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/sharedimages/2024/11/dear-santa-poster.jpg?q=50&fit=crop&w=480&dpr=1.5"
      ></img>
      <div className="flex flex-col w-[214px] h-[79px] p-[8px]">
        <p className="flex flex-row items-center">
          <Star className="fill-yellow-300 h-4" /> 6.9/10
        </p>
        <p className="text">Dear Santa</p>
      </div>
    </div>
  );
};
