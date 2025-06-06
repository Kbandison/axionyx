"use client";
import { useEffect, useState } from "react";
import { testimonials } from "@/data";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18 },
  },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 28 },
};

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    function checkMobile() {
      setIsMobile(window.innerWidth < 768);
    }
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!mounted) return null;

  const visibleCount = showAll ? testimonials.length : isMobile ? 4 : 6;
  const displayTestimonials = testimonials.slice(0, visibleCount);

  return (
    <section
      id="testimonials"
      className="relative py-20 md:py-32 flex flex-col items-center"
    >
      <motion.div
        className="absolute left-6 top-10 bottom-10 w-px bg-vermillion origin-top z-0 hidden md:block"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "circOut" }}
      />
      <div className="max-w-2xl w-full mx-auto text-center mb-16 px-4">
        <h2 className="text-vermillion font-orbitron text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Legacy Partners Reviews
        </h2>
        <p className="font-sora text-light-gray text-xl md:text-2xl">
          Real impact, real brands—discover what our clients say about their
          legacy with Axionyx.
        </p>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full max-w-4xl px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
      >
        <AnimatePresence initial={false}>
          {displayTestimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.text + idx}
              variants={item}
              initial="hidden"
              animate="show"
              exit="exit"
              layout
              className="
                bg-card rounded-xl shadow-lg p-8 flex flex-col gap-6 relative
                transition-transform duration-200
                hover:scale-105 focus-within:scale-105
                hover:shadow-xl focus-within:shadow-xl
              "
            >
              <Quote className="absolute -top-7 left-6 w-10 h-10 text-vermillion opacity-60" />
              <p className="font-sora text-lg md:text-xl text-white mb-2 drop-shadow">
                {testimonial.text}
              </p>
              <div>
                <span className="font-orbitron text-vermillion text-base font-semibold">
                  {testimonial.author}
                </span>
                <span className="font-sora text-light-gray text-sm block">
                  {testimonial.role}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {/* Show More Button */}
      {!showAll && testimonials.length > visibleCount && (
        <button
          className="mt-10 px-6 py-3 bg-vermillion text-white font-sora font-semibold rounded-xl shadow-lg hover:bg-pale-red transition focus:outline-none focus:ring-2 focus:ring-vermillion focus:ring-offset-2"
          onClick={() => setShowAll(true)}
          aria-label="Show more testimonials"
        >
          Show more reviews
        </button>
      )}
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
