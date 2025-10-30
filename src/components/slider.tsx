import React, { useState } from "react";
import { motion } from "framer-motion";

// Data dummy
const cardData = [
  { id: 1, color: "#ef4444", emoji: "🔴" },
  { id: 2, color: "#f97316", emoji: "🟠" },
  { id: 3, color: "#eab308", emoji: "🟡" },
  { id: 4, color: "#22c55e", emoji: "🟢" },
  { id: 5, color: "#3b82f6", emoji: "🔵" },
  { id: 6, color: "#6366f1", emoji: " indigo " },
  { id: 7, color: "#8b5cf6", emoji: "🟣" },
  { id: 8, color: "#8b5cf6", emoji: "🟣" },
  { id: 9, color: "#8b5cf6", emoji: "🟣" },
  { id: 10, color: "#8b5cf6", emoji: "🟣" },
  { id: 11, color: "#8b5cf6", emoji: "🟣" },
  { id: 12, color: "#22c55e", emoji: "🟢" },
  { id: 13, color: "#8b5cf6", emoji: "🟣" },
  { id: 14, color: "#8b5cf6", emoji: "🟣" },
];

// --- Komponen Kartu ---
// Bertanggung jawab untuk menghitung dan menganimasikan posisinya sendiri
function Card({ card, index, activeIndex, radius, anglePerItem }) {
  // Hitung selisih posisi dari kartu aktif
  const offset = index - activeIndex;

  // Hitung sudut target untuk kartu ini
  // Kartu aktif di 0 derajat, tetangganya di +/- anglePerItem, dst.
  const targetAngle = offset * anglePerItem;

  // Konversi sudut ke radian untuk fungsi Math.sin/cos
  // Kita kurangi 90 derajat agar 0 derajat berada di atas (pukul 12)
  const angleRad = (targetAngle - 90) * (Math.PI / 180);

  // Hitung posisi X dan Y menggunakan trigonometri
  const x = radius * Math.cos(angleRad);
  // Y dihitung dari atas, jadi kita tambahkan radius agar busur "turun" dari titik (0,0)
  const y = radius * Math.sin(angleRad) + radius;

  // Rotasi kartu sama dengan sudutnya
  const rotate = targetAngle;

  return (
    <motion.div
      className="absolute flex h-28 w-28 items-center justify-center rounded-2xl text-5xl font-bold shadow-lg"
      style={{
        backgroundColor: card.color,
        // Z-index agar kartu di depan menutupi yang di belakang
        zIndex: cardData.length - Math.abs(offset),
      }}
      // Animasikan ke posisi dan rotasi yang sudah dihitung
      animate={{ x, y, rotate }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {card.emoji}
    </motion.div>
  );
}

// --- Komponen Carousel Utama ---
export default function ArcCarousel2D() {
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(cardData.length / 2),
  );

  // --- Parameter Geometri Busur ---
  // Sesuaikan nilai ini untuk mengubah tampilan busur
  const RADIUS = 350; // Jari-jari lingkaran (px)
  const ANGLE_PER_ITEM = 25; // Sudut antar kartu (derajat)

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cardData.length);
  };

  const handlePrev = () => {
    // Modulo trick untuk looping ke belakang
    setActiveIndex((prev) => (prev - 1 + cardData.length) % cardData.length);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gray-900 text-white">
      {/* Container untuk carousel, di mana perhitungan posisi terjadi */}
      <div className="relative h-[500px] w-full">
        {/* Titik Poros / Pusat Lingkaran (untuk visualisasi) */}
        <div
          className="absolute top-0 left-100 h-4 w-4 rounded-full bg-red-500/50"
          style={{ transform: `translate(-50%, ${RADIUS}px)` }}
        >
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-red-400">
            POROS
          </div>
        </div>

        {/* Wrapper untuk semua kartu. Posisinya di tengah horizontal. */}
        <div className="h-ful absolute flex w-full items-center-safe justify-center-safe">
          {cardData.map((card, index) => (
            <Card
              key={card.id}
              card={card}
              index={index}
              activeIndex={activeIndex}
              radius={RADIUS}
              anglePerItem={ANGLE_PER_ITEM}
            />
          ))}
        </div>
      </div>

      {/* Konten & Kontrol */}
      <div className="z-10 mt-16 flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-bold">Gather here</h1>
        <p className="max-w-xs text-gray-400">
          Our platform is currently in beta and invite-only. Request an invite
          now.
        </p>
        <button className="mt-4 rounded-full bg-white px-8 py-3 font-semibold text-black transition-transform hover:scale-105">
          Join Gather
        </button>
        <div className="mt-8 flex gap-4">
          <button
            onClick={handlePrev}
            className="h-12 w-12 rounded-full bg-gray-700 text-2xl"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="h-12 w-12 rounded-full bg-gray-700 text-2xl"
          >
            ›
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 max-w-2xl rounded-lg bg-gray-800 p-6 text-gray-300">
        <h3 className="mb-3 text-lg font-semibold text-white">
          Cara Kerja (2D Trigonometri):
        </h3>
        <ul className="list-inside list-disc space-y-2 text-sm">
          <li>
            <strong className="text-purple-400">State:</strong> Kita hanya
            menyimpan `activeIndex`, yaitu indeks kartu yang ada di tengah
            (atas).
          </li>
          <li>
            <strong className="text-green-400">Posisi:</strong> Setiap kartu
            menghitung posisinya sendiri di busur menggunakan `sin()` dan
            `cos()` berdasarkan jaraknya dari `activeIndex`.
          </li>
          <li>
            <strong className="text-blue-400">Rotasi:</strong> Rotasi setiap
            kartu disetel agar sama dengan sudutnya di busur, membuatnya tampak
            "menghadap" ke arah yang benar.
          </li>
          <li>
            <strong className="text-yellow-400">Animasi:</strong> Framer Motion
            menggunakan prop `animate` untuk memindahkan kartu ke posisi barunya
            secara mulus setiap kali `activeIndex` berubah.
          </li>
        </ul>
      </div>
    </div>
  );
}
