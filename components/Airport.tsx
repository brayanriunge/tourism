import Image from "next/image";
import airport from "@/public/airport.jpeg";

export default function Airport() {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-blue-500 mt-0 ">
      <div className="m-10 p-10  flex justify-between items-center gap-8 w-5/6">
        <Image
          src={airport}
          height={340}
          width={600}
          alt="airport"
          className="rounded-xl"
        />
        <div className="text-lg font-bold">
          Experience seamless and stress-free travel with our exceptional
          airport transportation services that elevate your journey from
          touchdown to check-in. Arrive in style and comfort with our fleet of
          luxurious vehicles, ensuring a smooth transition from the airport to
          your hotel. Our professional and courteous chauffeurs are dedicated to
          providing you with a first-class experience, handling all aspects of
          your transportation needs. We guarantee a prompt and reliable service
          that complements the sophistication of your trip. Start your adventure
          the moment you step off the plane, and let us take care of the
          details, allowing you to focus on enjoying every moment of your
          travel. Trust us to make your airport transfer a seamless and
          memorable part of your overall journey.
        </div>
      </div>
    </section>
  );
}
