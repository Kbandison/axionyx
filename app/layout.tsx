import GridBackground from "@/components/GridBackground";
import "./globals.css";
import { Inter, Sora, Orbitron } from "next/font/google";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});
const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
});

export const metadata = {
  title: "Axionyx – Digital Leverage Agency",
  description:
    "From launch to legacy—Axionyx empowers brands with premium, future-forward digital solutions. Begin your legacy with our agency’s award-winning web design, SaaS, and ongoing innovation.",
  keywords: [
    "web design agency",
    "digital agency",
    "Next.js agency",
    "Tailwind agency",
    "modern web development",
    "Axionyx",
    "SaaS design",
    "UI/UX",
    "branding",
    "future-forward",
    "premium web",
    "vermilion",
  ],
  openGraph: {
    title: "Axionyx – Digital Leverage Agency",
    description:
      "Empowering brands to scale and win with future-forward web design and digital solutions. Partner with Axionyx for ongoing innovation.",
    url: "https://www.yoursite.com",
    siteName: "Axionyx",
    images: [
      {
        url: "/og-image.png", // Place a custom image in /public
        width: 1200,
        height: 630,
        alt: "Axionyx Agency Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axionyx – Digital Leverage Agency",
    description:
      "Empowering brands to scale and win with future-forward web design and digital solutions.",
    images: ["/og-image.png"],
  },
  icons: [
    { rel: "icon", url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    { rel: "icon", url: "/icon.png", sizes: "512x512", type: "image/png" },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  robots: "index, follow",
  authors: [{ name: "Your Name", url: "https://www.yoursite.com" }],
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${orbitron.variable}`}
    >
      <head>
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon.png" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-base text-white ...">
        <Analytics />
        <GridBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
