"use client";

import React, { useState } from "react";
import { ShoppingCart, Search, X } from "lucide-react";

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
      image: "bg-yellow-400",
      color: "from-yellow-300 to-yellow-500",
    },
    {
      id: 2,
      category: "lifestyle",
      title: "Snack Time",
      image: "bg-teal-400",
      color: "from-teal-300 to-teal-500",
    },
    {
      id: 3,
      category: "products",
      title: "Nacho Cheese",
      image: "bg-orange-400",
      color: "from-orange-300 to-orange-500",
    },
    {
      id: 4,
      category: "events",
      title: "Festival Fun",
      image: "bg-purple-400",
      color: "from-purple-300 to-purple-500",
    },
    {
      id: 5,
      category: "community",
      title: "Team Hippeas",
      image: "bg-pink-400",
      color: "from-pink-300 to-pink-500",
    },
    {
      id: 6,
      category: "products",
      title: "Bohemian BBQ",
      image: "bg-red-400",
      color: "from-red-300 to-red-500",
    },
    {
      id: 7,
      category: "lifestyle",
      title: "Healthy Living",
      image: "bg-green-400",
      color: "from-green-300 to-green-500",
    },
    {
      id: 8,
      category: "events",
      title: "Launch Party",
      image: "bg-blue-400",
      color: "from-blue-300 to-blue-500",
    },
    {
      id: 9,
      category: "products",
      title: "Sriracha Sunshine",
      image: "bg-yellow-500",
      color: "from-yellow-400 to-orange-400",
    },
    {
      id: 10,
      category: "community",
      title: "Give Peas A Chance",
      image: "bg-teal-500",
      color: "from-teal-400 to-green-400",
    },
    {
      id: 11,
      category: "lifestyle",
      title: "On The Go",
      image: "bg-indigo-400",
      color: "from-indigo-300 to-indigo-500",
    },
    {
      id: 12,
      category: "events",
      title: "Summer Vibes",
      image: "bg-orange-500",
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
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <button className="text-sm">shop ▼</button>
            <button className="text-sm">learn ▼</button>
            <button className="text-sm">subscribe</button>
          </div>

          <h1 className="text-3xl font-bold tracking-wider">HIPPEAS</h1>

          <div className="flex items-center gap-6">
            <button className="text-sm">find a store</button>
            <button className="text-sm">account</button>
            <button className="relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-teal-400 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-4 text-6xl font-bold text-white">OUR GALLERY</h2>
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
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div
                className={`aspect-square bg-gradient-to-br ${item.color} flex transform items-center justify-center transition-transform duration-500 group-hover:scale-110`}
              >
                <div className="p-6 text-center">
                  <div className="mb-2 text-6xl font-bold text-white">
                    HIPPEAS
                  </div>
                  <div className="mx-auto h-24 w-24 rounded-full bg-white/30"></div>
                </div>
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
      <div className="bg-gradient-to-r from-teal-400 to-teal-500 py-16">
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
