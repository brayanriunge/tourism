import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import Logo from "@/public/Logo.jpeg";

export default function Navbar() {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  return (
    <div
      className={`${flexBetween} fixed z-30 top-0 shadow bg-blue-200 py-4  w-full`}
    >
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full text-gray-700  gap-8`}>
          {/**logo */}
          <Link href="/ ">
            <Image
              className="rounded-full"
              src={Logo}
              height={64}
              width={64}
              alt="logo"
            />
          </Link>
          <h2 className="text-3xl font-bold ">African Travels</h2>
          {/**on the left */}
          {isAboveMediumScreen ? (
            <div className="flex  items-center justify-between">
              <div className={`${flexBetween} gap-4 `}>
                <Link href={"/"}>
                  <p>Home</p>
                </Link>
                <Link href={"/"}>
                  <p>Our team</p>
                </Link>
                <Link href={"/"}>
                  <p>Contact Us</p>
                </Link>
                <Link href={"/"}>
                  <p>About Us</p>
                </Link>
              </div>
            </div>
          ) : (
            <button
              className="rounded-md"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <HiMenu className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
