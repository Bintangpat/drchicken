"use client";

import Image from "next/image";
import CardList from "@/components/listcardreview";
import Valuecv from "@/components/valuecv";
import { FaLocationDot } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import React, { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex h-fit flex-col bg-white font-sans">
      <main className="relative flex h-[80vh] w-full flex-col items-center-safe overflow-hidden rounded-b-[20rem] bg-red-600 md:h-screen">
        <Image
          src="/image.png"
          alt="ayam"
          fill
          className="object-cover opacity-20"
        ></Image>
        <div className="absolute flex h-full w-full flex-col items-center-safe justify-center-safe gap-8 p-6 md:p-24">
          <h1 className="text-center text-4xl font-medium text-white md:text-6xl">
            Ayam Goreng Geprek Enak{" "}
            <span className="md:line-clamp-1">& Halal di Pringsewu</span>
            <span className="line-clamp-1 text-red-600">
              <span className="bg-white px-4 font-medium md:px-12">
                Dr.Chicken
              </span>
            </span>
          </h1>
          <p className="w-full text-center text-xs text-neutral-100 md:w-200 md:text-xl">
            Dr.Chicken menyajikan ayam goreng geprek gurih, pedas, halal, dan
            ramah di kantong. Cocok untuk makan siang, keluarga, atau kumpul
            bareng teman di Pringsewu.
          </p>
          <div className="flex w-full flex-row justify-center gap-6">
            <button className="h-fit w-fit rounded-full bg-white px-6 py-2 text-sm font-semibold text-red-600 shadow-md transition-all duration-300 ease-out hover:scale-105 md:h-16 md:w-48 md:text-xl">
              Lihat Menu
            </button>
            <button className="h-fit w-fit rounded-full border-2 border-white px-6 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 ease-out hover:scale-105 md:h-16 md:w-48 md:text-xl">
              Hubungi Kami
            </button>
          </div>
        </div>
      </main>
      <CardList />
      <Valuecv />
      <div className="h-[80vh] w-full md:h-screen">
        <div className="relative h-[50vh] w-full p-2 md:h-[70vh]">
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
                <FaLocationDot
                  size={30}
                  className="size-5 transition-all duration-300 ease-out md:group-hover:size-8 lg:size-8 lg:group-hover:size-10"
                />
                <p className="text-base font-medium transition-all delay-300 duration-300 ease-out group-hover:font-bold lg:text-2xl">
                  Tempat wonokriyo{" "}
                </p>
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
                  <p className="text-base md:text-2xl">pesan</p>
                </div>
                <div
                  className={`absolute -inset-x-12 -inset-y-0 h-fit w-fit rounded-md bg-amber-500 p-2 transition-all duration-300 ease-in-out ${isOpen ? "-inset-x-18 -inset-y-15 opacity-100 md:-inset-x-20 md:-inset-y-13" : "opacity-0"}`}
                >
                  <p className="text-base md:text-2xl">pesan</p>
                </div>

                <div
                  className={`absolute -inset-x-12 inset-y-0 h-fit w-fit rounded-md bg-amber-500 p-2 text-sm opacity-0 transition-all duration-300 ease-in-out ${isOpen ? "-inset-x-24 inset-y-0 opacity-100 md:-inset-x-35 md:inset-y-4" : "opacity-0"}`}
                >
                  <p className="text-base md:text-2xl">pesan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[30vh] w-full flex-col items-center justify-center gap-2 px-12 md:flex-row">
          <p className="w-full text-center text-xl font-medium text-black md:w-3/5 md:text-left md:text-4xl">
            rajanya ayam kriuk,{" "}
            <span className="line-clamp-1 leading-7 font-bold md:leading-10">
              untuk semua kalangan
            </span>
          </p>
          <p className="h-30 w-full text-center text-sm text-wrap text-neutral-500 md:line-clamp-3 md:w-1/3 md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-row justify-between bg-white px-12 py-20">
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
          <div className="relative flex h-full w-full overflow-hidden rounded-2xl bg-neutral-300 p-4">
            <button className="group absolute top-4 right-4 h-10 w-10 cursor-pointer rounded-[16px] bg-neutral-950 transition-all duration-900 ease-out transform-border focus:top-0 focus:right-0 focus:h-full focus:w-full active:rounded-[16px]">
              <div className="flex items-center-safe justify-center-safe">
                <FaPlus />
                <p className="hidden w-fit text-white transition-all duration-500 ease-in-out group-focus:flex">
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
        </div>
      </div>
    </div>
  );
}
