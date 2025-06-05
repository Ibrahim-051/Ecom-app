import Image from "next/image";
import { stripe } from "../lib/stripe";
import { Button } from "../components/ui/button";
import Link from "next/link";
import { ProductCard } from "../components/product-card";
import RecentlyAdded from "../components/recently-added";
import { Carousel } from "../components/carousel";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 9,
  });

  return (
    <div>
      <section className="rounded bg-neutral-200 py-8 sm:py-12">
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
          <div className="max-w-md space-y-4">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Welcome to My Ecommerce
            </h1>
            <p className="text-neutral-600">
              Discover the latest products at the best prices.
            </p>
            <Button
              asChild
              variant="default"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white"
            >
              <Link href="/products">Browse All Products</Link>
            </Button>
          </div>
          <Image
            alt={products.data[4]?.name || "Hero Image"}
            src={products.data[4]?.images?.[0] || "/placeholder-hero.png"}
            className="rounded"
            width={450}
            height={450}
          />
        </div>
      </section>
      <section>
        <div className="py-4 border-[1px] border-neutral-300 shadow-lg">
          <h2 className="text-3xl font-bold leading-none tracking-tight text-foreground text-center mb-8">
            Featured Products
          </h2>
          <ul className="no-scrollbar mt-6 flex flex-row gap-4 overflow-x-auto pb-4">
            {products.data.map((product) => (
              <li key={product.id} className="min-w-[250px] max-w-[250px]">
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="py-8">
        <Carousel />
      </section>
      <section>
        <RecentlyAdded />
      </section>
    </div>
  );
}
