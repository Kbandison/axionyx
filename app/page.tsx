import Footer from "@/components/Footer";
import NavBar from "@/components/layout/NavBar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Projects />
      <Contact />
      <Footer />
      {/* or <HeroSplit /> */}
      {/* other sections... */}
    </>
  );
}
