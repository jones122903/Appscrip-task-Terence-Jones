import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/products/ProductSection";
import Footer from "@/components/Footer";

export default function Home() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Mettā Muse Product Collection",
    description:
      "Discover the Mettā Muse product collection including clothing, accessories and jewellery.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema),
        }}
      />

      <Header />

      <main>
        <Hero />

        <ProductSection />
      </main>

      <Footer />
    </>
  );
}