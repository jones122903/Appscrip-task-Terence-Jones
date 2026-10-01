import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/products/ProductSection";
import Footer from "@/components/Footer";

async function getProducts() {
  const response = await fetch(
    "https://fakestoreapi.com/products"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export default async function Home() {
  const products = await getProducts();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Mettā Muse Product Collection",
    description:
      "Discover the Mettā Muse product collection.",
    numberOfItems: products.length,

    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,

      item: {
        "@type": "Product",
        name: product.title,
        image: product.image,
        description: product.description,

        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />

      <Header />

      <main>
        <Hero />

        <ProductSection products={products} />
      </main>

      <Footer />
    </>
  );
}