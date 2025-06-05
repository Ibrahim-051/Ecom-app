import { ProductCard } from "../../../components/product-card";
import { ProductDetail } from "../../../components/product-detail";
import RecentlyAdded from "../../../components/recently-added";
import { stripe } from "../../../lib/stripe";

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });

  const plainProduct = JSON.parse(JSON.stringify(product));
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  return (
    <>
      <section>
        <ProductDetail product={plainProduct} />
      </section>
      <section>
        <div>
          <h1 className="text-3xl font-bold leading-none tracking-tight text-foreground text-center mb-8">
            Products you may like
          </h1>

          <div className="bg-neutral-300 shadow-2xl">
            <ul className="no-scrollbar m-2 mt-6 flex flex-row gap-4 overflow-x-auto py-4">
              {products.data.map((product) => (
                <li key={product.id} className="min-w-[250px] max-w-[250px]">
                  <ProductCard product={product} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <RecentlyAdded />
    </>
  );
}
