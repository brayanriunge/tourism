import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import Giraffe from "@/public/giraffe.jpeg";
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
];

export default function SlideShow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <CCarousel
      controls
      indicators
      dark
      transition="crossfade"
      className=" w-full mt-24 "
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
            <p className="m-6 p-6 text-lg font-semibold">{slide.description}</p>
          </CCarouselCaption>
        </CCarouselItem>
      ))}
    </CCarousel>
    // <Carousel
    //   activeIndex={index}
    //   onSelect={handleSelect}
    //   className="min-h-screen w-full mt-24 "
    // >
    //   <Carousel.Item className="bg-antelope bg-cover bg-center min-h-screen w-5/6 mx-auto">
    //     <Carousel.Caption ">
    //       <h3 className="m-6 p-6 font-bold font-mono text-xl">site visits</h3>
    //       <p className="m-6 p-6    text-lg font-semibold">
    //         ready to visit nice sights with giraffes
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item className="bg-antelope bg-cover bg-center min-h-screen w-5/6 mx-auto">
    //     <Carousel.Caption className="flex flex-col items-center justify-center py-10  ">
    //       <h3 className="m-6 p-6 font-bold font-mono text-xl">site visits</h3>
    //       <p className="m-6 p-6    text-lg font-semibold">
    //         ready to visit nice sights with giraffes
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
  );
}
