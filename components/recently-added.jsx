import { stripe } from "../lib/stripe";
import React from "react";
import { ProductCard } from "./product-card";

export default async function RecentlyAdded() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 9,
  });
  return (
    <div className=" py-8">
      <h1 className="text-3xl font-bold leading-none tracking-tight text-foreground text-center mb-8">
        Recently Products
      </h1>
      <div className="bg-neutral-300 shadow-2xl ">
        <ul className="no-scrollbar m-2 mt-6 flex flex-row gap-4 overflow-x-auto py-4 ">
          {products.data.map((product) => (
            <li key={product.id} className=" min-w-[250px] max-w-[250px]">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
