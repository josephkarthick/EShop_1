"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useCart } from "@/context/CartContext";

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

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://eshop-d0hk.onrender.com";

export default function ProductDetailsPage() {

  const params = useParams();

  const slug = params.slug;

  const { addToCart } = useCart();

  const [product, setProduct] = useState<Product | null>(null);

  const [qty, setQty] = useState(1);

  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {

    const fetchProduct = async () => {

      try {

        const res = await fetch(
          `${API_BASE_URL}/products/`
        );

        const data = await res.json();

        const foundProduct = data.find(
          (item: Product) => item.slug === slug
        );

        setProduct(foundProduct);

        const images = [
          foundProduct.front_image,
          foundProduct.back_image,
        ].filter(Boolean);

        setSelectedImage(images[0]);

      } catch (error) {

        console.log(error);

      }

    };

    fetchProduct();

  }, [slug]);

  const handleAddToCart = () => {

    if (!product) return;

    const cartProduct = {
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.sale_price || product.price,
      image: product.front_image,
      quantity: qty,
    };

    addToCart(cartProduct);

  };

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

                      {/* MAIN IMAGE */}
                      <div className="single-product-cover">

                        <div className="single-slide zoom-image-hover">

                          <img
                            className="img-responsive w-100"
                            src={selectedImage}
                            alt={product.name}
                            style={{
                              borderRadius: "14px",
                              objectFit: "cover",
                              width: "100%",
                              height: "500px",
                              border: "1px solid #eee",
                            }}
                          />

                        </div>

                      </div>

                      {/* THUMBNAILS */}
                      <div
                        className="single-nav-thumb mt-3"
                        style={{
                          display: "flex",
                          gap: "12px",
                          flexWrap: "wrap",
                        }}
                      >

                        {[
                          product.front_image,
                          product.back_image,
                        ]
                          .filter(Boolean)
                          .map((image, index) => (

                            <div
                              key={index}
                              className="single-slide"
                              onClick={() => setSelectedImage(image)}
                              style={{
                                cursor: "pointer",
                                border:
                                  selectedImage === image
                                    ? "2px solid #4a63e7"
                                    : "1px solid #ddd",
                                borderRadius: "10px",
                                overflow: "hidden",
                                width: "90px",
                                height: "90px",
                                transition: "0.3s",
                              }}
                            >

                              <img
                                className="img-responsive w-100 h-100"
                                src={image}
                                alt={product.name}
                                style={{
                                  objectFit: "cover",
                                }}
                              />

                            </div>

                        ))}

                      </div>

                    </div>

                  </div>

                  {/* PRODUCT DETAILS */}
                  <div className="col-lg-7 col-12 mb-24">

                    <div className="bb-single-pro-contact">

                      <div className="bb-sub-title">

                        <h2
                          style={{
                            fontWeight: 700,
                            marginBottom: "15px",
                          }}
                        >
                          {product.name}
                        </h2>

                      </div>

                      {/* RATING */}
                      <div className="bb-single-rating mb-3">

                        <span className="bb-pro-rating">

                          <i className="ri-star-fill text-warning" />
                          <i className="ri-star-fill text-warning" />
                          <i className="ri-star-fill text-warning" />
                          <i className="ri-star-fill text-warning" />
                          <i className="ri-star-line text-warning" />

                        </span>

                        <span className="bb-read-review ms-2">

                          (4.0 Ratings)

                        </span>

                      </div>

                      {/* SHORT DESCRIPTION */}
                      <p
                        style={{
                          color: "#666",
                          lineHeight: "28px",
                          fontSize: "15px",
                        }}
                      >
                        {product.short_description}
                      </p>

                      {/* PRICE */}
                      <div
                        className="bb-single-price-wrap"
                        style={{
                          marginTop: "25px",
                          marginBottom: "25px",
                        }}
                      >

                        <div
                          className="d-flex align-items-center gap-3"
                        >

                          <h3
                            style={{
                              color: "#4a63e7",
                              fontWeight: 700,
                              margin: 0,
                            }}
                          >
                            ₹{product.sale_price || product.price}
                          </h3>

                          {product.sale_price && (

                            <span
                              style={{
                                textDecoration: "line-through",
                                color: "#999",
                                fontSize: "18px",
                              }}
                            >
                              ₹{product.price}
                            </span>

                          )}

                        </div>

                        <div
                          style={{
                            marginTop: "10px",
                          }}
                        >

                          <span
                            style={{
                              color:
                                product.stock_qty > 0
                                  ? "green"
                                  : "red",
                              fontWeight: 600,
                            }}
                          >
                            {product.stock_qty > 0
                              ? "In Stock"
                              : "Out Of Stock"}

                          </span>

                        </div>

                      </div>

                      {/* PRODUCT INFO */}
                      <div className="bb-single-list">

                        <ul
                          style={{
                            padding: 0,
                            margin: 0,
                            listStyle: "none",
                          }}
                        >

                          <li className="mb-2">
                            <strong>SKU :</strong> {product.sku}
                          </li>

                          <li className="mb-2">
                            <strong>Material :</strong> {product.material}
                          </li>

                          <li className="mb-2">
                            <strong>Color :</strong> {product.color}
                          </li>

                          <li className="mb-2">
                            <strong>Size :</strong> {product.size}
                          </li>

                          <li className="mb-2">
                            <strong>Weight :</strong> {product.weight} Kg
                          </li>

                        </ul>

                      </div>

                      {/* QUANTITY */}
                      <div
                        className="bb-single-qty mt-4"
                      >

                        <div
                          className="d-flex align-items-center gap-3 flex-wrap"
                        >

                          {/* QTY BOX */}
                          <div
                            className="qty-plus-minus d-flex align-items-center"
                            style={{
                              border: "1px solid #ddd",
                              borderRadius: "10px",
                              overflow: "hidden",
                            }}
                          >

                            <button
                              className="qty-btn"
                              onClick={() =>
                                setQty((prev) =>
                                  prev > 1 ? prev - 1 : 1
                                )
                              }
                              style={{
                                width: "45px",
                                height: "45px",
                                border: "none",
                                background: "#f5f5f5",
                              }}
                            >
                              -
                            </button>

                            <input
                              className="qty-input"
                              type="text"
                              value={qty}
                              readOnly
                              style={{
                                width: "60px",
                                textAlign: "center",
                                border: "none",
                              }}
                            />

                            <button
                              className="qty-btn"
                              onClick={() =>
                                setQty((prev) => prev + 1)
                              }
                              style={{
                                width: "45px",
                                height: "45px",
                                border: "none",
                                background: "#f5f5f5",
                              }}
                            >
                              +
                            </button>

                          </div>

                          {/* ADD TO CART */}
                          <button
                            type="button"
                            className="bb-btn-2"
                            onClick={handleAddToCart}
                            style={{
                              height: "48px",
                              padding: "0 30px",
                              borderRadius: "10px",
                              background: "#4a63e7",
                              border: "none",
                              color: "#fff",
                              fontWeight: 600,
                            }}
                          >
                            Add To Cart
                          </button>

                          {/* WISHLIST */}
                          <button
                            style={{
                              width: "48px",
                              height: "48px",
                              borderRadius: "10px",
                              border: "1px solid #ddd",
                              background: "#fff",
                            }}
                          >
                            <i className="ri-heart-line" />
                          </button>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* TABS */}
              <div className="bb-single-pro-tab mt-5">

                <div className="bb-pro-tab">

                  <ul className="bb-pro-tab-nav nav">

                    <li className="nav-item">

                      <a
                        className="nav-link active"
                        data-bs-toggle="tab"
                        href="#detail"
                      >
                        Description
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

                <div className="tab-content mt-4">

                  {/* DESCRIPTION */}
                  <div
                    className="tab-pane fade show active"
                    id="detail"
                  >

                    <p
                      style={{
                        color: "#666",
                        lineHeight: "30px",
                      }}
                    >
                      {product.description}
                    </p>

                  </div>

                  {/* INFORMATION */}
                  <div
                    className="tab-pane fade"
                    id="information"
                  >

                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                      }}
                    >

                      <li className="mb-2">
                        <strong>Weight :</strong> {product.weight} Kg
                      </li>

                      <li className="mb-2">
                        <strong>Color :</strong> {product.color}
                      </li>

                      <li className="mb-2">
                        <strong>Material :</strong> {product.material}
                      </li>

                      <li className="mb-2">
                        <strong>Size :</strong> {product.size}
                      </li>

                      <li className="mb-2">
                        <strong>SKU :</strong> {product.sku}
                      </li>

                    </ul>

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