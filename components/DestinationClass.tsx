import Image, { StaticImageData } from "next/image";

type props = {
  picture: StaticImageData;
  description: string;
};
export default function DestinationClass({ picture, description }: props) {
  const overLayStyles = `p-5 absolute z-30 flex h-[400px] w-[450px] 
    flex-col items-center justify-center whitespace-normal 
    bg-blue-400 text-center text-white opacity-0 transition 
    duration-500 hover:opacity-90`;
  return (
    <li className="mx-5 relative inline-block h-[380px] w-[450px]">
      <div className={overLayStyles}>
        <h1 className="text-2xl font-bold">{description}</h1>
      </div>

      <Image src={picture} alt={`${picture}`} height={380} width={450} />
    </li>
  );
}
