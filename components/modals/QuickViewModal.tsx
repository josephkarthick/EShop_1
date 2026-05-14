"use client";

import Link from "next/link";
import { toast } from "react-toastify";

import { useCart } from "@/context/CartContext";
import { useQuickView } from "@/context/QuickViewContext";

export default function QuickViewModal() {

  const { quickViewProduct } =
    useQuickView();

  const { addToCart } = useCart();

  const product = quickViewProduct || {};

  const handleAddToCart = () => {

    if (!product?.id) return;

    addToCart(product);

    toast.success(
      `${product.name} added to cart`
    );

  };

  return (

    <div
      className="modal fade quickview-modal"
      id="bry_quickview_modal"
      tabIndex={-1}
      role="dialog"
    >

      <div
        className="modal-dialog modal-dialog-centered"
        role="document"
      >

        <div className="modal-content">

          {/* Close */}
          <button
            type="button"
            className="qty-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            title="Close"
          />

          <div className="modal-body">

            <div className="row mb-minus-24">

              {/* Image */}
              <div className="col-md-5 col-sm-12 col-xs-12 mb-24">

                <div className="single-pro-img single-pro-img-no-sidebar">

                  <div className="single-product-scroll">

                    <div className="single-slide zoom-image-hover">

                      <img
                        className="img-responsive"
                        src={
                          product.front_image
                            ? `http://127.0.0.1:8000${product.front_image}`
                            : "/assets/img/product/default.jpg"
                        }
                        alt={product.name || "Product"}
                      />

                    </div>

                  </div>

                </div>

              </div>

              {/* Content */}
              <div className="col-md-7 col-sm-12 col-xs-12 mb-24">

                <div className="quickview-pro-content">

                  {/* Title */}
                  <h5 className="bb-quick-title">

                    <Link
                      href={
                        product.slug
                          ? `/product/${product.slug}`
                          : "#"
                      }
                    >

                      {product.name || "Product"}

                    </Link>

                  </h5>

                  {/* Rating */}
                  <div className="bb-pro-rating">

                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-line" />

                  </div>

                  {/* Description */}
                  <div className="bb-quickview-desc">

                    {
                      product.short_description ||
                      "No description available."
                    }

                  </div>

                  {/* Price */}
                  <div className="bb-quickview-price">

                    <span className="new-price">

                      ₹{product.sale_price || 0}

                    </span>

                    <span className="old-price">

                      ₹{product.price || 0}

                    </span>

                  </div>

                  {/* Size */}
                  <div className="bb-pro-variation">

                    <ul>

                      <li className="active">

                        <a
                          href="#"
                          className="bb-opt-sz"
                        >

                          {product.size || "Size"}

                        </a>

                      </li>

                    </ul>

                  </div>

                  {/* Cart */}
                  <div className="bb-quickview-qty">

                    <div className="qty-plus-minus">

                      <input
                        className="qty-input"
                        type="text"
                        defaultValue={1}
                      />

                    </div>

                    <div className="bb-quickview-cart">

                      <button
                        type="button"
                        className="bb-btn-1"
                        onClick={handleAddToCart}
                      >

                        <i className="ri-shopping-bag-line" />

                        Add To Cart

                      </button>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}