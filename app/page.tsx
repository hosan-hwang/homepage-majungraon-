import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";
import { Hero } from "@/components/sections/Hero";
import { SituationPicker } from "@/components/sections/SituationPicker";
import { Timeline } from "@/components/sections/Timeline";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { BrandLogos } from "@/components/sections/BrandLogos";
import { ContactForm } from "@/components/sections/ContactForm";
import { Faq } from "@/components/sections/Faq";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <SituationPicker />
        <Timeline />
        <ServiceGrid />
        <BrandLogos />
        <ContactForm />
        <Faq />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
