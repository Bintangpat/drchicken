import React from "react";

export type cardreviewProps = {
  nama: string;
  deskripsi: string;
};

export default function cardreview({ nama, deskripsi }: cardreviewProps) {
  return (
    <div className="group relative h-50 w-50 overflow-hidden rounded-2xl bg-white p-6 text-red-600 outline-1 outline-red-400 transition-all duration-500 ease-out hover:bg-red-600 hover:text-white hover:shadow-xl md:h-50 md:w-82">
      <h1 className="text-xl font-bold md:text-2xl">{nama}</h1>
      <p className="text-xs font-medium italic md:text-base">{deskripsi}</p>
      <button className="absolute inset-0 top-50 rounded-2xl bg-white px-3 py-3 text-red-600 transition-all duration-500 ease-out group-hover:top-30">
        Click me
      </button>
    </div>
  );
}
