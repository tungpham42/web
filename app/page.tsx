import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <Services />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
