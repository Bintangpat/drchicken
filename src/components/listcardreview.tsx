"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  animate,
  AnimationPlaybackControls,
} from "framer-motion";
import Cardreview from "@/components/cardreview";
import { cardreviewdata } from "@/data/reviewcard";

export default function CardList() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const animRef = useRef<AnimationPlaybackControls | null>(null);
  const [oneWidth, setOneWidth] = useState(0);

  // berapa detik untuk menyelesaikan 1 loop penuh (sesuaikan)
  const FULL_DURATION = 100;

  // ukur lebar setelah render & saat resize
  useEffect(() => {
    if (!scrollerRef.current) return;

    const measure = () => {
      const totalW = scrollerRef.current!.offsetWidth; // width of duplicated content
      setOneWidth(totalW / 2); // width of single pass
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(scrollerRef.current);

    return () => {
      ro.disconnect();
      animRef.current?.stop?.();
    };
  }, []);

  // helper untuk memulai/lanjutkan loop dari posisi `from`
  const startLoopFrom = (from = 0) => {
    if (!oneWidth || oneWidth === 0) return;

    const target = -oneWidth;
    const remaining = Math.abs(target - from); // sisa jarak (px)
    const speed = oneWidth / FULL_DURATION; // px per second
    const duration = remaining / speed; // detik untuk menyelesaikan sisa

    // stop animasi sebelumnya jika ada
    animRef.current?.stop?.();

    // animate() mengembalikan kontrol yang punya .stop()
    animRef.current = animate(x, target, {
      duration,
      ease: "linear",
      onComplete: () => {
        // pulihkan ke 0 dan ulangi loop penuh
        x.set(0);
        startLoopFrom(0);
      },
    });
  };

  // start otomatis saat width sudah tersedia
  useEffect(() => {
    // beri sedikit delay supaya layout stabil
    const t = setTimeout(() => startLoopFrom(0), 40);
    return () => {
      clearTimeout(t);
      animRef.current?.stop?.();
    };
  }, [oneWidth]);

  const handleHoverStart = () => {
    animRef.current?.stop?.(); // freeze di posisi sekarang
  };

  const handleHoverEnd = () => {
    // lanjutkan dari posisi saat ini
    startLoopFrom(x.get());
  };

  return (
    <div className="flex h-fit w-full flex-col items-center justify-center transition-all duration-500 ease-out">
      <div className="relative w-full overflow-hidden py-12">
        <motion.div
          ref={scrollerRef}
          className="flex w-max gap-4"
          style={{ x }}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
        >
          {/* duplikat 2x supaya loop terlihat mulus */}
          {Array(4)
            .fill(0)
            .map((_, idx) => (
              <div key={idx} className="flex flex-row gap-4">
                {cardreviewdata.map((item, index) => (
                  <Cardreview
                    key={`${idx}-${index}`}
                    nama={item.nama}
                    deskripsi={item.deskripsi}
                  />
                ))}
              </div>
            ))}
        </motion.div>
      </div>
    </div>
  );
}
