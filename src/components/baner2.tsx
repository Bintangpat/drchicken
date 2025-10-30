import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

export default function Baner2() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative container h-fit w-full">
      <div className="relative h-120 max-h-[940px] w-full p-2 2xl:h-300">
        <div className="relative h-full w-full overflow-hidden rounded-xl bg-neutral-500">
          <Image src="/image.png" alt="ayam" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 flex h-full w-full flex-col justify-between p-6 md:p-12">
          <div className="flex h-fit flex-col gap-6">
            <p className="h-fit text-2xl font-medium md:max-w-100 md:text-4xl lg:max-w-200 lg:text-6xl">
              {" "}
              ayam geprek tiada tanding,
              <span> terpercaya oleh banyak pelanggan. </span>
            </p>
          </div>
          <div className="flex w-full flex-row justify-between">
            <div className="group flex cursor-pointer flex-row items-center gap-4">
              <Link
                href="https://maps.app.goo.gl/VwZfzENmYe4KACNH9"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-4"
              >
                <FaLocationDot
                  size={30}
                  className="size-5 transition-all duration-300 ease-out md:group-hover:size-8 lg:size-8 lg:group-hover:size-10"
                />
                <p className="text-base font-medium transition-all delay-300 duration-300 ease-out group-hover:font-bold lg:text-2xl">
                  Tempat wonokriyo{" "}
                </p>
              </Link>
            </div>
            <div
              onClick={handleToggle}
              className="group relative flex h-10 w-10 cursor-pointer items-center-safe justify-center-safe rounded-full bg-amber-400 font-semibold shadow-md md:h-20 md:w-20"
            >
              <FaPlus
                className={`text-2xl transition-all duration-500 ease-out lg:text-4xl ${isOpen ? "rotate-180" : ""}`}
              />
              <div
                className={`absolute -inset-x-0 -top-0 h-fit w-fit rounded-md bg-amber-500 p-2 transition-all duration-300 ease-in-out ${isOpen ? "-inset-x-2 -top-25 opacity-100 md:inset-x-0" : "opacity-0"}`}
              >
                <p className="text-base md:text-2xl"></p>
              </div>
              <div
                className={`absolute -inset-x-12 -inset-y-0 h-fit w-fit rounded-md bg-amber-500 p-2 transition-all duration-300 ease-in-out ${isOpen ? "-inset-x-18 -inset-y-15 opacity-100 md:-inset-x-20 md:-inset-y-13" : "opacity-0"}`}
              >
                <p className="text-base md:text-2xl"></p>
              </div>

              <div
                className={`absolute -inset-x-12 inset-y-0 h-fit w-fit rounded-md bg-amber-500 p-2 text-sm opacity-0 transition-all duration-300 ease-in-out ${isOpen ? "-inset-x-24 inset-y-0 opacity-100 md:-inset-x-35 md:inset-y-4" : "opacity-0"}`}
              >
                <p className="text-base md:text-2xl">Harga terjangkau</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-2 py-50 pt-12 md:flex-row">
        <p className="w-full text-center text-xl font-medium text-black md:w-3/5 md:text-left md:text-4xl">
          rajanya ayam kriuk,{" "}
          <span className="line-clamp-1 leading-7 font-bold md:leading-10">
            untuk semua kalangan
          </span>
        </p>
        <p className="h-30 w-full text-center text-sm text-wrap text-neutral-500 md:line-clamp-3 md:w-1/3 md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
