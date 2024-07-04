import Image from "next/image";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import Giraffe from "@/public/giraffe.jpeg";

export default function SlideShow() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Image src={Giraffe} alt="first slide" />
      </Carousel.Item>
    </Carousel>
  );
}
