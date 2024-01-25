import Image from "next/image";
import airport from "@/public/airport.jpeg";

export default function Airport() {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-yellow-500  ">
      <div className="m-16 p-10  md:flex justify-between items-center gap-16 w-5/6 md:h-5/6 mt-0 mb-0">
        <div className="   ">
          <h1 className="text-3xl pb-4 font-bold ">
            Airport
            <span className="text-red-700 italic"> Transport</span>
          </h1>
          <div className="text-lg font-bold  justify-content">
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
        <Image
          src={airport}
          height={340}
          width={600}
          alt="airport"
          className="rounded-xl"
        />
      </div>
    </section>
  );
}
