"use client";

import React, { useState } from "react";
import { Search, X } from "lucide-react";
import Image from "next/image";

// Gallery Page Component
export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["all", "products", "lifestyle", "events", "community"];

  const galleryItems = [
    {
      id: 1,
      category: "products",
      title: "Vegan White Cheddar",
      image: "/AB1.png",
      color: "from-yellow-300 to-yellow-500",
    },
    {
      id: 2,
      category: "lifestyle",
      title: "Snack Time",
      image: "/AB2.png",
      color: "from-teal-300 to-teal-500",
    },
    {
      id: 3,
      category: "products",
      title: "Nacho Cheese",
      image: "/AS1.png",
      color: "from-orange-300 to-orange-500",
    },
    {
      id: 4,
      category: "events",
      title: "Festival Fun",
      image: "/AS2.png",
      color: "from-purple-300 to-purple-500",
    },
    {
      id: 5,
      category: "community",
      title: "Team Hippeas",
      image: "/ASN1.png",
      color: "from-pink-300 to-pink-500",
    },
    {
      id: 6,
      category: "products",
      title: "Bohemian BBQ",
      image: "/ABN1.png",
      color: "from-red-300 to-red-500",
    },
    {
      id: 7,
      category: "lifestyle",
      title: "Healthy Living",
      image: "/estehsedang.png",
      color: "from-green-300 to-green-500",
    },
    {
      id: 8,
      category: "events",
      title: "Launch Party",
      image: "/estehsedang.png",
      color: "from-blue-300 to-blue-500",
    },
    {
      id: 9,
      category: "products",
      title: "Sriracha Sunshine",
      image: "/estehsedang.png",
      color: "from-yellow-400 to-orange-400",
    },
    {
      id: 10,
      category: "community",
      title: "Give Peas A Chance",
      image: "/estehsedang.png",
      color: "from-teal-400 to-green-400",
    },
    {
      id: 11,
      category: "lifestyle",
      title: "On The Go",
      image: "/estehsedang.png",
      color: "from-indigo-300 to-indigo-500",
    },
    {
      id: 12,
      category: "events",
      title: "Summer Vibes",
      image: "/estehsedang.png",
      color: "from-orange-400 to-red-400",
    },
  ];

  const filteredItems = galleryItems.filter(
    (item) =>
      (activeFilter === "all" || item.category === activeFilter) &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      {/* Hero Section */}
      <div className="h-screen bg-gradient-to-b from-red-600 to-white py-20">
        <div className="mx-auto flex h-full max-w-7xl flex-col items-center-safe justify-center-safe px-6 text-center">
          <h2 className="mb-4 text-6xl font-bold text-white">Galeri Kami</h2>
          <p className="mx-auto max-w-2xl text-xl text-white">
            Explore the colorful world of Hippeas through our collection of
            products, lifestyle moments, and community events
          </p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="sticky top-16 z-40 border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search
                className="absolute top-1/2 left-4 -translate-y-1/2 transform text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search gallery..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border-2 border-gray-200 py-3 pr-4 pl-12 focus:border-teal-400 focus:outline-none"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute top-1/2 right-4 -translate-y-1/2 transform text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`rounded-full px-6 py-2 font-semibold capitalize transition-all ${
                    activeFilter === category
                      ? "bg-teal-500 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="flex w-full flex-col items-center-safe bg-white px-6 py-12">
        <div className="container grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative cursor-pointer overflow-hidden rounded-md outline-red-600 transition-all duration-300 hover:shadow-2xl hover:outline-1"
            >
              <div
                className={`aspect-square bg-gradient-to-br ${item.color} flex transform items-center justify-center transition-transform duration-500 group-hover:scale-110`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="w-full p-6 text-white">
                  <h3 className="mb-1 text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-300 capitalize">
                    {item.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-2xl text-gray-400">No items found</p>
            <p className="mt-2 text-gray-500">
              Try adjusting your search or filter
            </p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-b from-white to-red-600 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="mb-4 text-4xl font-bold text-white">
            Join Our Community
          </h3>
          <p className="mb-8 text-xl text-white">
            Share your Hippeas moments with #GivePeasAChance
          </p>
          <div className="flex justify-center gap-4">
            <button className="rounded-lg bg-white px-8 py-4 font-bold text-teal-600 transition hover:bg-gray-100">
              Follow Us
            </button>
            <button className="rounded-lg bg-gray-800 px-8 py-4 font-bold text-white transition hover:bg-gray-900">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
