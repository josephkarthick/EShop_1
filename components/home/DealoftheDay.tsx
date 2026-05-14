"use client";

import { useEffect, useState } from "react";

import ProductCard from "@/components/product/ProductCard";

export default function DealoftheDay() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const res = await fetch(
          "http://127.0.0.1:8000/products/"
        );

        const data = await res.json();

        // ONLY DEAL PRODUCTS
        const deals = data.filter(
          (item: any) =>
            item.day_of_the_deal === true
        );

        setProducts(deals);

      } catch (error) {

        console.log(error);

      }

    };

    fetchProducts();

  }, []);

  return (
    <>
      <section className="section-deal padding-tb-50">

        <div className="container">

          <div className="row">

            <div className="col-12">

              <div
                className="section-title bb-deal"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={200}
              >

                <div className="section-detail">

                  <h2 className="bb-title">

                    Day of the <span>deal</span>

                  </h2>

                  <p>
                    Don't wait. The time will never be just right.
                  </p>

                </div>

                <div
                  id="dealend"
                  className="dealend-timer"
                />

              </div>

            </div>

            <div className="col-12">

              <div className="bb-deal-slider">

                <div className="bb-deal-block owl-carousel">

                  {products.map((product: any) => (

                    <div
                      key={product.id}
                      className="bb-deal-card"
                    >

                      <ProductCard
                        product={product}
                      />

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );

}