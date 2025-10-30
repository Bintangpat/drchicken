"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // kalau scroll > 50px
      } else {
        setIsScrolled(false); // posisi paling atas
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 flex w-full items-center-safe justify-center-safe px-8 py-6 text-base transition-colors duration-500 md:px-18 md:text-2xl lg:px-24">
      <nav
        className={`container flex h-12 items-center-safe justify-evenly rounded-full px-6 transition-colors duration-500 md:h-24 md:justify-between lg:px-24 ${
          isScrolled ? "bg-zinc-100 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <Link href={"/product"}>
          <button
            className={`hidden h-fit w-fit cursor-pointer rounded-full px-1 py-6 font-medium md:flex ${isScrolled ? "text-red-600" : "bg-transparent text-white"}`}
          >
            Produk
          </button>
        </Link>
        <Link href={"/about"}>
          <button
            className={`hidden h-fit w-fit cursor-pointer rounded-full px-1 py-6 font-medium sm:flex md:flex ${isScrolled ? "text-red-600" : "bg-transparent text-white"}`}
          >
            Tentang
          </button>
        </Link>
        <Link href={"/"}>
          <p
            className={`cursor-pointer text-2xl font-medium md:text-3xl md:font-bold ${isScrolled ? "text-red-600" : "text-white"}`}
          >
            Dr.Chicken
          </p>
        </Link>
        <Link href={"/contact"}>
          <button
            className={`hidden h-fit w-fit cursor-pointer rounded-full px-1 py-6 font-medium sm:flex md:flex ${isScrolled ? "text-red-600" : "bg-transparent text-white"}`}
          >
            Kontak
          </button>
        </Link>
        <Link href={"/gallery"}>
          <button
            className={`hidden h-fit w-fit cursor-pointer rounded-full px-1 py-6 font-medium md:flex ${isScrolled ? "text-red-600" : "bg-transparent text-white"}`}
          >
            Galeri
          </button>
        </Link>
      </nav>
    </div>
  );
}
