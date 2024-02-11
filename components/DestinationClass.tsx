import Image from "next/image";

type props = {
  image: string;
  description: string;
};
export default function DestinationClass({ image, description }: props) {
  const overLayStyles = `p-5 absolute z-30 flex h-[400px] w-[450px] 
    flex-col items-center justify-center whitespace-normal 
    bg-primary-500 text-center text-white opacity-0 transition 
    duration-500 hover:opacity-90`;
  return (
    <li className="mx-5 relative inline-block h-[380px] w-[450px]">
      <div className={overLayStyles}>
        <h1>{description}</h1>
      </div>

      <Image src={image} alt={`${image}`} />
    </li>
  );
}
