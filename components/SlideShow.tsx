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
    <>
      <div className="max-w-full mx-auto w-full h-screen mt-24 relative">
        {slides.map((slide, index) => (
          <>
            <div
              key={index}
              className={`slide absolute h-full w-full bg-cover object-contain bg-no-repeat bg-center ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              } transition-opacity duration-100`}
              style={{
                backgroundImage: `url(${slide})`,
                backgroundSize: "contain",
              }}
            />
          </>
        ))}
        <div className="text-container absolute m-10 p-10 top-0 left-0 right-0 text-center mt-10">
          <div className=" bg-opacity-50 bg-white  items-center">
            <h1>Africa travels</h1>
            <p> we are ready to explore the world with you. </p>
          </div>
        </div>
      </div>
      <div>home </div>
    </>
  );
}
