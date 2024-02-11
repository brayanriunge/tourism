import { useEffect, useState } from "react";

interface SlideShowProps {
  slides: string[];
}

export default function SlideShow({ slides }: SlideShowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides]);
  return (
    <div className=" mx-auto  h-screen  relative">
      {slides.map((slide, index) => (
        <>
          <div
            key={index}
            className={`slide absolute h-full w-full bg-cover object-contain bg-no-repeat bg-center ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            } transition-opacity duration-100`}
            style={{
              backgroundImage: `url(${slide})`,
              backgroundSize: "cover",
            }}
          />
        </>
      ))}

      <div className="m-10 py-10  ">
        <div className="text-container right-0 bg-white bg-opacity-40 m-10 p-10 left-0 rounded-2xl w-1/2 absolute py-10  text-center ">
          <div className="  items-center">
            <h1 className="text-3xl font-bold mb-2">Africa travels</h1>
            <p className="text-lg">
              {" "}
              we are ready to explore the world with you.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
