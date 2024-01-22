import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
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
        <div className={`${flexBetween} w-full text-gray-700 gap-10 `}>
          {/**logo */}
          <Link href="/ ">
            <Image
              className="rounded-full"
              src={Logo}
              height={94}
              width={64}
              alt="logo"
            />
          </Link>
          <h2 className="text-3xl font-bold ">African Travels</h2>
          {/**on the left */}
          {isAboveMediumScreen ? (
            <div className="flex w-5/6 items-center justify-between">
              <div className={`${flexBetween} gap-8`}>
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
          {/**nobile view */}
          {isAboveMediumScreen && isMenuToggled && (
            <div className="fixed right-0 bottom-0 h-ful w-[333px] bg-blue-200">
              <div className="flex p-4 justify-end">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <HiOutlineX className="h-6 w-6" />
                </button>
              </div>
              <div className="flex flex-col gap-4 text-2xl items-center">
                <Link href={"/"}>Home</Link>
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
          )}
        </div>
      </div>
    </div>
  );
}
