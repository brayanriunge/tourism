import { destinationType } from "@/hooks/types";
import mara from "@/public/mara.jpg";
import tsavo from "@/public/Tsavo.jpg";
import amboseli from "@/public/amboseli.jpeg";
import DestinationClass from "./DestinationClass";

const destinations: Array<destinationType> = [
  {
    picture: mara,
    description: "Maasai Mara",
  },
  {
    picture: tsavo,
    description: "Tsavo National Reserve",
  },
  {
    picture: amboseli,
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
        <div className="h-[353px] mt-10 w-full overflow-x-auto overflow-y-hidden">
          <ul className="whitespace-nowrap w-[2800px]">
            {destinations.map((item: destinationType, index) => (
              <DestinationClass
                key={index}
                picture={item.picture}
                description={item.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
