// data/index.ts
import { Target, Sparkle, Atom, TrendingUp, Quote } from "lucide-react";

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

// --- Services ---
export const services = [
  {
    title: "Digital Strategy",
    description:
      "Future-proof planning that aligns technology, goals, and growth—your digital blueprint for ongoing advantage.",
    icon: Target,
  },
  {
    title: "Brand Experience",
    description:
      "Human-centered brand touchpoints—crafted for memorable, scalable, and unmistakable impact.",
    icon: Sparkle,
  },
  {
    title: "Next.js Development",
    description:
      "Cutting-edge, performant websites and SaaS—built with Next.js, Tailwind, and a focus on innovation.",
    icon: Atom,
  },
  {
    title: "Growth, Support & Optimization",
    description:
      "Relentless improvement, hands-on partnership, and support to scale—long after launch.",
    icon: TrendingUp,
  },
];

// --- Testimonials (Sample, add more as needed) ---
export const testimonials = [
  {
    author: "Jane Doe",
    role: "CEO, BrandCo",
    text: "Axionyx elevated our digital presence beyond expectations. Their process is as impressive as their results.",
    icon: Quote,
  },
  {
    author: "John Smith",
    role: "CTO, StartupX",
    text: "From strategy to launch, their attention to detail and forward-thinking design gave us a huge edge.",
    icon: Quote,
  },
  {
    author: "Elena Garcia",
    role: "Founder, Visionary Labs",
    text: "The Axionyx team is truly invested in client success. Our web app’s growth speaks for itself.",
    icon: Quote,
  },
  {
    author: "Marcus Lee",
    role: "Head of Product, Pivot",
    text: "Future-forward is the best description. The site experience is fast, beautiful, and robust.",
    icon: Quote,
  },
  {
    author: "Priya Patel",
    role: "Director of Marketing, Helix",
    text: "Our rebrand launched seamlessly. I always felt supported and understood throughout the project.",
    icon: Quote,
  },
  {
    author: "Louis Chen",
    role: "CEO, Quantum Media",
    text: "Professional, passionate, and precise. Axionyx delivered on every promise.",
    icon: Quote,
  },
  {
    author: "chantel Patel",
    role: "Director of Marketing, Helix",
    text: "Our rebrand launched seamlessly. I always felt supported and understood throughout the project.",
    icon: Quote,
  },
  {
    author: "Jenny Chen",
    role: "CEO, Quantum Media",
    text: "Professional, passionate, and precise. Axionyx delivered on every promise.",
    icon: Quote,
  },
];

export const projects = [
  {
    title: "Galon Consulting",
    description:
      "Galon Consulting Services, LLC provides world-class solutions in billing, compliance, and patient care for practices of all sizes.",
    images: [
      "/Screenshot 2025-06-10 082614.png",
      "/Screenshot 2025-06-10 082345.png",
      "/Screenshot 2025-06-10 082227.png",
    ],
    tag: "Platform",
    stack: ["Next.js", "Tailwind", "Vercel"],
    url: "https://galon-consulting.vercel.app/",
  },
  {
    title: "FlexFit Gym",
    description:
      "Join FlexFit Gym and discover the perfect balance of expert guidance, state-of-the-art equipment, and a supportive community to help you achieve your fitness goals.",
    images: [
      "/Screenshot 2025-07-07 163435.png",
      "/Screenshot 2025-07-07 163511.png",
      "/Screenshot 2025-07-07 163456.png",
    ],
    tag: "Platform / Gym",
    stack: ["Next.js", "Tailwind", "Vercel, Typescript"],
    url: "https://flexfit-gym-eight.vercel.app/",
  },
  {
    title: "Reparation Road",
    description:
      "Uncover your family history and explore Black heritage with Reparation Road’s research, genealogy, and cultural resources.",
    images: [
      "/Screenshot 2025-06-30 092759.png",
      "/Screenshot 2025-06-30 095029.png",
      "/Screenshot 2025-06-30 095055.png",
    ],
    tag: "History / UX",
    stack: ["Next.js", "Tailwind", "Node.js", "Vercel", "Typescript"],
    url: "reparationroad.org",
  },
  {
    title: "Cake Haven",
    description: "Your local cake enthusi-ist shop!",
    images: [
      "/Screenshot 2025-06-19 133941.png",
      "/Screenshot 2025-06-19 134235.png",
      "/Screenshot 2025-06-19 134255.png",
      "/Screenshot 2025-06-19 134320.png",
    ],
    tag: "E-commerce / UX",
    stack: ["Next.js", "Tailwind", "Node.js", "Vercel", "Typescript"],
    url: "https://bit.ly/4n8OG3t",
  },
  {
    title: "Allset Repair",
    description:
      "Delivering high-quality repair services that extend the life of your appliances.",
    images: ["/Screenshot 2025-05-22 095023.png"],
    tag: "Rapair",
    stack: ["Next.js", "Tailwind", "Vercel"],
    url: "https://molli-repair.vercel.app/",
  },
];

// --- Add more data exports as your site grows! ---
// export const team = [...];
// export const projects = [...];
