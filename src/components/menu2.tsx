import Image from "next/image";
import { FaPlus } from "react-icons/fa6";

export default function () {
  return (
    <div className="container flex flex-row justify-between bg-white py-20">
      <div className="md:grids-rows-2 relative grid h-[120vh] w-full gap-4 md:h-[35vh] md:grid-cols-2 lg:grid-cols-4">
        <div className="relative flex h-full w-full overflow-hidden rounded-2xl bg-neutral-300 p-4">
          <button className="group absolute top-4 right-4 h-10 w-10 cursor-pointer rounded-[30px] bg-neutral-950 transition-all duration-900 ease-out transform-border focus:top-0 focus:right-0 focus:h-full focus:w-full focus:rounded-[16px]">
            <div className="flex items-center-safe justify-center-safe">
              <FaPlus />
              <p className="hidden w-fit text-white transition-all duration-500 ease-out group-focus:flex">
                halo
              </p>
            </div>
          </button>

          <h1 className="text-4xl text-black">
            2+<span className="line-clamp-1">berjalan</span>
          </h1>
          <h2></h2>
          <p></p>
        </div>
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-neutral-300 object-contain">
          <button className="group absolute top-4 right-4 z-10 h-10 w-10 cursor-pointer rounded-[30px] bg-neutral-950 transition-all duration-900 ease-out transform-border focus:top-0 focus:right-0 focus:h-full focus:w-full focus:rounded-[16px]">
            <div className="flex items-center-safe justify-center-safe">
              <FaPlus />
              <p className="hidden w-fit text-white transition-all duration-500 ease-out group-focus:flex">
                halo
              </p>
            </div>
          </button>
          <Image
            src="/chickenfriedfootage.webp"
            alt="ayam"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative flex h-full w-full overflow-hidden rounded-2xl bg-neutral-300 p-4">
          <button className="group absolute top-4 right-4 h-10 w-10 cursor-pointer rounded-[30px] bg-neutral-950 transition-all duration-900 ease-out transform-border focus:top-0 focus:right-0 focus:h-full focus:w-full focus:rounded-[16px]">
            <div className="flex items-center-safe justify-center-safe">
              <FaPlus />
              <p className="hidden w-fit text-white transition-all duration-500 ease-out group-focus:flex">
                halo
              </p>
            </div>
          </button>

          <h1 className="text-4xl text-black">
            2+<span className="line-clamp-1">berjalan</span>
          </h1>
          <h2></h2>
          <p></p>
        </div>
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-neutral-300 object-contain">
          <button className="group absolute top-4 right-4 z-10 h-10 w-10 cursor-pointer rounded-[30px] bg-neutral-950 transition-all duration-900 ease-out transform-border focus:top-0 focus:right-0 focus:h-full focus:w-full focus:rounded-[16px]">
            <div className="flex items-center-safe justify-center-safe">
              <FaPlus />
              <p className="hidden w-fit text-white transition-all duration-500 ease-out group-focus:flex">
                halo
              </p>
            </div>
          </button>
          <Image
            src="/chickenfriedfootage.webp"
            alt="ayam"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
