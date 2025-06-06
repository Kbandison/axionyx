"use client";
import { useEffect, useRef, useState } from "react";

// No props needed for this global background
export default function GridBackground() {
  // ---- Mouse orb state ----
  const orbRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Mouse movement handler
  useEffect(() => {
    function handleMove(e: MouseEvent) {
      if (orbRef.current) {
        const orb = orbRef.current;
        const { width, height } = orb.getBoundingClientRect();
        setCoords({
          x: e.clientX - width / 2,
          y: e.clientY - height / 2,
        });
      }
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Pulse animation effect
  useEffect(() => {
    if (!orbRef.current) return;
    const orb = orbRef.current;
    orb.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.09)" },
        { transform: "scale(1)" },
      ],
      {
        duration: 3200,
        iterations: Infinity,
        easing: "cubic-bezier(0.4,0,0.2,1)",
      }
    );
  }, []);

  return (
    <>
      {/* --- The animated grid background (SVG pattern, stretches across the viewport) --- */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none bg-base"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0.35) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0.35) 100%)",
        }}
      >
        <svg
          width="100%"
          height="100%"
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.13 }}
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 V 40 M 0 40 H 40"
                stroke="#fff"
                strokeWidth="0.7"
                vectorEffect="non-scaling-stroke"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      {/* --- The global mouse-following orb --- */}
      <div
        ref={orbRef}
        className="pointer-events-none fixed w-[10vw] h-[10vw] rounded-full blur-3xl opacity-70 z-20 md:block hidden"
        style={{
          left: `${coords.x}px`,
          top: `${coords.y}px`,
          background:
            "radial-gradient(ellipse at center, var(--vermillion) 0%, var(--pale-red) 60%, transparent 100%)",
          // transition: "left 0.02 linear, top 0.2s linear",
        }}
        aria-hidden="true"
      />
    </>
  );
}
