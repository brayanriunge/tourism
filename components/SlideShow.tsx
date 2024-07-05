import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import Giraffe from "@/public/giraffe.jpeg";
import Antelope from "@/public/antelope.jpeg";
import Cheetah from "@/public/cheetah.jpeg";
import {
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage,
} from "@coreui/react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported
import "@coreui/coreui/dist/css/coreui.min.css";

const slides = [
  {
    src: Giraffe.src,
    label: "First Slide",
    alt: "first",
    description: "ready to see the wild ",
  },
  {
    src: Antelope.src,
    label: "First Slide",
    alt: "first",
    description: "ready to see the wild ",
  },
  {
    src: Cheetah.src,
    label: "First Slide",
    alt: "first",
    description: "ready to see the wild ",
  },
];

export default function SlideShow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="relative w-full mt-24">
      <CCarousel
        controls
        indicators
        dark
        transition="crossfade"
        className=" w-full  "
        activeIndex={activeIndex}
      >
        {slides.map((slide, index) => (
          <CCarouselItem
            key={index}
            className={`carousel-item ${
              activeIndex === index ? "carousel-item-active" : ""
            } mx-auto`}
          >
            <CImage src={Giraffe.src} className=" mx-auto w-5/6" />
            <CCarouselCaption className="flex flex-col items-center justify-center py-10  ">
              <h5 className="m-6 p-6 font-bold font-mono text-xl">
                {slide.label}
              </h5>
              <p className="m-6 p-6 text-lg font-semibold">
                {slide.description}
              </p>
            </CCarouselCaption>
          </CCarouselItem>
        ))}
      </CCarousel>
    </div>
  );
}
