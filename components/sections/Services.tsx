"use client";
import { services } from "@/data";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 md:py-32 flex flex-col items-center"
    >
      <div className="max-w-2xl w-full mx-auto text-center mb-16 px-4">
        <h2 className="text-vermillion font-orbitron text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Services
        </h2>
        <p className="font-sora text-light-gray text-xl md:text-2xl">
          Our legacy-building skills, designed for brands ready to scale and
          stand out.
        </p>
      </div>
      <motion.div
        className="absolute left-6 top-10 bottom-10 w-px bg-vermillion origin-top z-0 hidden md:block"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "circOut" }}
      />

      <motion.ol
        className="relative w-full max-w-2xl mx-auto flex flex-col gap-10 md:gap-14 px-4 "
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {services.map((service) => (
          <motion.li
            key={service.title}
            variants={item}
            className="relative pl-20 md:pl-28 flex flex-col items-start group
    transition-transform duration-200
    hover:scale-[1.025] focus-within:scale-[1.025]
    hover:shadow-lg focus-within:shadow-lg"
          >
            <div className="absolute left-0 top-1.5 flex flex-col items-center z-10">
              <span className="bg-vermillion text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg mb-2 transition group-hover:scale-105">
                <service.icon size={28} strokeWidth={2.2} />
              </span>
            </div>
            <h3 className="font-orbitron text-2xl md:text-3xl text-white font-bold mb-2 drop-shadow-lg">
              {service.title}
            </h3>
            <p className="font-sora text-light-gray text-lg md:text-xl">
              {service.description}
            </p>
          </motion.li>
        ))}
      </motion.ol>
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
