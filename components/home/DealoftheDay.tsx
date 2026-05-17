"use client";

import ProductCard from "@/components/product/ProductCard";

interface Props {
  products: any[];
}

export default function DealoftheDay({ products }: Props) {

  // FILTER ONLY DEAL PRODUCTS
  const deals = products.filter(
    (item: any) =>
      item.day_of_the_deal === true
  );

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

                  {deals.map((product: any) => (

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