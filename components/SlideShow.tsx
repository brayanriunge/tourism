import { useEffect, useState } from "react";

interface SlideShowProps {
  slides: string[];
}

export default function SlideShow({ slides }: SlideShowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [slides]);
  return (
    <div className="max-w-2xl mx-auto relative">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide absolute h-60 w-full bg-cover bg-center ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          } transition-opacity duration-100`}
          style={{ background: `url(${slide})` }}
        />
      ))}
    </div>
  );
}
