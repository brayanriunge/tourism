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
    <div className="min-w-full mx-auto w-full mt-28 relative">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide absolute h-80 w-full bg-cover object-contain *:bg-center ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          } transition-opacity duration-100`}
          style={{ background: `url(${slide})` }}
        />
      ))}
    </div>
  );
}
