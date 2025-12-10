"use client";

import React from "react";
import Image from "next/image";

export default function ProductPage() {
  const relatedProducts = [
    {
      name: "Ayam Medium + Nasi + Sambal",
      price: 10000,
      img: "/ASN1.png",
    },
    {
      name: "Ayam Besar + Nasi + Sambal",
      price: 15000,
      img: "/ABN1.png",
    },
    {
      name: "Ayam Besar",
      price: 10000,
      img: "/AB1.png",
    },
    {
      name: "Ayam Medium",
      price: 7000,
      img: "/AS1.png",
    },
    {
      name: "Esteh Medium",
      price: 3000,
      img: "/estehsedang.png",
    },
    {
      name: "Esteh Besar",
      price: 5000,
      img: "/estehsedang.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
      <div className="flex h-fit w-full justify-center-safe bg-white bg-gradient-to-br py-16">
        <div className="container px-6">
          <h2 className="mb-8 text-5xl font-bold text-gray-800">
            Menu yang ditawarkan
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((product, index) => (
              <div
                key={index}
                className="relative flex h-100 flex-col items-center-safe overflow-hidden rounded-2xl text-red-900 shadow-lg"
              >
                <div className="relative mb-4 flex h-80 w-80 items-center justify-center overflow-auto rounded-xl bg-orange-400">
                  {product.img ? (
                    <Image
                      src={product.img}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-gray-500">
                      No image available
                    </div>
                  )}
                </div>

                <div className="hover: flex flex-col items-center p-4 text-red-600">
                  <h3 className="mb-1 text-lg font-bold">{product.name}</h3>
                  <span className="text-xl font-bold">Rp {product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
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
