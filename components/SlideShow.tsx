import Image from "next/image";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import Giraffe from "@/public/giraffe.jpeg";

export default function SlideShow() {
  return (
    <Carousel data-bs-theme="dark" className="min-h-screen w-full mt-24 ">
      <Carousel.Item className="bg-slate-50">
        <Image src={Giraffe} alt="first slide" className="d-block w-100" />
        <Carousel.Caption>
          ready to visit nice sights with giraffes
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
