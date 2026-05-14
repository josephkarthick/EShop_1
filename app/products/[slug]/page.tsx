"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Product = {
  id: number;
  name: string;
  slug: string;
  short_description: string;
  description: string;
  sku: string;
  price: number;
  sale_price: number;
  stock_qty: number;
  material: string;
  color: string;
  size: string;
  weight: number;
  front_image: string;
  back_image: string;
};

export default function ProductDetailsPage() {

  const params = useParams();

  const slug = params.slug;

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {

    const fetchProduct = async () => {

      try {

        const res = await fetch(
          `http://127.0.0.1:8000/products/`
        );

        const data = await res.json();

        const foundProduct = data.find(
          (item: Product) => item.slug === slug
        );

        setProduct(foundProduct);

      } catch (error) {

        console.log(error);

      }

    };

    fetchProduct();

  }, [slug]);

  if (!product) {

    return (
      <div className="container py-5">
        Loading...
      </div>
    );

  }

  return (
    <>
      <section className="section-product padding-tb-50">

        <div className="container">

          <div className="row">

            <div className="col-12">

              <div className="bb-single-pro">

                <div className="row">

                  {/* PRODUCT IMAGE */}
                  <div className="col-lg-5 col-12 mb-24">

                    <div className="single-pro-slider">

                      <div className="single-product-cover">

                        <div className="single-slide zoom-image-hover">

                          <img
                            className="img-responsive"
                            src={product.front_image}
                            alt={product.name}
                          />

                        </div>

                        {product.back_image && (

                          <div className="single-slide zoom-image-hover">

                            <img
                              className="img-responsive"
                              src={product.back_image}
                              alt={product.name}
                            />

                          </div>

                        )}

                      </div>

                      <div className="single-nav-thumb">

                        <div className="single-slide">

                          <img
                            className="img-responsive"
                            src={product.front_image}
                            alt={product.name}
                          />

                        </div>

                        {product.back_image && (

                          <div className="single-slide">

                            <img
                              className="img-responsive"
                              src={product.back_image}
                              alt={product.name}
                            />

                          </div>

                        )}

                      </div>

                    </div>

                  </div>

                  {/* PRODUCT DETAILS */}
                  <div className="col-lg-7 col-12 mb-24">

                    <div className="bb-single-pro-contact">

                      <div className="bb-sub-title">

                        <h4>
                          {product.name}
                        </h4>

                      </div>

                      <div className="bb-single-rating">

                        <span className="bb-pro-rating">

                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-line" />

                        </span>

                        <span className="bb-read-review">

                          |&nbsp;&nbsp;
                          <a href="#bb-spt-nav-review">
                            Ratings
                          </a>

                        </span>

                      </div>

                      <p>
                        {product.short_description}
                      </p>

                      {/* PRICE */}
                      <div className="bb-single-price-wrap">

                        <div className="bb-single-price">

                          <div className="price">

                            <h5>

                              ₹{product.sale_price || product.price}

                            </h5>

                          </div>

                          {product.sale_price && (

                            <div className="mrp">

                              <p>

                                M.R.P. :
                                <span>
                                  ₹{product.price}
                                </span>

                              </p>

                            </div>

                          )}

                        </div>

                        <div className="bb-single-price">

                          <div className="sku">

                            <h5>
                              SKU#: {product.sku}
                            </h5>

                          </div>

                          <div className="stock">

                            <span>

                              {product.stock_qty > 0
                                ? "In Stock"
                                : "Out Of Stock"}

                            </span>

                          </div>

                        </div>

                      </div>

                      {/* PRODUCT INFO */}
                      <div className="bb-single-list">

                        <ul>

                          <li>
                            <span>Material :</span>
                            {product.material}
                          </li>

                          <li>
                            <span>Color :</span>
                            {product.color}
                          </li>

                          <li>
                            <span>Size :</span>
                            {product.size}
                          </li>

                          <li>
                            <span>Weight :</span>
                            {product.weight} Kg
                          </li>

                        </ul>

                      </div>

                      {/* QTY */}
                      <div className="bb-single-qty">

                        <div className="qty-plus-minus">

                          <input
                            className="qty-input"
                            type="text"
                            defaultValue={1}
                          />

                        </div>

                        <div className="buttons">

                          <a
                            href="javascript:void(0)"
                            className="bb-btn-2"
                          >
                            Add To Cart
                          </a>

                        </div>

                        <ul className="bb-pro-actions">

                          <li className="bb-btn-group">

                            <a href="javascript:void(0)">

                              <i className="ri-heart-line" />

                            </a>

                          </li>

                          <li className="bb-btn-group">

                            <a href="javascript:void(0)">

                              <i className="ri-eye-line" />

                            </a>

                          </li>

                        </ul>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* TABS */}
              <div className="bb-single-pro-tab">

                <div className="bb-pro-tab">

                  <ul className="bb-pro-tab-nav nav">

                    <li className="nav-item">

                      <a
                        className="nav-link active"
                        data-bs-toggle="tab"
                        href="#detail"
                      >
                        Detail
                      </a>

                    </li>

                    <li className="nav-item">

                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#information"
                      >
                        Information
                      </a>

                    </li>

                  </ul>

                </div>

                <div className="tab-content">

                  {/* DETAIL */}
                  <div
                    className="tab-pane fade show active"
                    id="detail"
                  >

                    <div className="bb-inner-tabs">

                      <div className="bb-details">

                        <p>
                          {product.description}
                        </p>

                      </div>

                    </div>

                  </div>

                  {/* INFORMATION */}
                  <div
                    className="tab-pane fade"
                    id="information"
                  >

                    <div className="bb-inner-tabs">

                      <div className="information">

                        <ul>

                          <li>
                            <span>Weight</span>
                            {product.weight} Kg
                          </li>

                          <li>
                            <span>Color</span>
                            {product.color}
                          </li>

                          <li>
                            <span>Material</span>
                            {product.material}
                          </li>

                          <li>
                            <span>Size</span>
                            {product.size}
                          </li>

                          <li>
                            <span>SKU</span>
                            {product.sku}
                          </li>

                        </ul>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}