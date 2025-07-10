"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-base"
      id="home"
    >
      {/* Hero image background */}
      <Image
        src="/20250606_0058_City Night Light Trails_simple_compose_01jx1shrevfh6bc070263wgg97.png" // Replace with your real image!
        alt="Futuristic city at night with red neon accents"
        fill
        priority
        className="absolute inset-0 w-full h-full object-cover z-10 opacity-70"
        aria-hidden="true"
      />

      {/* Gradient overlay for readability */}
      <div
        className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-transparent"
        aria-hidden="true"
      />

      {/* Animated, mouse-following, pulse orb */}

      {/* Fallback subtle orb/gradient for mobile */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 w-full h-full md:hidden bg-gradient-to-br from-vermillion/30 via-pale-red/10 to-transparent blur-2xl opacity-60 z-30"
      />

      {/* Main hero content */}
      <div className="relative z-40 max-w-2xl mx-auto text-center flex flex-col items-center">
        <h1 className="font-orbitron text-vermillion text-5xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg opacity-0 animate-fade-in">
          Digital leverage, created beyond the launch point.
        </h1>
        <p className="font-sora text-xl md:text-2xl mb-8 text-light-gray drop-shadow opacity-0 animate-fade-in-delay">
          From launch to legacy—empowering brands to scale and win with ongoing
          innovation.
        </p>
        <button
          className="
    btn-cta
    bg-vermillion text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg
    transition-all duration-200
    hover:scale-105 hover:shadow-2xl
    active:scale-98
    focus-visible:ring-4 focus-visible:ring-vermillion/40
    opacity-0 animate-fade-in-late
  "
        >
          Begin My Legacy
        </button>
        <p className="mt-6 text-light-gray text-base opacity-0 animate-fade-in-late">
          Let’s talk about how Axionyx can help you grow.
        </p>
      </div>
    </section>
  );
}
