import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphics Designer",
  "FullStack Developer",
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <Carousel className="w-full max-w-xs sm:max-w-md md:max-w-xl mx-auto my-10 md:my-20 px-8 sm:px-12">
      <CarouselContent className="-ml-2 sm:-ml-4">
        {category.map((cat, index) => (
          <CarouselItem
            key={index}
            className="pl-2 sm:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3 flex justify-center"
          >
            <Button
              onClick={() => searchJobHandler(cat)}
              variant="outline"
              className="rounded-full w-full sm:w-auto px-6 text-sm"
            >
              {cat}
            </Button>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-0 sm:-left-12" />
      <CarouselNext className="right-0 sm:-right-12" />
    </Carousel>
  );
};

export default CategoryCarousel;
