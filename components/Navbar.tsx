import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

export default function Navbar() {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreen = useMediaQuery("min-h-width: 720px");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  return (
    <div className={`${flexBetween} fixed z-30 top-0 shadow bg-gray-800 py-6 `}>
      <div className={`${flexBetween} mx-auto w-full`}>
        <div className={`${flexBetween} w-full gap-10`}>
          {/**logo */}

          {/**on the left */}
          {isAboveMediumScreen ? (
            <div></div>
          ) : (
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <HiMenu className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
