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
    title: "Allset Repair",
    description:
      "Delivering high-quality repair services that extend the life of your appliances.",
    images: ["/Screenshot 2025-05-22 095023.png"],
    tag: "Rapair",
    stack: ["Next.js", "Tailwind", "Vercel"],
    url: "https://molli-repair.vercel.app/",
  },
  {
    title: "Cake Haven",
    description: "Your local cake enthusi-ist shop!",
    images: ["/Screenshot 2025-06-19 133941.png"],
    tag: "E-commerce / UX",
    stack: ["Next.js", "Tailwind", "Node.js", "Vercel", "Typescript"],
    url: "https://bit.ly/4n8OG3t",
  },
  {
    title: "Pivot Commerce",
    description:
      "Launched an e-commerce ecosystem with custom product builders and one-click checkout.",
    images: ["/projects/pivot-1.jpg", "/projects/pivot-2.jpg"],
    tag: "E-Commerce / Apps",
    stack: ["Shopify", "Node.js", "Cloudinary"],
    url: "#",
  },
  {
    title: "Nexify Health",
    description:
      "Crafted a HIPAA-compliant portal and mobile web app for telehealth at scale.",
    images: ["/projects/nexify-1.jpg"],
    tag: "Health / Platform",
    stack: ["React", "AWS", "Twilio"],
    url: "#",
  },
  {
    title: "Quantum Media",
    description:
      "Built a blazing-fast, immersive news platform for a next-gen media startup.",
    images: ["/projects/quantum-1.jpg", "/projects/quantum-2.jpg"],
    tag: "Media / Publishing",
    stack: ["Next.js", "Tailwind", "GraphQL"],
    url: "#",
  },
];

// --- Add more data exports as your site grows! ---
// export const team = [...];
// export const projects = [...];
