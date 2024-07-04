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

export default function SlideShow() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setIndex(selectedIndex);
  };
  return (
    <CCarousel controls indicators>
      <CCarouselItem>
        <CImage className="d-block w-100" src={Giraffe.src} alt="slide 1" />
        <CCarouselCaption className="d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </CCarouselCaption>
      </CCarouselItem>
    </CCarousel>
    // <Carousel
    //   activeIndex={index}
    //   onSelect={handleSelect}
    //   className="min-h-screen w-full mt-24 "
    // >
    //   <Carousel.Item className="bg-antelope bg-cover bg-center min-h-screen w-5/6 mx-auto">
    //     <Carousel.Caption className="flex flex-col items-center justify-center py-10  ">
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
