import { BenefitsBar } from "@/components/BenefitsBar";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { ProductCatalog } from "@/components/ProductCatalog";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--color-foam)] text-[var(--color-navy)]">
      <Header />
      <Hero />
      <BenefitsBar />
      <BeforeAfter />
      <ProductCatalog />
      <Gallery />
      <Testimonials />
      <LeadForm />
      <Stats />
      <Footer />
      <WhatsAppFloatingButton />
    </main>
  );
}
