"use client";
import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ from = 0, to = 12000, duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { initial: true });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.floor(v)), // update angka tiap frame
    });

    return () => controls.stop();
  }, [inView, from, to, duration]);

  return <span ref={ref}>{value.toLocaleString()}</span>;
}

export default function Valuecv() {
  return (
    <div className="flex h-fit w-full flex-col items-center justify-evenly gap-6 bg-neutral-50 px-4 py-8 sm:flex-row sm:gap-4 sm:py-12 md:py-24">
      <div className="flex w-full flex-row items-center justify-evenly gap-6 sm:w-auto sm:gap-12 md:w-1/2 md:gap-24">
        <div className="flex flex-col items-center sm:items-start">
          <p className="text-3xl font-medium text-black md:text-5xl">
            <Counter to={12000} duration={2} />
          </p>
          <p className="text-center text-lg font-medium text-black sm:text-right md:text-xl">
            Penjualan
          </p>
        </div>
        <div className="absolute hidden h-1 w-16 rounded-2xl bg-neutral-300 sm:flex sm:h-12 sm:w-1 md:h-16" />
        <div className="flex flex-col items-center sm:items-start">
          <p className="text-3xl font-medium text-black md:text-5xl">
            <Counter to={100} duration={2} /> +
          </p>
          <p className="text-center text-lg font-medium text-black sm:text-right md:text-xl">
            Pelanggan percaya
          </p>
        </div>
      </div>
      <div className="h-1 w-1/2 rounded-2xl bg-neutral-300 sm:h-12 sm:w-1 md:h-16" />
      <div className="flex w-full flex-row items-center justify-evenly gap-6 sm:w-auto sm:gap-12 md:w-1/2 md:gap-24">
        <div className="flex flex-col items-center sm:items-start">
          <p className="text-3xl font-medium text-black md:text-5xl">
            <Counter to={12000} duration={2} />
          </p>
          <p className="text-center text-lg font-medium text-black sm:text-right md:text-xl">
            Penjualan
          </p>
        </div>
        <div className="absolute hidden h-1 w-16 rounded-2xl bg-neutral-300 sm:flex sm:h-12 sm:w-1 md:h-16" />
        <div className="flex flex-col items-center sm:items-start">
          <p className="text-3xl font-medium text-black md:text-5xl">
            <Counter to={12000} duration={2} />
          </p>
          <p className="text-center text-lg font-medium text-black sm:text-right md:text-xl">
            Penjualan
          </p>
        </div>
      </div>
    </div>
  );
}
