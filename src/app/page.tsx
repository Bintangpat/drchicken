"use client";

import Image from "next/image";
import CardList from "@/components/listcardreview";
import Valuecv from "@/components/valuecv";
import React, { useState } from "react";
import Baner2 from "@/components/baner2";
import Menu2 from "@/components/menu2";

import Maps from "@/components/maps";

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
          </div>
        </div>
      </main>
      <CardList />
      <div className="relative flex h-fit w-full flex-col items-center-safe justify-center-safe">
        <Valuecv />
        <Baner2 />
        <Menu2 />
        <Maps />
      </div>
      <footer className="flex flex-col bg-red-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col items-center-safe gap-12 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-3xl font-bold">
                <span className="text-red-400">Dr</span>.CHICKEN
              </h3>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
              © 2025 Dr.Chicken. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
