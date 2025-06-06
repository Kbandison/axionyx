"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

const projectTypes = [
  "Website Design",
  "Branding",
  "SaaS App",
  "E-commerce",
  "Consultation",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      // Optionally show error
      alert("Sorry, there was a problem. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 flex flex-col items-center "
    >
      <motion.div
        className="absolute left-6 top-10 bottom-10 w-px bg-vermillion origin-top z-0 hidden md:block"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "circOut" }}
      />
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.16 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-lg w-full mx-auto text-center mb-12 px-4"
      >
        <h2 className="text-vermillion font-orbitron text-4xl md:text-5xl font-bold mb-5 drop-shadow-lg">
          Start Your Legacy
        </h2>
        <p className="font-sora text-light-gray text-lg md:text-xl mb-3">
          Let’s talk about how Axionyx can help you grow.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.13 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="w-full max-w-xl bg-zinc-900/80 rounded-2xl shadow-2xl p-8 md:p-12 relative"
      >
        {submitted ? (
          <div className="text-center py-16">
            <h3 className="font-orbitron text-2xl text-vermillion mb-4">
              Thank you!
            </h3>
            <p className="font-sora text-light-gray text-lg">
              Your message has been sent.
              <br />
              We’ll be in touch soon to help start your legacy.
            </p>
          </div>
        ) : (
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-sora text-white text-left">
                Name <span className="text-vermillion">*</span>
              </label>
              <input
                id="name"
                name="name"
                required
                type="text"
                className="px-4 py-3 rounded-xl bg-base border border-white/10 text-white font-sora text-base outline-none focus:ring-2 focus:ring-vermillion"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-sora text-white text-left">
                Email <span className="text-vermillion">*</span>
              </label>
              <input
                id="email"
                name="email"
                required
                type="email"
                className="px-4 py-3 rounded-xl bg-base border border-white/10 text-white font-sora text-base outline-none focus:ring-2 focus:ring-vermillion"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-sora text-white text-left">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="px-4 py-3 rounded-xl bg-base border border-white/10 text-white font-sora text-base outline-none focus:ring-2 focus:ring-vermillion"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="project"
                className="font-sora text-white text-left"
              >
                Project Type
              </label>
              <select
                id="project"
                name="project"
                className="px-4 py-3 rounded-xl bg-base border border-white/10 text-white font-sora text-base outline-none focus:ring-2 focus:ring-vermillion"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a project type
                </option>
                {projectTypes.map((pt) => (
                  <option key={pt} value={pt}>
                    {pt}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-sora text-white text-left"
              >
                Message <span className="text-vermillion">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="px-4 py-3 rounded-xl bg-base border border-white/10 text-white font-sora text-base outline-none focus:ring-2 focus:ring-vermillion resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="cta-magnetic mt-3 px-6 py-3 bg-vermillion text-white font-sora font-semibold rounded-xl shadow-lg hover:bg-pale-red transition focus:outline-none focus:ring-2 focus:ring-vermillion focus:ring-offset-2"
            >
              Begin My Legacy
            </motion.button>
          </form>
        )}
      </motion.div>
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
