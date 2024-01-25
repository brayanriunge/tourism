import Airport from "@/components/Airport";
import Navbar from "@/components/Navbar";
import SlideShow from "@/components/SlideShow";

export default function Home() {
  const imageSlides = ["lions.jpeg", "giraffe.jpeg", "water.jpeg"];
  return (
    <>
      <Navbar />
      <SlideShow slides={imageSlides} />
      <Airport />
    </>
  );
}
