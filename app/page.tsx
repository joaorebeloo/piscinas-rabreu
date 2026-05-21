import { BenefitsBar } from "@/components/BenefitsBar";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InstallationGuideVideo } from "@/components/InstallationGuideVideo";
import { LeadForm } from "@/components/LeadForm";
import { ProductCatalog } from "@/components/ProductCatalog";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { businessWhatsAppNumber } from "@/data/i18n";
import { getSiteUrl } from "@/data/site";

function JsonLd() {
  const siteUrl = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": new URL("/#business", siteUrl).toString(),
        name: "Piscinas R Abreu",
        url: siteUrl.toString(),
        telephone: `+${businessWhatsAppNumber}`,
        image: new URL("/images/hero-seedance-poster.png", siteUrl).toString(),
        logo: new URL("/images/hero-seedance-poster.png", siteUrl).toString(),
        description:
          "Venda de piscinas em Portugal, com catálogo de modelos, aconselhamento especializado e orçamento gratuito.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Alcobaça",
          addressRegion: "Leiria",
          addressCountry: "PT",
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Leiria" },
          { "@type": "Country", name: "Portugal" },
        ],
        priceRange: "$$",
        sameAs: ["https://wa.me/351934643669"],
      },
      {
        "@type": "Service",
        "@id": new URL("/#pool-sales", siteUrl).toString(),
        name: "Venda de piscinas",
        serviceType: "Venda de piscinas",
        provider: { "@id": new URL("/#business", siteUrl).toString() },
        areaServed: { "@type": "Country", name: "Portugal" },
        offers: {
          "@type": "OfferCatalog",
          name: "Catálogo de piscinas",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Piscinas personalizadas",
                category: "Piscinas",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": new URL("/#website", siteUrl).toString(),
        url: siteUrl.toString(),
        name: "Piscinas R Abreu",
        publisher: { "@id": new URL("/#business", siteUrl).toString() },
        inLanguage: "pt-PT",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--color-foam)] text-[var(--color-navy)]">
      <JsonLd />
      <Header />
      <Hero />
      <BenefitsBar />
      <ProductCatalog />
      <InstallationGuideVideo />
      <BeforeAfter />
      <Gallery />
      <Testimonials />
      <LeadForm />
      <Stats />
      <Footer />
      <WhatsAppFloatingButton />
    </main>
  );
}
