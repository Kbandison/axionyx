"use client";
import { useEffect, useRef, useState } from "react";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  description: string;
  images: string[];
  tag: string;
  stack: string[];
  url?: string;
};

type ProjectModalProps = {
  open: boolean;
  onClose: () => void;
  project: Project | null;
};

export default function ProjectModal({
  open,
  onClose,
  project,
}: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [imgIdx, setImgIdx] = useState(0);

  // Reset image when new project opens
  useEffect(() => {
    setImgIdx(0);
  }, [project]);

  // Focus trap and close on Escape
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setImgIdx((idx) => Math.max(0, idx - 1));
      if (e.key === "ArrowRight")
        setImgIdx((idx) =>
          Math.min((project?.images.length ?? 1) - 1, idx + 1)
        );
    };
    document.addEventListener("keydown", handleKey);
    if (modalRef.current) modalRef.current.focus();
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose, project]);

  // Prevent background scroll when modal open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center"
          onClick={onClose}
          tabIndex={-1}
        >
          <motion.div
            initial={{ y: 48, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 400 }}
            className="bg-card max-w-lg w-full mx-4 rounded-2xl shadow-2xl relative flex flex-col outline-none"
            onClick={(e) => e.stopPropagation()}
            tabIndex={0}
            ref={modalRef}
            aria-modal="true"
            role="dialog"
          >
            {/* Close Button */}
            <button
              aria-label="Close project details"
              onClick={onClose}
              className="absolute right-4 top-4 text-vermillion hover:text-white rounded p-2 z-20 focus:outline-none focus:ring-2 focus:ring-vermillion"
            >
              <X size={28} />
            </button>
            {/* Gallery */}
            <div className="relative w-full h-52 md:h-64 rounded-t-2xl overflow-hidden flex items-center justify-center bg-zinc-900">
              <Image
                src={project.images[imgIdx]}
                alt={project.title}
                fill
                className="object-cover object-center"
                priority
              />
              {/* Carousel controls */}
              {project.images.length > 1 && (
                <>
                  <button
                    aria-label="Previous image"
                    onClick={() => setImgIdx((idx) => Math.max(0, idx - 1))}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-2 z-10"
                    disabled={imgIdx === 0}
                  >
                    <ArrowLeft size={22} />
                  </button>
                  <button
                    aria-label="Next image"
                    onClick={() =>
                      setImgIdx((idx) =>
                        Math.min(project.images.length - 1, idx + 1)
                      )
                    }
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-2 z-10"
                    disabled={imgIdx === project.images.length - 1}
                  >
                    <ArrowRight size={22} />
                  </button>
                </>
              )}
              <span className="absolute top-3 left-3 bg-vermillion text-white font-sora text-xs px-3 py-1 rounded-full shadow-lg z-10">
                {project.tag}
              </span>
            </div>
            {/* Content */}
            <div className="flex-1 flex flex-col p-6">
              <h3 className="font-orbitron text-2xl text-white font-bold mb-3 drop-shadow">
                {project.title}
              </h3>
              <p className="font-sora text-light-gray text-base mb-4">
                {project.description}
              </p>
              {/* Stack badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-zinc-900/60 text-vermillion font-sora text-xs rounded-full border border-vermillion/50 shadow"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* CTA */}
              <a
                href="#contact"
                className="inline-block px-5 py-2 bg-vermillion text-white rounded-xl font-semibold shadow hover:bg-pale-red transition focus:outline-none focus:ring-2 focus:ring-vermillion"
              >
                Contact us about a project like this
              </a>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 mt-3 ml-3 bg-white/10 text-white rounded-xl font-semibold shadow hover:bg-vermillion hover:text-white transition focus:outline-none focus:ring-2 focus:ring-vermillion"
                >
                  View Live
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
