"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "./ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional: Icon library

const localProducts = [
  { name: "Buy Best Products", image: "/carousel/1.jpg" },
  { name: "Authentic Quality", image: "/carousel/2.jpg" },
  { name: "Give your-Self model Looks", image: "/carousel/3.jpg" },
];

export const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % localProducts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % localProducts.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? localProducts.length - 1 : prev - 1));
  };

  const product = localProducts[current];

  return (
    <Card className="relative h-[80vh] w-full bg-neutral-300 overflow-hidden rounded-xl shadow-xl border-none">
      <div className="relative h-full w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-700 ease-in-out"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <CardContent className="absolute bottom-1 left-0 right-0 z-20 p-6 text-center text-neutral-300">
        <CardTitle className="text-2xl sm:text-5xl font-bold mb-2">
          {product.name}
        </CardTitle>
      </CardContent>
    </Card>
  );
};
