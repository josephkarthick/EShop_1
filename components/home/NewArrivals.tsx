"use client";

import ProductCard from "@/components/product/ProductCard";

type Props = {
  products: any[];
};

export default function NewArrivals({ products }: Props) {
  return (
    <section className="section-product padding-tb-50">
      <div className="container">
        <div className="row">

          {products.map((product: any) => (

            <div
              className="col-xl-3 col-md-4 col-6 mb-24 bb-product-box"
              key={product.id}
            >

              <ProductCard product={product} />

            </div>

          ))}

        </div>
      </div>
    </section>
  );
}