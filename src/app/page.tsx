import { Banner } from "@/_components/Banner";
import { Navbar } from "@/_components/Navbar";
import { Hero } from "@/_components/Hero";
import { LogoTicker } from "@/_components/LogoTicker";
import { Features } from "@/_components/Features";
import { ProductShowcase } from "@/_components/ProductShowcase";
import { FAQs } from "@/_components/FAQs";
import { CallToAction } from "@/_components/CallToAction";
import { Footer } from "@/_components/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <FAQs />
      <CallToAction />
      <Footer />
    </>
  );
}
