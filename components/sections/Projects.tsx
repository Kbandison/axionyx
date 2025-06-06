"use client";
import { useState, useRef } from "react";
import { projects } from "@/data";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import GridBG from "@/components/ui/GridBG";
import ProjectModal from "@/components/ui/ProjectModal";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 28 },
};

export default function Projects() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const displayProjects = showAll ? projects : projects.slice(0, 4);

  // Show less: Scroll back to grid (for accessibility and smooth UX)
  const handleShowLess = () => {
    setShowAll(false);
    setTimeout(() => {
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  return (
    <section
      id="work"
      className="relative py-20 md:py-32 flex flex-col items-center overflow-x-clip"
    >
      {/* <GridBG /> */}
      <div className="max-w-2xl w-full mx-auto text-center mb-16 px-4">
        <h2 className="text-vermillion font-orbitron text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Legacy Projects
        </h2>
        <p className="font-sora text-light-gray text-xl md:text-2xl">
          Brands, platforms, and products built for tomorrow—see how Axionyx
          drives results.
        </p>
      </div>
      <motion.div
        className="absolute left-6 top-10 bottom-10 w-px bg-vermillion origin-top z-0 hidden md:block"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "circOut" }}
      />
      <motion.div
        ref={gridRef}
        className="
          grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-10 w-full max-w-[90vw] px-4
        "
        key={displayProjects.length} // <--- forces remount on Show More/Less
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.14 }}
      >
        <AnimatePresence initial={false}>
          {displayProjects.map((project, idx) => (
            <motion.button
              key={project.title}
              type="button"
              variants={item}
              initial="hidden"
              animate="show"
              exit="exit"
              className="
                group relative bg-card rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-200
                hover:scale-[1.03] hover:shadow-2xl focus-within:scale-[1.03] focus-within:shadow-2xl
                border border-white/10 outline-none
              "
              tabIndex={0}
              onClick={() => setOpenIdx(projects.indexOf(project))}
              aria-label={`Open details for ${project.title}`}
            >
              <div className="relative w-full h-52 md:h-60">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={idx === 0}
                />
                <span className="absolute top-3 left-3 bg-vermillion text-white font-sora text-xs px-3 py-1 rounded-full shadow-lg z-10">
                  {project.tag}
                </span>
              </div>
              <div className="flex-1 flex flex-col px-6 py-6">
                <h3 className="font-orbitron text-xl md:text-2xl text-white font-bold mb-2 drop-shadow">
                  {project.title}
                </h3>
                <p className="font-sora text-light-gray text-base md:text-lg mb-4">
                  {project.description}
                </p>
                {/* Stack badges */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-zinc-900/60 text-vermillion font-sora text-xs rounded-full border border-vermillion/50 shadow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* Animated overlay */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.26 }}
              >
                <span className="text-white font-sora font-semibold text-lg bg-vermillion px-6 py-3 rounded-xl shadow-lg pointer-events-none">
                  View Details
                </span>
              </motion.div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>
      <motion.div
        className="absolute right-6 top-10 bottom-10 w-px bg-vermillion origin-top z-0 hidden md:block"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "circOut" }}
      />

      {/* Show More/Less Buttons */}
      <div className="flex gap-4 mt-10">
        {!showAll && projects.length > 4 && (
          <button
            className="px-6 py-3 bg-vermillion text-white font-sora font-semibold rounded-xl shadow-lg hover:bg-pale-red transition focus:outline-none focus:ring-2 focus:ring-vermillion focus:ring-offset-2"
            onClick={() => setShowAll(true)}
            aria-label="Show more projects"
          >
            Show more projects
          </button>
        )}
        {showAll && projects.length > 4 && (
          <button
            className="px-6 py-3 bg-white/10 text-white font-sora font-semibold rounded-xl shadow-lg hover:bg-vermillion hover:text-white transition focus:outline-none focus:ring-2 focus:ring-vermillion focus:ring-offset-2"
            onClick={handleShowLess}
            aria-label="Show less projects"
          >
            Show less
          </button>
        )}
      </div>

      {/* Modal */}
      <ProjectModal
        open={openIdx !== null}
        onClose={() => setOpenIdx(null)}
        project={openIdx !== null ? projects[openIdx] : null}
      />
    </section>
  );
}
