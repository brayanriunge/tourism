import Navbar from "@/components/Navbar";
import SlideShow from "@/components/SlideShow";

export default function Home() {
  const imageSlides = ["antelope.jpeg", "cheetah.jpeg", "owl.jpeg"];
  return (
    <>
      <Navbar />
      <SlideShow slides={imageSlides} />
    </>
  );
}
