"use client";
import { motion } from "framer-motion";

const values = ["Visionary", "Precision", "Partnership", "Innovation"];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 flex flex-col items-center bg-base overflow-x-clip"
    >
      <motion.div
        className="absolute left-6 top-10 bottom-10 w-px bg-vermillion origin-top z-0 hidden md:block"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "circOut" }}
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.24 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-2xl w-full mx-auto text-center mb-12 px-4"
      >
        <h2 className="text-vermillion font-orbitron text-4xl md:text-5xl font-bold mb-5 drop-shadow-lg">
          Our Edge
        </h2>
        <p className="font-orbitron text-white/90 text-2xl md:text-3xl mb-4">
          Engineering brands for tomorrow. Powered by vision. Driven by results.
        </p>
        <p className="font-sora text-light-gray text-lg md:text-xl">
          Axionyx blends intelligence, precision, and relentless innovation to
          help brands scale beyond the launch point. We move fast, build smart,
          and partner long-term—so your digital legacy is built to last.
        </p>
      </motion.div>
      {/* Values */}
      <motion.ul
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.24 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="flex flex-wrap gap-4 justify-center items-center"
      >
        {values.map((val) => (
          <li key={val}>
            <span className="px-6 py-2 bg-zinc-900/70 text-vermillion font-sora text-base md:text-lg rounded-full border border-vermillion/40 shadow-sm tracking-wide">
              {val}
            </span>
          </li>
        ))}
      </motion.ul>
      <motion.div
        className="absolute right-6 top-10 bottom-10 w-px bg-vermillion origin-top z-0 hidden md:block"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "circOut" }}
      />
    </section>
  );
}
