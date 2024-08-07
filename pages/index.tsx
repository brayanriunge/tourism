import Airport from "@/components/Airport";
import Destination from "@/components/Destination";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import SlideShow from "@/components/SlideShow";
import SlideShows from "@/components/SlideShows";

export default function Home() {
  const imageSlides = ["lions.jpeg", "giraffe.jpeg", "water.jpeg"];
  return (
    <Layout>
      <SlideShow />
      <Airport />
      <Destination />
    </Layout>
  );
}
