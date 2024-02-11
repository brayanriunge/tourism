import { destinationType } from "@/hooks/types";
import mara from "@/public/mara.jpg";

const destination: Array<destinationType> = [
  {
    image: "@/public/mara.jpg",
    description: "Maasai Mara",
  },
  {
    image: "@/public/tsavo.jpg",
    description: "Tsavo National Reserve",
  },
  {
    image: "@/public/amboseli.jpeg",
    description: "Amboseli National Park",
  },
];

export default function Destination() {
  return (
    <section className="pb-10 md:h-full gap-16 ">
      <div className="md:h-5/6 w-full mx-auto ">
        <h1 className="text-3xl font-bold m-5 p-5">
          Destinations <span className="text-red-700 italic">FOR YOU</span>
        </h1>
        <div className="md:flex flex-row items-center justify-between gap-4"></div>
      </div>
    </section>
  );
}
