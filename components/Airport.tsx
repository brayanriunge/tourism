import Image from "next/image";
import airport from "@/public/airport.jpeg";

export default function Airport() {
  return (
    <section className="pb-10 gap-16 md:h-full ">
      <div className="mx-auto  md:flex justify-between items-center  md:h-5/6  w-5/6 gap-6 ">
        <div className=" md:basis-3/5 z-10 md:mt-32  ">
          <h1 className="text-3xl pb-4 font-bold m-5 p-5">
            Airport
            <span className="text-red-700 italic"> Transport</span>
          </h1>
          <div className="text-lg font-bold  justify-content md:mb-10 ">
            Experience seamless and stress-free travel with our exceptional
            airport transportation services that elevate your journey from
            touchdown to check-in. Arrive in style and comfort with our fleet of
            luxurious vehicles, ensuring a smooth transition from the airport to
            your hotel. We guarantee a prompt and reliable service that
            complements the sophistication of your trip. Start your adventure
            the moment you step off the plane, and let us take care of the
            details, allowing you to focus on enjoying every moment of your
            travel. Trust us to make your airport transfer a seamless and
            memorable part of your overall journey.
          </div>
        </div>
        <div className="md:z-10 md:mt-16 md:basis-3/5">
          <Image
            src={airport}
            height={340}
            width={600}
            alt="airport"
            className="rounded-xl mt-6 "
          />
        </div>
      </div>
    </section>
  );
}
